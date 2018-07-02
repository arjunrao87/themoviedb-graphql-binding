require("babel-polyfill");
import rp from "request-promise"

const BASE_URL = "https://api.themoviedb.org/3/"

const resolvers = {
    Query : {
        searchByName : async (root, {name}, context) => {
            const {results} = await searchByName( name, context.apiKey );
            return results;
        },
        searchByID : (root, {id}, context ) => searchByID( id, context.apiKey )
    },

    MovieDetail : {
        videos( root, args ){
        return root.videos.results
        }
    }
};

const searchByName = ( name, apiKey ) => query(`${BASE_URL}search/movie?api_key=${apiKey}&query=${name}`);
const searchByID = ( id, apiKey ) => query(`${BASE_URL}movie/${id}?api_key=${apiKey}&append_to_response=videos`);

const query = url => {
    return rp({
        method: 'GET',
        uri: url,
        json: true
    });
}
  
export default resolvers;
