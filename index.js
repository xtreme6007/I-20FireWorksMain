const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");
const db = require("./config/db")
const fs = require("fs");
const PORT = process.env.port || 3001
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.static(path.resolve(__dirname, '../client/build')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/getProducts", (req, res) => {
  const sqlGet = "SELECT * FROM Inventory";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getBrands", (req, res) => {
  const sqlGet = "SELECT * FROM Brands";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getCategories", (req, res) => {
  const sqlGet = "SELECT * FROM Categories";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/admin/postNew", (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const previewUrl = req.body.previewUrl;
  const description = req.body.description;
  const brand = req.body.brand

  const sqlInsert =
    "INSERT INTO Inventory (name, category, price, preview_link, description, brand) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, category, price, previewUrl, description, brand],
    (err, result) => {
      console.log(result);
    }
  );
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log("Running on port" + PORT);
  console.log("ITS HITTING INDEX.JS@!@@!@!@!@!@!@!@")
});
