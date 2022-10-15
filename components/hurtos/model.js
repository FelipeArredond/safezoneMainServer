const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  fecha_hecho:{
    type: Date,
    required: true
  },
  cantidad:{
    type: String,
    required: true
  },
  latitud: {
    type: String,
    required: true
  },
  longitud:{
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  edad: {
    type: String,
    required: true
  },
  estado_civil: {
    type: String,
    required: true
  },
  grupo_actor: {
    type: String,
    required: true
  },
  actividad_delictiva: {
    type: String,
    required: true
  },
  parentesco: {
    type: String,
    required: true
  },
  ocupacion: {
    type: String,
    required: true
  },
  discapacidad: {
    type: String,
    required: true
  },
  grupo_especial: {
    type: String,
    required: true
  },
  medio_transporte: {
    type: String,
    required: true
  },
  nivel_academico: {
    type: String,
    required: true
  },
  testigo: {
    type: String,
    required: true
  },
  conducta: {
    type: String,
    required: true
  },
  modalidad: {
    type: String,
    required: true
  },
  caracterizacion: {
    type: String,
    required: true
  },
  conducta_especial: {
    type: String,
    required: true
  },
  arma_medio: {
    type: String,
    required: true
  },
  articulo_penal: {
    type: String,
    required: true
  },
  categoria_penal: {
    type: String,
    required: true
  },
  nombre_barrio: {
    type: String,
    required: true
  },
  codigo_barrio: {
    type: String,
    required: true
  },
  codigo_comuna: {
    type: String,
    required: true
  },
  lugar: {
    type: String,
    required: true
  },
  sede_receptora: {
    type: String,
    required: true
  },
  bien: {
    type: String,
    required: true
  },
  categoria_bien: {
    type: String,
    required: true
  },
  grupo_bien: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  permiso: {
    type: String,
    required: true
  },
  unidad_medida: {
    type: String,
    required: true
  },
  fecha_ingestion: {
    type: Date,
    required: true
  }
})

const Model = mongoose.model('Hurto', mySchema);

module.exports = Model;
