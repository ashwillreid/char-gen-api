import { Request, Response } from "express";
import { prisma } from "../server";

const createCharacter = async (req: Request, res: Response) => {
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

const getCharacterById = async (req: Request, res: Response) => {
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

const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await prisma.character.findMany();

    console.log(characters);
    res.status(200).json(characters);
  } catch (e) {
    console.log("error?", e);
    res.status(500).json({ error: e });
  }
};

export default {
  createCharacter,
  getCharacterById,
  getCharacters,
};
