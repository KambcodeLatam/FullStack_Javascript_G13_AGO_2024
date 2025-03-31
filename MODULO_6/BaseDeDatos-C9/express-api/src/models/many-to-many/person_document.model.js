import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

import { PersonII } from "./person.model.js";
import { DocumentII } from "./document.model.js";

export const PersonDocument = sequelize.define('person_document', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

PersonII.belongsToMany(DocumentII, {
    through: PersonDocument,
});

DocumentII.belongsToMany(PersonII, {
    through: PersonDocument,
});