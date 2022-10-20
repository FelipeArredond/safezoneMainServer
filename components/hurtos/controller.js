const db = require('./store')

function addHurto(hurto){
  return db.addHurto(hurto);
};

function listHurtos(req,res){
  return db.getHurtos(req,res)
}

function listPositions(req,res){
  return db.getAllHurtosPositions(req,res);
}

function listHurtosPerHood(req,res){
  return db.getHurtosPerHood(req,res);
}

module.exports = {
  addHurto,
  listHurtos,
  listPositions,
  listHurtosPerHood
}
