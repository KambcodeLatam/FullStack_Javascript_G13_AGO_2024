import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const PersonII = sequelize.define('personII', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    photoURL: {
       type: DataTypes.STRING, 
    }

}, {
    timestamps: false,
});

