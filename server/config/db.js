const mysql = require("mysql");
const db = mysql.createPool({
  host: "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "reulpddzj6h6gydn",
  password: "b2joboigxyv0zqfq",
  database: "qf8fqi9h37vnhnbt",
});
module.exports = db;