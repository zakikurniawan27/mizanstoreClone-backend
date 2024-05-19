require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/pelanggan.route');
const genreRoute = require('./routes/genre.route');
const kategoriRoute = require('./routes/kategori.route');
const ulasanRoute = require('./routes/ulasan.route');
const barangRoute = require('./routes/barang.route');
const alamatRoute = require('./routes/alamat.route');
const spesifikasiRoute = require('./routes/spesifikasi.route');
const authorRoute = require('./routes/author.route');
const publisherRoute = require('./routes/publisher.route');
const pembelianRoute = require('./routes/pembelian.route');
const pembayaranRoute = require('./routes/pembayaran.route');

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
app.use('/genre', genreRoute);
app.use('/kategori', kategoriRoute);
app.use('/ulasan', ulasanRoute);
app.use('/barang', barangRoute);
app.use('/address', alamatRoute);
app.use('/spesifikasi', spesifikasiRoute);
app.use('/authors', authorRoute);
app.use('/publishers', publisherRoute);
app.use('/pembelian', pembelianRoute);
app.use('/pembayaran', pembayaranRoute);
app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
