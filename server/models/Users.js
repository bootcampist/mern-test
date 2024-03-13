const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number 
    
// })

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    bio: String 
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel