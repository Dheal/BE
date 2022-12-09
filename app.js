const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");

const server = require("http").Server(app);

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Tes Koneksi");
});
app.post("/generate", (req, res) => {
  const angka = req.body.angka;
  const type = req.body.type;
  const arrAngka = angka.split("");

  if (type === "ganjil") {
    let tmp = [];
    arrAngka.map((val) => {
      if (parseInt(val) % 2 != 0) {
        tmp.push(val);
      }
    });
    res.status(200).json(tmp);
  } else if (type === "prima") {
    let tmp = [];
    arrAngka.map((val) => {});
  } else if (type === "segitiga") {
    let tmp = [];
    arrAngka.map((val, index) => {
      let kosong = [];
      for (let i = 0; i <= index + 1; i++) {
        kosong.push("0");
      }
    });
    res.status(200).json(tmp);
  }

  //   res.status(200).json(angka);
});

server.listen(port, () => {
  console.log("server nyala");
});
