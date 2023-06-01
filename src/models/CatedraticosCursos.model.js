const { DataTypes } = require("sequelize");
import sequelize from "../db";


const CatedraticosCursos = sequelize.define('CatedraticosCursos', {
    idCatedraticoCurso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idCatedratico: { type: DataTypes.INTEGER },
  idCurso: { type: DataTypes.INTEGER }
});

export default CatedraticosCursos
