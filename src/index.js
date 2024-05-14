require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/pelanggan.route');
<<<<<<< HEAD
const genreRoute = require('./routes/genre.route');
const kategoriRoute = require('./routes/kategori.route');
const ulasanRoute = require('./routes/ulasan.route');
=======
const barangRoute = require('./routes/barang.route');
const spesifikasisRoutes = require('./routes/spesifikasi.route');
const authorRoute = require('./routes/author.route');
const publisherRoute = require('./routes/publisher.route');

>>>>>>> 1a91d492259995cd1e082fe7485500e8477a54a3
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
<<<<<<< HEAD
app.use('/genre', genreRoute);
app.use('/kategori', kategoriRoute);
app.use('/ulasan', ulasanRoute);
=======
app.use('/barangs', barangRoute);
app.use('/spesifikasis', spesifikasisRoutes);
app.use('/authors', authorRoute);
app.use('/publishers', publisherRoute);
>>>>>>> 1a91d492259995cd1e082fe7485500e8477a54a3

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
