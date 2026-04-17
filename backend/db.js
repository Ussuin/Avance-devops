const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST || '127.0.0.1',   
  user: process.env.DB_USER || 'root',        
  password: process.env.DB_PASSWORD || '123', 
  database: process.env.DB_NAME || 'cryptodb' 
});

module.exports = pool;
