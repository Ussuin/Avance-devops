const pool = require("./db");

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("Conexión exitosa a MariaDB");
    const rows = await conn.query("SHOW TABLES");
    console.log(rows);
    conn.release();
  } catch (err) {
    console.error("Error de conexión:", err);
  }
})();
