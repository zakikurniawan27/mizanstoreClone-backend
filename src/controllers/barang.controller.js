const { barangs } = require('../models');

class BarangController {
  static async getAllBarangs(req, res) {
    try {
      const allBarangs = await barangs.findAll({
        include: [
          'kategori',
          'genre',
          'author',
          'publisher',
          'spesifikasi',
          'wishlist',
        ],
      });
      res.status(200).json(allBarangs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBarangById(req, res) {
    try {
      const { id } = req.params;
      const barang = await barangs.findByPk(id, {
        include: [
          'kategori',
          'genre',
          'author',
          'publisher',
          'spesifikasi',
          'wishlist',
        ],
      });
      if (barang) {
        res.status(200).json(barang);
      } else {
        res.status(404).json({ message: 'Barang tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createBarang(req, res) {
    try {
      const newBarang = await barangs.create(req.body);
      res.status(201).json(newBarang);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateBarang(req, res) {
    try {
      const { id } = req.params;
      const updated = await barangs.update(req.body, { where: { id } });
      if (updated[0] > 0) {
        const updatedBarang = await barangs.findByPk(id);
        res.status(200).json(updatedBarang);
      } else {
        res.status(404).json({ message: 'Barang tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteBarang(req, res) {
    try {
      const { id } = req.params;
      const deleted = await barangs.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Barang tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BarangController;
