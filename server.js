const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const jwt = require("jsonwebtoken")
require('dotenv').config()

const response = require('./network/response');
const router = require('./network/routes');

console.log(process.env.TESTING)

const app = express();

app.use(express.json())
app.use(cors());

router(app);

app.listen(3500,()=>{
  console.log('Server running at port: ' + 3500);
});


