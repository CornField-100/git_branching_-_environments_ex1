const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log(`Connected to PostgreSQL - ${process.env.NODE_ENV}`))
  .catch(err => console.error('Error connecting to DB:', err));

module.exports = sequelize;
