const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const path = require("path");
const fileUpload = require("express-fileupload");
const db = mysql.createPool({
  host: "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "reulpddzj6h6gydn",
  password: "b2joboigxyv0zqfq",
  database: "qf8fqi9h37vnhnbt",
});
// const fs = require("fs");
const PORT = process.env.port || 3001
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("https://i20fireworks.herokuapp.com/api/getProducts", (req, res) => {
  const sqlGet = "SELECT * FROM Inventory";
  db.query(sqlGet, (err, result) => {
    console.log("ERRORRRRRRR!",err)
    res.send(result);
  });
});

app.get("https://i20fireworks.herokuapp.com/api/getBrands", (req, res) => {
  const sqlGet = "SELECT * FROM Brands";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("https://i20fireworks.herokuapp.com/api/getCategories", (req, res) => {
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build'));
});


app.listen(PORT, () => {
  console.log("Running on port: " + PORT);
  console.log("ITS HITTING INDEX.JS@!@@!@!@!@!@!@!@")
});
