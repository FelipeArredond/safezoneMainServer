const db = require('mongoose');
const Model = require('./model')

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const url = 'mongodb+srv://root:safezoneApp@cluster0.dv3atz3.mongodb.net/safezone'

db.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

function addHurto(hurto){
  const newHurto = new Model(hurto);
  newHurto.save();
}

async function getHurtos(){
  const data = await Model.find();
  return data;
}

module.exports = {
  add: addHurto,
  list: getHurtos
}
