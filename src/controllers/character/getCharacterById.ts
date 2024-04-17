import { Request, Response } from "express";
import { prisma } from "../../server";

export const getCharacterById = async (req: Request, res: Response) => {
  console.log("up in there", req.body);

  try {
    if (req.params.id) {
      const { id } = req.params;
      const newCharacter = await prisma.character.findUnique({
        where: { id },
      });

      console.log("CHARACTER????", newCharacter);
      res.status(200).json(newCharacter);
    } else {
      throw new Error("YA DONE FLUBBED SON!");
    }
  } catch (e) {
    console.log("error?", e);
    res.status(500).json({ error: e });
  }
};
