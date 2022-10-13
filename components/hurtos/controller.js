const db = require('./store')

function addHurto(hurto){
  db.add(hurto);
  return 'Hurto Added to db'
};

function listHurtos(){
  return db.list()
}

module.exports = {
  addHurto,
  listHurtos
}
