const express = require('express');
const sequelize = require('./database');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());

app.use('/api', itemRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
