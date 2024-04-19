const express = require('express')
const app = express()
const env = require('dotenv').config()
const Port = process.env.PORT
const Setupdb = require('./app/Db/Database.js')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./app/graphql/typedef.js')
const resolvers = require('./app/graphql/resolvers.js')





 const StartApolloServer = async () =>{
    const Server = new ApolloServer({
        // By Making introspection false you cant load schema in the apollo server sandbox and in production appolo sandbox cannot be accesed
        introspection:false,
        typeDefs,
        resolvers,
        
    })

    await Server.start()
    Server.applyMiddleware({app})

   
 }

 StartApolloServer()

 Setupdb()

app.listen(Port,()=>{
    console.log(`Connected to the Port ${Port}`)
    console.log(`http://localhost:${process.env.port}/graphql`)
})