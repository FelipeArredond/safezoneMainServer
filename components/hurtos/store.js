const response = require('../../network/response')
const Model = require('./model')

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

async function getHurtosPerHood(req,res){
  console.log('[GET] HurtosPerHood ' + new Date())
  const data = await Model.find({});
  const filtered = []
  data.map((element) => {
    filtered.push(element.codigo_barrio.substring(1))
  })
  res.json(filtered)
}

async function getAllHurtosPositions(req,res){
  console.log('[GET] Hurtos Positions' + new Date())
  const data = await Model.find({}).limit(1000);
  let cleanData = []
  data.map((dat) => {
    cleanData.push({latitud: dat.latitud, longitud: dat.longitud})
  })
  res.json(cleanData)
}

module.exports = {
  addHurto,
  getHurtos,
  getAllHurtosPositions,
  getHurtosPerHood
}
