const express = require('express');
const path = require('path');
const app = express(),
 bodyParser = require("body-parser");
port = 3080;

const db = require('./data/mongo.js');
async function start() {
 await db.init();

 app.use(bodyParser.json());
 app.use(express.static(path.join(__dirname, '../my-app/build')));

 const mainRoutes = require('./routes.js');
 app.use(mainRoutes)
 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../webapp/index.html'));
 });

 app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
 });
}
start();
