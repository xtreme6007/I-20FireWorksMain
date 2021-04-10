const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'I-20_FireWorks'
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/api/getProducts', (req, res) => {
    const sqlGet = "SELECT * FROM Inventory"
    db.query(sqlGet, (err, result) => {
       res.send(result)
   
})})

app.post('/api/admin/postNew', (req,res) => {

    const name = req.body.name
    const category = req.body.category
    const price = req.body.price
    const previewUrl = req.body.previewUrl

    const sqlInsert = "INSERT INTO Inventory (name, category, price, preview_link) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name, category, price, previewUrl], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})