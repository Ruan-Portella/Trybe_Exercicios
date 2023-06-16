const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'root',
    database: 'todolistdb',
});

module.exports = connection;