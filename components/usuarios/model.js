const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nombre:{
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true
  },
  correo:{
    type: String,
    required: true
  },
  contraseña:{
    type: String,
    required: true
  }
})

const UserModel = mongoose.model('Usuario',mySchema);

module.exports = UserModel;
