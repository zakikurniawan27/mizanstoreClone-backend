const { alamats } = require('../models');
const { pelanggans } = require('../models');

const addAlamat = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nomorTelepon,
      provinsi,
      kota,
      kecamatan,
      alamatLengkap,
      kodePos,
      pelangganId,
    } = req.body;

    if (
      !firstName ||
      !nomorTelepon ||
      !provinsi ||
      !kota ||
      !kecamatan ||
      !alamatLengkap ||
      !kodePos
    ) {
      return res.status(400).send({
        status: 400,
        message: 'field must not empty',
      });
    }

    await alamats.create({
      firstName,
      lastName,
      nomorTelepon,
      provinsi,
      kota,
      kecamatan,
      alamatLengkap,
      kodePos,
      pelangganId,
    });

    return res.status(201).send({
      status: 201,
      message: 'add alamat successfully',
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'add alamat failed',
    });
  }
};

const updateAlamat = async (req, res) => {
  try {
    const data = req.params.id;
    const {
      firstName,
      lastName,
      nomorTelepon,
      provinsi,
      kota,
      kecamatan,
      alamatLengkap,
      kodePos,
    } = req.body;

    if (!firstName) {
      return res.status(400).send({
        status: 400,
        message: 'field must not empty',
      });
    }

    await alamats.update(
      {
        firstName,
        lastName,
        nomorTelepon,
        provinsi,
        kota,
        kecamatan,
        alamatLengkap,
        kodePos,
      },
      { where: { id: data } }
    );

    return res.status(201).send({
      status: 201,
      message: 'update alamat successfully',
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'update alamat failed',
      error,
    });
  }
};

const getDataAlamatById = async (req, res) => {
  try {
    const { id } = req.params;
    const alamat = await alamats.findByPk(id);
    if (!id || !alamat) {
      return res.status(400).send({
        status: 404,
        message: 'data not found',
      });
    }
    return res.status(200).send({
      status: 200,
      message: 'get all data successfully',
      data: alamat,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'get all data failed',
    });
  }
};

const getDataAlamatByPelangganId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await pelanggans.findAll({
      include: [
        {
          association: 'alamat',
          where: { pelangganId: id },
        },
      ],
    });

    if (!data) {
      return res.status(400).send({
        status: 404,
        message: 'data not found',
      });
    }

    return res.status(200).send({
      status: 200,
      message: 'get data successfully',
      pelanggan: data,
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'get data failed',
    });
  }
};

const deleteAlamat = async (req, res) => {
  try {
    const { id } = req.params;
    await alamats.destroy({ where: { id } });

    return res.status(200).send({
      status: 200,
      message: 'deleted data successfully',
    });
  } catch (error) {
    return res.status(404).send({
      status: 404,
      message: 'deleted data failed',
    });
  }
};
module.exports = {
  addAlamat,
  updateAlamat,
  getDataAlamatById,
  deleteAlamat,
  getDataAlamatByPelangganId,
};
