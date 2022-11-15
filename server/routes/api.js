const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const axios = require("axios")

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
  const alerts = await axios.get(`http://localhost:4000/`)
  console.log(alerts.data)
  req.session.alerts = alerts.data
  res.json(req.session.alerts)

})

module.exports = router