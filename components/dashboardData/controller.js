const db = require('./store')

function listTexts(req,res){
  return db.getTexts(req,res)
}

module.exports = {
  listTexts
}
