require("babel-polyfill");

import rp from "request-promise"

const BASE_URL = "https://api.themoviedb.org/3/"

const resolvers = {
    Query : {
        async search (root, {input}, context) {
            const results = await searchQuery( input.query, context.apiKey );
            return results.results; // This is an array of maps
        },
        async getMovieDetailsForId(root, {id}, context){
            const results = await getMovieDetailsForId( id, context.apiKey );
            return results; // This is a map
        }
    },

    MovieConnection: {
        pageInfo(root, args ){
            return {"query" : root}
        },
        edges(root, args){
            return root // This is an array of maps
        }
    },

    MovieEdge : {
        node( root, args ){
            return root // This is one of the elements of the above array because Graphql figures that out for you
        },
        cursor( root, args ){
            return "bar"
        },
    },

    MovieDetails : {
        videos( root, args ){
        return root.videos.results
        }
    }
};

async function searchQuery( query, apiKey ){
    const promise = searchForString( query, apiKey );
    try{
      let results = await Promise.resolve( promise );
      return results;
    } catch ( error ){
      console.log( "Error = " + error )
    }
}
  
async function getMovieDetailsForId( id, apiKey ){
    const promise = retrieveMovieDetailsForId( id, apiKey );
    try{
        let results = await Promise.resolve( promise );
        return results;
    } catch ( error ){
        console.log( "Error = " + error )
    }
}

function retrieveMovieDetailsForId( id, apiKey ){
    const url = `${BASE_URL}movie/${id}?api_key=${apiKey}&append_to_response=videos`;
    var options = {
        method: 'GET',
        uri: url,
        json: true
    };
    return rp( options );
}

function searchForString( searchQuery, apiKey ){
    const url = `${BASE_URL}search/movie?api_key=${apiKey}&query=${searchQuery}`;
    var options = {
        method: 'GET',
        uri: url,
        json: true
    };
    return rp( options );
}
  
export default resolvers;

// Additional queries :
//https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
