const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', (req, res) => {
  Order.getAll((err, orders) => {
    if (err) {
      console.error('Gagal mengambil data pesanan:', err);
      return res.status(500).json({ message: 'Gagal mengambil data pesanan', error: err.message });
    }
    res.json(orders);
  });
});

router.post('/', (req, res) => {
  const newOrder = {
    ...req.body,
    tanggal_pesanan: new Date() 
  };

  Order.create(newOrder, (err, orderId) => {
    if (err) {
      console.error('Gagal menyimpan order:', err.message);
      return res.status(500).json({ message: 'Gagal menyimpan order', error: err.message });
    }
    res.status(201).json({ message: 'Order berhasil dibuat', orderId });
  });
});

router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  Order.getById(orderId, (err, order) => {
    if (err) {
      console.error('Gagal mengambil data pesanan:', err);
      return res.status(500).json({ message: 'Gagal mengambil data pesanan', error: err.message });
    }
    if (!order) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json(order);
  });
});

router.put('/:id', (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;
  Order.update(orderId, updatedOrder, (err, affectedRows) => {
    if (err) {
      console.error('Gagal memperbarui order:', err);
      return res.status(500).json({ message: 'Gagal memperbarui order', error: err.message });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json({ message: 'Order berhasil diperbarui' });
  });
});

router.delete('/:id', (req, res) => {
  const orderId = req.params.id;
  Order.delete(orderId, (err, affectedRows) => {
    if (err) {
      console.error('Gagal menghapus order:', err);
      return res.status(500).json({ message: 'Gagal menghapus order', error: err.message });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }
    res.json({ message: 'Order berhasil dihapus' });
  });
});

module.exports = router;
