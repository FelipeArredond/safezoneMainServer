const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    data: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('medellin',mySchema)

module.exports = Data
