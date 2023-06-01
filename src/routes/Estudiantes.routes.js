import { Router } from "express";
import { createEstudiantes, getAllEstudiantes, getEstudiante, deleteEstudiante, updateEstudiante } from "../controllers/Estudiantes.controller";

const router = Router();

router.get("/todos", getAllEstudiantes);
router.get("/", getEstudiante);
router.post("/crear", createEstudiantes);
router.post("/actualizar", updateEstudiante);
router.delete("/eliminar", deleteEstudiante);

export default router;