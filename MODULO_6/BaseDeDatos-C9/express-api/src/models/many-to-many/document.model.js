import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const DocumentII = sequelize.define('documentII', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defultValue: false,
    }

}, {
    timestamps: false,
});