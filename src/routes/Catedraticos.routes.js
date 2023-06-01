import { Router } from "express";
import { createCatedraticos, getAllcatedraticos, getCatedratico, deleteCatedratico, updateCatedratico } from "../controllers/Catedraticos.controller";

const router = Router();

router.get("/todos", getAllcatedraticos);
router.get("/", getCatedratico);
router.post("/crear", createCatedraticos);
router.post("/actualizar", updateCatedratico);
router.get("/eliminar", deleteCatedratico);

export default router;