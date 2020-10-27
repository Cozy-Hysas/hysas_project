const mongoose = require("mongoose");


let userSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    passWord: {
        type:String,
        require:true
    },
    phoneNumber: {
        type:Number,
        require:true
    },
    address: {
        type:String,
        require:true
    },
  });



  module.exports = mongoose.model('user', userSchema);