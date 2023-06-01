import sequelize from "../db";
import Catedraticos from "../models/Catedraticos.model";

export const createCatedraticos = async (req, res) => {
    try {
        const { nombreCatedratico } = req.body
        if (!nombreCatedratico) throw new Error("nombre es obligatorio")
        const catedraticos = await Catedraticos.create({ nombreCatedratico });
        res.json(catedraticos);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllcatedraticos = async (req, res) => {
    try {
        const catedraticos = await Catedraticos.findAll();
        res.json(catedraticos);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCatedratico = async (req, res) => {
    try {
        const { idCatedratico } = req.params
        if (!idCatedratico) throw new Error("Id Catedratico es obligatorio")
        const catedratico = await Catedraticos.findByPk(idCatedratico);
        res.json(catedratico);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteCatedratico = async (req, res) => {
    try {
        const { idCatedratico } = req.params
        if (!idCatedratico) throw new Error("Id Catedratico es obligatorio")
        const catedratico = await Catedraticos.findByPk(idCatedratico);
        await catedratico.destroy();
        res.json(catedratico);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateCatedratico = async (req, res) => {
    try {
        const { idCatedratico } = req.params
        if (!idCatedratico) throw new Error("Id Catedratico es obligatorio")
        const { nombreCatedratico } = req.body
        if (!nombreCatedratico) throw new Error("nombre es obligatorio")
        const catedratico = await Catedraticos.findByPk(idCatedratico);
        await catedratico.update({ nombreCatedratico });
        res.json(catedratico);
    } catch (error) {
        res.status(500).json(error);
    }
}