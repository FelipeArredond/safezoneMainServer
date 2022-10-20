const db = require('./store')

function addReporte(hurto){
  return db.addReporte(hurto);
};

function getReportes(req,res){
  return db.getReportes(req,res)
}

module.exports = {
  addReporte,
  getReportes
}
