const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/index')
require("dotenv").config();
const db = require('./models/db.connection')
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json() ); 
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

db.authenticate()
db.sync().then(()=> {
  app.listen(port, ()=> {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  })
})

app.use('/api', routes)