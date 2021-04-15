const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const fileUpload = require("express-fileupload");
const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "I-20_FireWorks",
});
const fs = require("fs");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

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

app.listen(3001, () => {
  console.log("Running on port 3001");
});
