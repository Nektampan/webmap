const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Koneksi ke database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // Ganti dengan username MySQL Anda
    password: '',    // Ganti dengan password MySQL Anda
    database: 'transport_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Koneksi ke database berhasil');
});

// Endpoint untuk mendapatkan data transportasi
app.get('/api/transport', (req, res) => {
    const sql = 'SELECT * FROM transport_locations';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
