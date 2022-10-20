const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre_barrio:{
    type: String,
    required: true
  },
  tipo_reporte:{
    type: String,
    required: true
  },
  longitud:{
    type: String,
    required: true
  },
  latitud:{
    type: String,
    required: true
  },
  descripcion:{
    type: String,
    required: true
  }
})

const ReporteModel = mongoose.model('Reporte', mySchema);

module.exports = ReporteModel;
