const { DataTypes } = require("sequelize");
import sequelize from "../db";


const Cursos = sequelize.define('Cursos', {
    idCurso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombreCurso: { type: DataTypes.STRING },   
});

export default Cursos