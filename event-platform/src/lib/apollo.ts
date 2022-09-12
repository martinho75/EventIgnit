import {ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
uri: 'https://api-sa-east-1.hygraph.com/v2/cl7xeya242z1201t7a7y77kng/master',
cache: new InMemoryCache()
})