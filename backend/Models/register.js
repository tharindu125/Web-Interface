const mongoose = require('mongoose')
const Schema = mongoose.Schema

let registerSchema = new Schema({
    FullName : {
        type:String
    },
    emailAd:{
        type:String
    },
    password:{
        type:String
    }
},{
    collection: 'register'
})

module.exports = mongoose.model('register',registerSchema)