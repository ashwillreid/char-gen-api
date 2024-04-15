import { Request, Response } from "express";
import { prisma } from "../server";

const createCharacter = async (req: Request, res: Response) => {
  console.log("up in there", req.body);

  try {
    if (
      req.body.args.name &&
      req.body.args.age &&
      req.body.args.race &&
      req.body.args.charClass
    ) {
      const { name, age, race, charClass } = req.body.args;
      const newCharacter = await prisma.character.create({
        data: {
          name,
          age,
          race,
          charClass,
        },
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

export default {
  createCharacter,
};
