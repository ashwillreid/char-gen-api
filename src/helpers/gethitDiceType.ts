import { Character, Class, Dice } from "@prisma/client";

export const getHitDiceType = (characterClass: Class) => {
  switch (characterClass) {
    case Class.BARBARIAN:
      return Dice.D12;
    case Class.FIGHTER:
    case Class.PALADIN:
    case Class.RANGER:
      return Dice.D10;
    case Class.ARTIFICER:
    case Class.BARD:
    case Class.CLERIC:
    case Class.DRUID:
    case Class.MONK:
    case Class.ROUGE:
    case Class.WARLOCK:
      return Dice.D8;
    case Class.SORCERER:
    case Class.WIZARD:
      return Dice.D6;
    default:
    //TODO: add error handling
  }
};
