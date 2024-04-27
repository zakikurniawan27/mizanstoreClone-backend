const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { pelanggans } = require('../models');

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    nomorTelepon,
    tanggalLahir,
    jenisKelamin,
    provinsi,
    kota,
    kecamatan,
    alamat,
    kodePos,
  } = req.body;

  if (!firstName || !email || !password) {
    return res.status(400).send({
      message: 'field must not empty',
    });
  }

  const hashPassword = bcrypt.hashSync(password, 6);
  await pelanggans.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    nomorTelepon,
    tanggalLahir,
    jenisKelamin,
    provinsi,
    kota,
    kecamatan,
    alamat,
    kodePos,
  });

  return res.status(201).send({
    message: 'register succes',
  });
};

const login = async (req, res) => {
  const { firstName, password } = req.body;

  const User = await pelanggans.findOne({ where: { firstName } });

  if (!User) {
    return res.status(400).send({
      status: res.status(400),
      message: 'user, not found',
    });
  }

  const comparedPassword = bcrypt.compareSync(
    password,
    User.dataValues.password
  );

  if (!comparedPassword) {
    return res.status(400).send({
      status: 400,
      message: 'incorrect password',
    });
  }

  const token = jwt.sign(
    { id: User.dataValues.id, firstName: User.dataValues.firstName },
    process.env.JWT_SECRET,
    { expiresIn: 4200 }
  );
  return res.status(200).send({
    status: 200,
    message: 'Login Succes',
    token,
  });
};

const getPelangganById = async (req, res) => {
  const idPelanggan = req.params.id;
  const data = await pelanggans.findAll({ where: { id: idPelanggan } });

  if (!data) {
    return res.status(404).send({
      status: 404,
      message: 'data user empty',
    });
  }
  return res.status(200).send({
    status: 200,
    message: 'get user succes',
    user: data,
  });
};

const updatePelanggan = async (req, res) => {
  const idPelanggan = req.params.id;
  const { firstName, lastName, nomorTelepon } = req.body;

  const up = await pelanggans.update(
    {
      firstName,
      lastName,
      nomorTelepon,
    },
    {
      where: { id: idPelanggan },
    }
  );

  if (!up) {
    return res.status(404).send({
      status: 404,
      message: 'update data user failed',
    });
  }

  return res.status(201).send({
    status: 201,
    message: 'update user succes',
  });
};

const deletePelanggan = async (req, res) => {
  const idPelanggan = req.params.id;
  const del = await pelanggans.destroy({
    where: { id: idPelanggan },
  });

  if (!del) {
    return res.status(404).send({
      status: 404,
      message: 'deleted user failed',
    });
  }

  return res.status(200).send({
    status: 200,
    message: 'deleted user succes',
  });
};

module.exports = {
  register,
  login,
  getPelangganById,
  updatePelanggan,
  deletePelanggan,
};
