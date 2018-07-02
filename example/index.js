require("dotenv").config();

const { GraphQLServer } = require('graphql-yoga')
const binding = require('../dist')
const typeDefs = require("./typedefs")

const resolvers = {
    Query: {
      hello: (parent, { name }) => `Hello ${name || 'World'}!`,
      movie: (parent, { name }, context) => {
        context["apiKey"] = process.env.THE_MOVIEDB_API_KEY || '';
        const input = `name: ${name || "Senegal"}`
        return binding.query.searchByName(input, context);
      },
    },
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
