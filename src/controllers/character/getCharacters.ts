import { Request, Response } from "express";
import { prisma } from "../../server";

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await prisma.character.findMany();

    console.log(characters);
    res.status(200).json(characters);
  } catch (e) {
    console.log("error?", e);
    res.status(500).json({ error: e });
  }
};
