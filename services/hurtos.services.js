const mongoose = require('mongoose');
const Model = require('./../models/hurtos.model')

class Hurtos{

  constructor(){
    mongoose.connect('mongodb+srv://root:safezoneApp@cluster0.dv3atz3.mongodb.net/test')
  }

  async getData(){
    const data = await Model.find();
    return data;
  }

}

module.exports = Hurtos;

