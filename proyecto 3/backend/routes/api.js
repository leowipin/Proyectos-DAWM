var express = require('express');
var router = express.Router();

const mysqlConnection = require('../database')

router.get('/todos/popularidad', (req, res,) => {
  mysqlConnection.query('SELECT * FROM products ORDER BY popularity DESC', (err, rows) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
});

router.get('/todos/precio-mayor', (req, res,) => {
  mysqlConnection.query('SELECT * FROM products ORDER BY unit_price DESC', (err, rows) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
});

router.get('/todos/precio-menor', (req, res,) => {
  mysqlConnection.query('SELECT * FROM products ORDER BY unit_price', (err, rows) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
});

router.get('/:categoria/popularidad', (req, res) =>{
  const {categoria} = req.params
    mysqlConnection.query('SELECT * FROM products WHERE category = ? ORDER BY popularity DESC',[categoria], (err, rows)=>{
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
  
})

router.get('/:categoria/precio-mayor', (req, res) =>{
  const {categoria} = req.params
    mysqlConnection.query('SELECT * FROM products WHERE category = ? ORDER BY unit_price DESC',[categoria], (err, rows)=>{
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
  
})

router.get('/:categoria/precio-menor', (req, res) =>{
  const {categoria} = req.params
    mysqlConnection.query('SELECT * FROM products WHERE category = ? ORDER BY unit_price',[categoria], (err, rows)=>{
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
  
})

router.get('/:nombre', (req, res) =>{
  const {nombre} = req.params
    mysqlConnection.query('SELECT * FROM products WHERE name = ?',[nombre], (err, rows)=>{
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
  
})

router.post('/orders',(req, res)=>{
  const {id, cantidad, precio, precioIva, precioEnvio, total } = req.body;
 
  let sql = `insert into order_items values('${id}','${id}','${cantidad}','${precio}','${precioIva}','${precioEnvio}','${total}')`
  mysqlConnection.query(sql,(err,rows)=>{
    if (!err) {
      res.json('orden agregada')
    } else {
      console.log(err)
    }
  })
})





module.exports = router;
