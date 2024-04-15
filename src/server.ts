import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import testRouter from "../src/routes/testRouter";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
  app.use(express.json());

  // Register API routes
  app.use("/testRouter", testRouter);

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
