const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { pelanggans } = require('../models');
const { alamats } = require('../models');

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
    alamatLengkap,
    kodePos,
  } = req.body;

  if (!firstName || !email || !password) {
    return res.status(400).send({
      message: 'field must not empty',
    });
  }

  const hashPassword = bcrypt.hashSync(password, 6);
  const newUser = await pelanggans.create({
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
    alamatLengkap,
    kodePos,
  });

  const newAlamat = await alamats.create({
    firstName,
    lastName,
    nomorTelepon,
    provinsi,
    kota,
    kecamatan,
    alamatLengkap,
    kodePos,
    pelangganId: newUser.id,
  });
  return res.status(201).send({
    message: 'register succes',
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const User = await pelanggans.findOne({ where: { email } });

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
    { id: User.dataValues.id, email: User.dataValues.email },
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
  const data = await pelanggans.findByPk(idPelanggan);

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

const getUserInfo = async (req, res) => {
  const { id } = req.pelanggans;
  const data = await pelanggans.findByPk(id, {
    include: [
      {
        association: 'alamat',
        where: { pelangganId: id },
      },
    ],
  });

  if (!data) {
    return res.status(404).send({
      status: 404,
      message: 'data user empty',
    });
  }
  return res.status(200).send({
    status: 200,
    message: 'get user succes',
    users: data,
  });
};

const updatePelanggan = async (req, res) => {
  const idPelanggan = req.params.id;
  const {
    firstName,
    lastName,
    email,
    nomorTelepon,
    tanggalLahir,
    jenisKelamin,
    provinsi,
    kota,
    kecamatan,
    alamatLengkap,
    kodePos,
  } = req.body;

  const up = await pelanggans.update(
    {
      firstName,
      lastName,
      email,
      nomorTelepon,
      tanggalLahir,
      jenisKelamin,
      provinsi,
      kota,
      kecamatan,
      alamatLengkap,
      kodePos,
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
  getUserInfo,
  updatePelanggan,
  deletePelanggan,
};
