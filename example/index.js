require("dotenv").config();

const { GraphQLServer } = require('graphql-yoga')
const binding = require('../dist/').default
const appTypeDefs = require("./appTypeDefs")
const movieTypeDefs = require("./theMovieDBTypeDefs")
const mergedTypeDefs = `${appTypeDefs}${movieTypeDefs}`

const resolvers = {
    Query: {
      hello: (parent, { name }) => `Hello ${name || 'World'}!`,
      movie: (obj, args, context, info) => {
        context["apiKey"] = process.env.THE_MOVIEDB_API_KEY;
        return binding.query
                      .searchByName({name: args.name}, info, {context})
                      .then(result => console.log(result))
                      .catch((error) => {console.log(error)});
      },
    },
}

const server = new GraphQLServer({ resolvers, typeDefs:mergedTypeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))
