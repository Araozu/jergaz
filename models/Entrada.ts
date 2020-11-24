import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { Definicion } from "./Definicion";

export class Entrada extends Model {
}

Entrada.init(
    {
        EntId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        EntNom: {
            type: DataTypes.TEXT
        },
        UsuarioUsuId: {
            type: DataTypes.STRING(25)
        }
    },
    {
        sequelize,
        modelName: "Entrada",
        tableName: "Entradas"
    }
);

Entrada.hasMany(Definicion);
Definicion.belongsTo(Entrada);

