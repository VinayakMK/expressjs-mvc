const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true, 'Please enter fullname'],
        minlength:[4, 'Full name should have minimum 4 letters'],
        maxlength:[10, 'Full name should not exceed 10 letters']
    },
    
    email:{
        type:String,
        required:[true, 'Please enter email'],
        unique:true
    },

    password:{
        type:String,
        required:[true, 'Please enter password'],
        unique:true
    },
});

module.exports = mongoose.model('User', userSchema);