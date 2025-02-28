require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  port: process.env.PORT || 3000,
};
