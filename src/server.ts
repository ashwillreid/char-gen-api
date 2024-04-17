import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CharacterRouter from "./routes/characterRouter";
import CharactersRouter from "./routes/charactersRouter";
import cors from "cors";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

const allowedOrigins = ["http://localhost:5001"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

async function main() {
  app.use(cors(options));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Register API routes
  app.use("/v1/character", CharacterRouter);
  app.use("/v1/characters", CharactersRouter);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
