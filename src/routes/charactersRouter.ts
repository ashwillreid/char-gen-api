import express from "express";
import characterController from "../controllers/character/index";

const router = express.Router();

router.get("/", characterController.getCharacters);

export default router;
