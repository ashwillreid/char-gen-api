import { Request, Response } from "express";
import { prisma } from "../server";
import { PrismaClient } from "@prisma/client";

interface charCreateArgs {
  name: string;
  age: number;
  race: string;
  class: string;
}

const createCharacter = async (req: Request, res: Response) => {
  try {
    if (
      !!req?.body?.name ||
      !!req?.body?.age ||
      !!req?.body?.race ||
      !!req?.body?.class
    ) {
      // const { name, age, race, class } = req.body;
      const { name, age, race, class: charClass } = req.body;
      const newCharacter = await prisma.character.create({
        data: {
          name,
          age,
          race,
          class: charClass,
        },
      });
      res.status(200).json(newCharacter);
    } else {
      throw new Error("YA DONE FLUBBED SON!");
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createCharacter,
};
