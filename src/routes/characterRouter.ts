import express from "express";
import CharacterController from "../controllers/characterControllers";

const router = express.Router();

router.get("/:id", CharacterController.getCharacterById);
router.post("/create", CharacterController.createCharacter);

export default router;
