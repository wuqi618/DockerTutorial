const { Pool, Client } = require('pg');
const express = require('express');

const port = 5000;

var app = express();

app.route('/')
.get(function(req, res) {
  const client = new Client({
    user: 'postgres',
    host: 'docker.for.win.localhost',
    //host: '127.0.0.1',
    database: 'postgres',
    password: 'root',
    port: 5432,
  });
  client.connect()
  
  client.query('SELECT version();', (dberr, dbres) => {
    res.json(dbres.rows[0])
    client.end()
  })
});

app.listen(port);

console.log('Listening on port: ' + port);
