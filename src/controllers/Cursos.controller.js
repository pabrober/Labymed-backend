import CatedraticosCursos from "../models/CatedraticosCursos.model";
import Cursos from "../models/Cursos.model";

export const createCurso = async (req, res) => {
    try {
        const { nombreCurso, idGrado, idCarrera, catedraticos } = req.body

        const cursoBody = {
            nombreCurso,
            idGrado,
            idCarrera,
        }

        const curso = await Cursos.create(cursoBody);
        const idCurso = curso.get(idCurso)

        for (const catedratico of catedraticos) {
            const catedraticoCurso = {
                idCatedratico: catedratico,
                idCurso: idCurso
            }
            await CatedraticosCursos.create(catedraticoCurso)
        }

        res.json(curso)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCursos = async (req, res) => {
    try {
        const cursos = await Cursos.findAll({
            include: [{ model: CatedraticosCursos }]
        })
        res.json(cursos)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCurso = async (req, res) => {
    try {
        const { idCurso } = req.params
        if (!idCurso) throw new Error("Id Curso es obligatorio")
        const curso = await Cursos.findByPk(idCurso, {
            include: [{ model: CatedraticosCursos }]
        })
        res.json(curso)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateCurso = async (req, res) => {
    try {
        const { nombreCurso, idGrado, idCarrera, catedraticos, idCurso } = req.body
        if (!idCurso) throw new Error("Id Curso es obligatorio")

        const cursoBody = {
            nombreCurso,
            idGrado,
            idCarrera,
        }

        const cursoAcualizado = await Cursos.update(cursoBody, {
            where: { idCurso }
        })

        if (catedraticos) {
            await CatedraticosCursos.destroy({
                where: { idCurso }
            })

            for (const catedratico of catedraticos) {
                const catedraticoCurso = {
                    idCatedratico: catedratico,
                    idCurso: idCurso
                }
                await CatedraticosCursos.create(catedraticoCurso)
            }
        }

        res.json(cursoAcualizado)

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteCurso = async (req, res) => {
    try {
        const { idCurso } = req.params
        if (!idCurso) throw new Error("Id Curso es obligatorio")
        await Cursos.destroy({
            where: { idCurso }
        })

        await CatedraticosCursos.destroy({
            where: { idCurso }
        })

        res.json({ message: "Curso eliminado" })

    } catch (error) {
        res.status(500).json(error);
    }
}