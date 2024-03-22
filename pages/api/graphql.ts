import { ApolloServer } from '@apollo/server'
import { typeDefs } from 'graphql/typedefs'
import resolvers from 'graphql/resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
})

export default startServerAndCreateNextHandler(apolloServer)
