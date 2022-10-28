const db = require('mongoose');
const response = require('../../network/response')
const Data = require('./model')

async function getTexts(req,res){
  console.log('[GET] Dashboard ' + new Date())
  const data = await Data .find({});
  res.json(data)
}

module.exports = {
  getTexts
}
