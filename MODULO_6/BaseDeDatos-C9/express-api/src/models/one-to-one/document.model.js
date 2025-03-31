import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const Document = sequelize.define('document', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defultValue: false,
    }

}, {
    timestamps: false,
});