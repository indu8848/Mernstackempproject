const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:String,
    jobTitle:String,
    email:String,
    phoneNumber:Number,
    address:String,
    createAt:{
        type:Date,
        default:new Date(),
    }
    
})

const postModel = mongoose.model('post',schema);
module.exports = postModel;
