import React from "react";
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function HistoryTable({ history }) {
  return (
    <Paper sx={{ p: 3, bgcolor: "#1e1e1e" }}>
      <Typography variant="h5" gutterBottom>📊 Historial</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>ID</TableCell>
            <TableCell sx={{ color: "white" }}>Símbolo</TableCell>
            <TableCell sx={{ color: "white" }}>Precio</TableCell>
            <TableCell sx={{ color: "white" }}>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map(row => (
            <TableRow key={row.id} hover>
              <TableCell sx={{ color: "white" }}>{row.id}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.symbol}</TableCell>
              <TableCell sx={{ color: "white" }}>${row.price}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default HistoryTable;
