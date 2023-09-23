const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const db_link = 'mongodb+srv://admin:dummy123@cluster0.ld84bmg.mongodb.net/';
mongoose.connect(db_link)
.then(function(db) {
    // console.log(db);
    console.log("db connected");
}).catch(function(err){
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "Full Name is required"]
    },
    email: {
        type : String,
        required : true,
        unique : true,
        validate : function(){
            return emailValidator.validate(this.email);
        } 
    }
});

// Model
const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;

