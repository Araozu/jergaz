import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { Entrada } from "./Entrada";
import { Definicion } from "./Definicion";

export interface _Usuario {
    UsuId: string,
    UsuNom: string,
    UsuFoto: string
}

export class Usuario extends Model {
}

Usuario.init(
    {
        UsuId: {
            type: DataTypes.STRING(25),
            allowNull: false,
            primaryKey: true
        },
        UsuNom: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        UsuFoto: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "Usuario",
        tableName: "Usuarios"
    }
);

Usuario.hasMany(Entrada);
Entrada.belongsTo(Usuario);

Usuario.hasMany(Definicion);
Definicion.belongsTo(Usuario);
