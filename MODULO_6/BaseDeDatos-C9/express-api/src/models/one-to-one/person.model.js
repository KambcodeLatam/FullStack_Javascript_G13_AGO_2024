import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";
import { Document } from "./document.model.js";

export const Person = sequelize.define('person', {
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
    }

}, {
    timestamps: false,
});

// One TO One

Person.hasOne(Document, {
    foreignKey: 'personId',
    sourceKey: 'id',
});

Document.belongsTo(Person, {
    foreignKey: 'personId',
    targetKey: 'id'
});