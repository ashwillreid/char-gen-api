import { Character, Class } from "@prisma/client";

export const getHitDiceType = (character: Character) => {
  switch (character.charClass) {
    case Class.BARBARIAN:
      return "d12";
    case Class.ROUGE:
      return "d8";
    default:
    //TODO: add error handling
  }
};
