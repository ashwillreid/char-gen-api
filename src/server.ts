import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import CharacterRouter from "./routes/characterRouter";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Register API routes
  app.use("/v1/character", CharacterRouter);

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
