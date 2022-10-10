const mongoose = require('mongoose');
const Model = require('./../models/hurtos.model')

class Hurtos{

  constructor(){

  }

  addData(data){
    mongoose.connect('mongodb+srv://root:safezoneApp@cluster0.dv3atz3.mongodb.net/safezone')
    const hurto = new Model(data)
    hurto.save();
  }

  async getData(){
    const data = await Model.find();
    return data;
  }

}

module.exports = Hurtos;

