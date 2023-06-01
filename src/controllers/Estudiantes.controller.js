import sequelize from "../db";
import CursosEstudiantes from "../models/CursosEstudiantes.model";
import Estudiantes from "../models/Estudiantes.model";

export const createEstudiantes = async (req, res) => {
    try {
        const { nombre, apellido, nivel, seccion, cursos } = req.body
        const estudiante = {
            nombre,
            apellido,
            nivel,
            seccion
        }

        const estudiantes = await Estudiantes.create(estudiante);
        const idEstudiante = estudiantes.get('idEstudiante')

        if (cursos) {
            for (const curso of cursos) {
                const CursoEstudiante = {
                    idEstudiante: idEstudiante,
                    idCurso: curso
                }
                await CursosEstudiantes.create(CursoEstudiante)
            }
        }
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateEstudiante = async (req, res) => {
    try {
        const { nombre, apellido, nivel, seccion, cursos, idEstudiante } = req.body
        if (!idEstudiante) throw new Error("Id Estudiante es obligatorio")
        const estudiante = {
            nombre,
            apellido,
            nivel,
            seccion
        }

        const estudianteActualizado = await Estudiantes.update(estudiante, {
            where: { idEstudiante }
        })

        if (cursos) {
            await Estudiantes.destroy({
                where: { idEstudiante }
            })

            for (const curso of cursos) {
                const CursoEstudiante = {
                    idEstudiante: idEstudiante,
                    idCurso: curso
                }
                await CursosEstudiantes.create(CursoEstudiante)
            }
        }

        res.json(estudianteActualizado);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiantes.findAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getEstudiante = async (req, res) => {
    try {
        const { idEstudiante } = req.params
        if (!idEstudiante) throw new Error("Id Estudiante es obligatorio")
        const estudiantes = await Estudiantes.findOne(
            {
                where: { idEstudiante },
                include: [
                    { model: CursosEstudiantes }
                ],
            }
        )
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteEstudiante = async (req, res) => {
    try {
        const { idEstudiante } = req.params
        if (!idEstudiante) throw new Error("Id Estudiante es obligatorio")
        const estudiante = await Estudiantes.destroy({
            where: { idEstudiante }
        })
        res.json(estudiante);
    } catch (error) {
        res.status(500).json(error);
    }
}

