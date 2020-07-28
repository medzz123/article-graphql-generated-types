import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize("donkey", "mahedi", "postgres", {
  dialect: "postgres",
});

export default sequelize;
