import { makeExecutableSchema } from 'graphql-tools';
import resolvers from "./resolvers"
import typeDefs from "./typedefs";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions :{
        requireResolversForResolveType: false
    },
});
  
export default schema;