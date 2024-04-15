import { Request, Response } from "express";
import { prisma } from "../server";

const createCharacter = async (req: Request, res: Response) => {
  try {
    const { name, age, race, class } = req.body;
    const newBlogPost = await prisma.character.create({
      data: {
        name,
        age,
				race,
				class
      },
    });
    res.status(200).json(newBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createCharacter,
};
