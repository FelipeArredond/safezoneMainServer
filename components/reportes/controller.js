const db = require('./store')

function addReporte(hurto){
  hurto = {...hurto, fecha: new Date()}
  return db.addReporte(hurto);
};

function getReportes(req,res){
  return db.getReportes(req,res)
}

module.exports = {
  addReporte,
  getReportes
}
