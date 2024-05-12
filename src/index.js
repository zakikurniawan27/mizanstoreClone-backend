require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/pelanggan.route');
const barangRoute = require('./routes/barang.route');
const spesifikasisRoutes = require('./routes/spesifikasi.route');
const authorRoute = require('./routes/author.route');

const { sequelize } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log('database connection has been established successfully');
  })
  .catch((error) => {
    console.log('connection error', error);
  });

app.use('/users', userRoute);
app.use('/barangs', barangRoute);
app.use('/spesifikasis', spesifikasisRoutes);
app.use('/authors', authorRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
