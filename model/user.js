const mongoose = require('mongoose')

const Schema = mongoose.Schema
const  userSchema = new Schema({
    user: String,
    psw: String
})
module.exports = mongoose.model('user', userSchema, 'users')