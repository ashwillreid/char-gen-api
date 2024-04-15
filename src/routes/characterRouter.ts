import express from "express";
import CharacterController from "../controllers/characterControllers";

const router = express.Router();

router.post("/create", CharacterController.createCharacter);
router.get("/get/:id", CharacterController.getCharacterById);

export default router;
