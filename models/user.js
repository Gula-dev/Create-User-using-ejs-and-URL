const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testapp1");

const userSchema= mongoose.Schema({
    img_url:String,
    email:String,
    name:String
});

module.exports=mongoose.model('user',userSchema)