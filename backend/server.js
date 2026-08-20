import express from "express";


const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("server running");
});
