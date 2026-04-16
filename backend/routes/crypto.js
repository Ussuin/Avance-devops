const express = require("express");
const router = express.Router();
const pool = require("../db");
const axios = require("axios");

// Mapeo de símbolos a IDs de CoinGecko
const symbolMap = {
  BTC: "bitcoin",
  ETH: "ethereum",
  DOGE: "dogecoin",
  LTC: "litecoin"
};

// Obtener historial
router.get("/history", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM history ORDER BY date DESC");
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error("Error en /history:", err); // log completo
    res.status(500).json({ error: "Error al obtener historial", details: err.message });
  }
});


// Consultar precio y guardar en DB
router.get("/prices/:symbol", async (req, res) => {
  let { symbol } = req.params;
  symbol = symbol.toUpperCase();

  const apiSymbol = symbolMap[symbol];
  if (!apiSymbol) {
    return res.status(404).json({ error: "Símbolo no soportado" });
  }

  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${apiSymbol}&vs_currencies=usd`
    );
    const price = response.data[apiSymbol]?.usd;

    if (!price) {
      return res.status(404).json({ error: "Cripto no encontrada en CoinGecko" });
    }

    const conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO history(symbol, price, date) VALUES (?, ?, NOW())",
      [symbol, price]
    );
    conn.release();

    res.json({ symbol, price });
  } catch (err) {
    console.error("Error en /prices:", err.message);
    res.status(500).json({ error: "Error al consultar precio" });
  }
});

module.exports = router;
