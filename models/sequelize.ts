import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "jergaz",
    process.env.POSTGRES_USER!!,
    process.env.POSTGRES_PASSWORD, {
        host: "localhost",
        dialect: "postgres"
    });

sequelize.sync({force: true});
