import { Router } from "express";
import { createCurso, getCursos, getCurso, updateCurso, deleteCurso } from "../controllers/Cursos.controller";

const router = Router();

router.get("/todos", getCursos);
router.get("/", getCurso);
router.post("/crear", createCurso);
router.post("/actualizar", updateCurso);
router.get("/eliminar", deleteCurso);

export default router;