const express = require('express');
const cors = require('cors')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const db = require('mongoose');


const response = require('./network/response');
const router = require('./network/routes');

const app = express();

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const url = process.env.MONGODB_URI

db.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

app.use(express.json())
app.use(cors());

router(app);

app.listen(3500,()=>{
  console.log('Server running at port: ' + 3500);
});


