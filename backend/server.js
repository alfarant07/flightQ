import express from "express";
import searchRoutes from "./routes/search.js"
import cors from "cors"
import pool from "./db.js"

const app = express();
app.use(cors());
app.use(express.json())

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("server running");
});

app.use('/api/flights', searchRoutes);
