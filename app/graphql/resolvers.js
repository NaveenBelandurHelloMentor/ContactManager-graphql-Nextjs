const Contact = require('../Model/Contact.js')


module.exports = {
    Query:{
        async  getContact (_){
          return Contact.find()
        },
        async getContactId(_,{ID}){
            const id = await Contact.findById(ID)
            return id
        }
    },
    Mutation:{
        async  addContact(_,{contactInput:{ name,phonenumber,email,contactdetails,socialmedia}}){
              const body  = new Contact({name:name,phonenumber:phonenumber,email:email,contactdetails:contactdetails,socialmedia:socialmedia})
              const final = await body.save()
              return final
        },
        async deleteContact(_,{ID}){
            const destroy = Contact.findByIdAndDelete(ID)
            return destroy
        },
        async editContact(_,{ID,editInput:{name,phonenumber,email,contactdetails,socialmedia}}){
            const Editbody = await Contact.findByIdAndUpdate({_id:ID},{name:name,phonenumber:phonenumber,email:email,contactdetails:contactdetails,socialmedia:socialmedia})
            return Editbody
        }
    }
}