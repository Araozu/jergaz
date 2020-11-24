import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

export class Definicion extends Model {
}

Definicion.init(
    {
        DefId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        DefTxt: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        modelName: "Defincion",
        tableName: "Definiciones"
    }
)

