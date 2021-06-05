const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
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
const bcrypt = require("bcrypt");
// Defining salt Rounds for bCrypt
const saltRounds = 10


const PORT = process.env.PORT || 3001
// Setting up CORS
app.use(cors({
  origin: ["http://localhost:3000", "https://i20fireworks.herokuapp.com/"],
  method: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Setting Up Express session 
app.use(session({
  key: "userId",
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24
  }
}))



// Serving Up Static Build file When in production Mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Api Call for getting all products
app.get("/api/getProducts", (req, res) => {
  const sqlGet = "SELECT * FROM Inventory";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
// Api Call for getting all Brands
app.get("/api/getBrands", (req, res) => {
  const sqlGet = "SELECT DISTINCT brand FROM Inventory";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
// Api call for getting all categories
app.get("/api/getCategories", (req, res) => {
  const sqlGet = "SELECT DISTINCT category FROM Inventory";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// Api used to check logIn status
app.get("/api/login", (req,res) => {
  if(req.session.user){
    res.send({LoggedIn: true, User: req.session.user})
  } else {
    res.send({LoggedIn: false})
  }
})
// Api used to log in to application
app.post("/api/login", (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
 
  const userLogin =
    "SELECT * FROM user WHERE user_name = ?;";
  db.query(
    userLogin,
    user_name,
    (err, result) => {
      if(err){
        res.send({err : err})
      }

      if(result.length > 0){
        bcrypt.compare(password, result[0].password, (error, response) => {
          if(response){
          req.session.user = result
          res.send(result)
          } else {
            res.send({message : "Wrong Username or Password"})
          }
        })
      } else {
        res.send({message: "User Does Not exist"})
        
      }
    }
  );
});



// Api Used to register for the application

app.post("/api/register", (req, res) => {
  const user_name = req.body.user_name;
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const password = req.body.password;
  const role = req.body.role;
 
  const sqlInsert =
    "INSERT INTO user (user_name, email, first_name, last_name, password, role) VALUES (?,?,?,?,?,?)";
// Hasing Password in database
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err){
      console.log(err)
    }
    db.query(
      sqlInsert,
      [user_name, email, first_name, last_name, hash, role],
      (err, result) => {
      }
    );

  })
  
  
});


// Api Used to post a new Product
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
      console.log(err)
    }
  );
});



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log("Running on port: " + PORT);
  console.log("ITS HITTING INDEX.JS@!@@!@!@!@!@!@!@")
});
