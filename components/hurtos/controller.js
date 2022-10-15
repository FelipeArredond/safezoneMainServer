const db = require('./store')

function addHurto(hurto){
  return db.addHurto(hurto);
};

function listHurtos(req,res){
  return db.getHurtos(req,res)
}

module.exports = {
  addHurto,
  listHurtos
}
