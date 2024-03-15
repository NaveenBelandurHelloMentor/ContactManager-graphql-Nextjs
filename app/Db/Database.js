const mongoose = require('mongoose')

const Setupdb = async () =>{
   try{
      const Connect = await mongoose.connect(`mongodb+srv://Naveen:${process.env.PASSWORD}@cluster0.rrtnxw8.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DATABASE_NAME}`)
      if(Connect){
         console.log('Connected to the Database')
      }
   }
   catch(err){
    console.log(err.message)
    throw new MongoError(err.message)
   }
}



module.exports = Setupdb