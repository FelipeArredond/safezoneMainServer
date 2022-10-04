const dontenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors')

const app = express();
const url = 'mongodb+srv://root:safezoneApp@cluster0.dv3atz3.mongodb.net/test'

app.listen(3500,()=>{
  console.log('Server running at port : ' + 3500);
});

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const db = mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

app.use(express.json())
app.use(cors());
routerApi(app);



