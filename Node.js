const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const app = express();
app.use(express.json());

app.post('/items', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
