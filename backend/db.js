(async () => {
  const mariadb = await import("mariadb");
  const pool = mariadb.createPool({
    host: "db",
    user: "root",
    password: "rootpassword",
    database: "cryptotracker"
  });

  module.exports = pool;
})();

