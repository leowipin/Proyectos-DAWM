const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'store', 
    host: '127.0.0.1',
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;