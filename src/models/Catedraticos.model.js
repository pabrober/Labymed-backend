const { DataTypes } = require("sequelize");
import sequelize from "../db";


const Catedraticos = sequelize.define('Catedraticos', {
    idCatedratico: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombreCatedratico: { type: DataTypes.STRING },
});

export default Catedraticos
