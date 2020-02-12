const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');

// Create connection
const pool = mysql.createPool(database);

// Connecting
pool.getConnection((error, conn) => {
    // Errors
    if(error) {
        if(error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXIÓN A MYSQL FUE CERRADA!', error);
        }
        else if(error.code === 'ER_CON_COUNT_ERROR') {
            console.error('MYSQL TIENE MUCHAS CONEXIONES!', error);
        }
        else if(error.code === 'ECONNREFUSED') {
            console.error('LA CONEXIÓN FUE RECHAZADA!', error);
        } else {
            console.error('INESPERADO BD!', error);
        }
    }
    if(conn) {
        conn.release();
        console.log('Conexion a MySQL correcta.');
    }
});

pool.query = promisify(pool.query);

module.exports = pool;
