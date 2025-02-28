const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.post('/items', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

module.exports = router;
