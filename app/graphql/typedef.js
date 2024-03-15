const {gql} = require('apollo-server-express')

// ! means required 

module.exports = gql`
type getUser {
  id:ID
  name:String
  phonenumber:String
  email:String
  contactdetails:String
  socialmedia:String
}


input InputContact {
    name:String!
    phonenumber:String!
    email:String!
    contactdetails:String!
    socialmedia:String
}

input EditContact{
    name:String!
    phonenumber:String!
    email:String!
    contactdetails:String!
    socialmedia:String!
}


type Query{
  getContact:[getUser!]!
  getContactId(ID:ID!):getUser!
}

type Mutation {
   addContact(contactInput:InputContact):getUser!
   deleteContact(ID:ID!):getUser!
   editContact(ID:ID!,editInput:EditContact):getUser!
}

`