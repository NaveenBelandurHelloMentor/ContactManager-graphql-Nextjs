const mongoosee = require('mongoose')

const ContactSchema = new mongoosee.Schema({
    name:{
        type:String,
    },
    phonenumber:{
        type:String,
        max:10
    },
    email:{
        type:String,
    },
    contactdetails:{
        type:String,
    },
    socialmedia:{
        type:String
    }
})

const Contact = mongoosee.model("Contact",ContactSchema)


module.exports = Contact