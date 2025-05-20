const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'laundry_db'
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal:', err);
  } else {
    console.log('Koneksi ke database berhasil!');
  }
});

module.exports = db;
