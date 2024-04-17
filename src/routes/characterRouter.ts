import express from "express";
import characterController from "../controllers/character/index";

const router = express.Router();

router.get("/:id", characterController.getCharacterById);
router.post("/create", characterController.createCharacter);

export default router;
