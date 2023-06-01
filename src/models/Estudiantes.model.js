const { DataTypes } = require("sequelize");
import sequelize from "../db";


const Estudiantes = sequelize.define('Estudiantes', {
  idEstudiante: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: { type: DataTypes.STRING },
  apellido: { type: DataTypes.STRING },
  nivel: { type: DataTypes.STRING },
  seccion: { type: DataTypes.STRING },

});

export default Estudiantes
