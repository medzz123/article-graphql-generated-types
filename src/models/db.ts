import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize('dbName', 'username', 'password', {
  dialect: 'postgres',
});

export default sequelize;
