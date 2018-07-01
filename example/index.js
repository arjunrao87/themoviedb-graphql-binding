require("dotenv").config();

const { GraphQLServer } = require('graphql-yoga')
const TheMovieDBBinding = require('../dist')
const typeDefs = require("./typedefs")

const token = process.env.THE_MOVIEDB_API_KEY || ''

const resolvers = {
    Query: {
      hello: (parent, { name }) => `Hello ${name || 'World'}!`,
      movie: (parent, { name }, context, info) => {
        const input = `
          input:{
            name: ${name || "Senegal"}
          }
        `
        return TheMovieDBBinding.query.movie(input, info);
      },
    },
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
