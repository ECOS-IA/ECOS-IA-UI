const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecosia'
})

client.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + client.threadId);
})

router.get('/', async (req, res) => {

  const sql = "SELECT alert.id, time, zone FROM alert join capteur on alert.id_capteur = capteur.id"
  await client.query(sql, (error, results, fields) => {
    req.session.alerts = results
    res.json(req.session.alerts)
  })

})

module.exports = router