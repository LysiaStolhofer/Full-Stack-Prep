const mysql = require('promise-mysql');

module.exports = async function() {
  // create DB Connection
  try {
    const conn = await mysql.createConnection(require('./db-config'));
    console.log('DATABASE CONNECTION ESTABLISHED');
    console.table(conn.config);
    return conn;
  } catch (error) {
    console.log('ERROR: DB CONNECTION FAILED');
    console.table(error);
    process.exit(1);
  }
};
