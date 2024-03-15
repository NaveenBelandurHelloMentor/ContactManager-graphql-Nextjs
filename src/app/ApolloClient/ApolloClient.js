'use client'

import {InMemoryCache,ApolloClient,ApolloProvider} from '@apollo/client'

const ApolloClientStart = new ApolloClient({
    uri:'http://localhost:3060/graphql',
    cache:new InMemoryCache()
})

export default function StartApolloServer({children}){
    return (
        <ApolloProvider client={ApolloClientStart}>
            {children}
        </ApolloProvider>
    )
}


