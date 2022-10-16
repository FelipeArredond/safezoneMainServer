const db = require('mongoose');
const response = require('../../network/response')
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
  console.log('[POST] Hurtos ' + new Date())
  const newHurto = new Model(hurto);
  newHurto.save();
  return 'Element added'
}

async function getHurtos(req,res){
  console.log('[GET] Hurtos ' + new Date())
  const data = await Model.find({});
  res.json(data)
}

async function getAllHurtosPositions(req,res){
  console.log('[GET] Hurtos Positions' + new Date())
  const data = await Model.find({});
  let cleanData = []
  data.map((dat) => {
    cleanData.push({latitud: dat.latitud, longitud: dat.longitud})
  })
  res.json(cleanData)
}

module.exports = {
  addHurto,
  getHurtos,
  getAllHurtosPositions
}
