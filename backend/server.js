const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const cryptoRoutes = require("./routes/crypto");
app.use("/", cryptoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`✅ Backend corriendo en http://0.0.0.0:${PORT}`);
});
