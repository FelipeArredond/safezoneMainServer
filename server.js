const dontenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const response = require('./network/response');
const router = require('./network/routes');

const app = express();

app.use(express.json())
app.use(cors());

router(app);

app.listen(3500,()=>{
  console.log('Server running at port: ' + 3500);
});


