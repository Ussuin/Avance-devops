import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container, Typography, Paper, TextField, Button
} from "@mui/material";
import HistoryTable from "./components/HistoryTable.js";
import PriceChart from "./components/PriceChart.js";

function App() {
  const [history, setHistory] = useState([]);
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = () => {
    axios.get("http://54.224.102.7:3001/history")
      .then(res => {
        const formatted = res.data.map(row => ({
          ...row,
          date: new Date(row.date).toLocaleString()
        }));
        setHistory(formatted);
      })
      .catch(err => console.error(err));
  };

  const handleSearch = () => {
    if (!symbol) return;
    axios.get(`54.224.102.7:3001/prices/${symbol}`)
      .then(() => fetchHistory())
      .catch(err => console.error(err));
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh", py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#00ff88" }}>
        CryptoTracker Pro
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: "#1e1e1e" }}>
        <Typography variant="h6" gutterBottom>🔍 Buscar criptomoneda</Typography>
        <TextField
          variant="outlined"
          label="Ej: BTC, ETH, DOGE"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          sx={{ input: { color: "white" }, label: { color: "white" }, mr: 2 }}
        />
        <Button variant="contained" color="success" onClick={handleSearch}>
          Consultar
        </Button>
      </Paper>

      <PriceChart history={history} />
      <HistoryTable history={history} />
    </Container>
  );
}

export default App;
