const express = require("express");
const cors = require("cors");
const car = require("./routes/car");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "API Funcionando" });
});

app.use("/car", car);

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}/`);
});
