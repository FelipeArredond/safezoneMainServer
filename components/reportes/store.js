const db = require('mongoose');
const response = require('../../network/response')
const ReporteModel = require('./model')

function addReporte(reporte){
  console.log('[POST] Reportes ' + new Date())
  const newReporte = new ReporteModel(reporte);
  newReporte.save();
  return 'Element added'
}

async function getReportes(req,res){
  console.log('[GET] Reportes' + new Date());
  const data = await ReporteModel.find({});
  res.json(data)
}

module.exports = {
  addReporte,
  getReportes
}
