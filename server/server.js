require("dotenv").config();
const express = require("express");
const connectDb = require("./db");

const app = express();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running.....");
});

const PORT =
  process.env.PORT ||
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
