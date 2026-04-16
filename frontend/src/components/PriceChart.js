import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { Paper, Typography } from "@mui/material";

function PriceChart({ history }) {
  return (
    <Paper sx={{ p: 3, mb: 4, bgcolor: "#1e1e1e" }}>
      <Typography variant="h5" gutterBottom>📈 Evolución de precios</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={history} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#00ff88" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default PriceChart;
