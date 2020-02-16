var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
var Users = require('./routes/Users')
app.use('/users', Users)
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_login',
    multipleStatements: true
});
mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
app.get('/show', (req, res) => {
    mysqlConnection.query('SELECT * FROM food_recipes', (err, rows, fields) => {
        if (!err){
            res.send(rows); 
            console.log(rows);
        }
        else
            console.log(err);
    })
});
app.get('/show:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM food_recipes WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

