const { DataTypes } = require("sequelize");
import sequelize from "../db";

const CursosEstudiantes = sequelize.define('CursosEstudiantes', {
    idCursoEstudiante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCurso: { type: DataTypes.INTEGER },
    idEstudiante: { type: DataTypes.INTEGER }
});

export default CursosEstudiantes
