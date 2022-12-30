const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//connect db
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wsdlab10"
});

conn.connect((err)=>{
  if (err) throw err;
  console.log('MYSQL Connected');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getData', (req,res)=>{
  let selectSQL = "select * from users";

  conn.query(selectSQL, (err, rows)=>{
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
