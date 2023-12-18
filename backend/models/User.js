const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  new mongoose.Schema({
    userMail:{type: email, unique: true, required: true},   
    password:{type: String, required: true},
    isAdmin:{type: Boolean, required: true, default: false},
});

