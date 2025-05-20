const db = require('../config/database'); 

const Order = {
  getAll: (callback) => {
    db.query('SELECT * FROM orders', callback);
  },
  
  create: (newOrder, callback) => {
    db.query('INSERT INTO orders SET ?', newOrder, callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM orders WHERE id = ?', [id], callback);
  },

  update: (id, updatedOrder, callback) => {
    db.query('UPDATE orders SET ? WHERE id = ?', [updatedOrder, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM orders WHERE id = ?', [id], callback);
  }
};

module.exports = Order;
