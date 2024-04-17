import { Request, Response } from "express";
import { prisma } from "../../server";

export const createCharacter = async (req: Request, res: Response) => {
  try {
    if (
      req.body?.args?.name &&
      req.body?.args?.age &&
      req.body?.args?.race &&
      req.body?.args?.charClass
    ) {
      const { name, age, race, charClass } = req.body.args;
      const newCharacter = await prisma.character.create({
        data: {
          name,
          age: parseInt(age),
          race,
          charClass,
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
