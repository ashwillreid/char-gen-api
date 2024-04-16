import express from "express";
import CharacterController from "../controllers/characterControllers";

const router = express.Router();

router.get("/", CharacterController.getCharacters);

export default router;
