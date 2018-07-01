const typeDefs =
`
  type MovieConnection{
    edges: [MovieEdge],
    pageInfo: PageInfo
  }

  type MovieEdge {
    node: Movie!,
    cursor: ID!
  }

  type Movie{
    id : ID!
    vote_count : Int
    video : Boolean
    vote_average : Float
    title : String
    popularity : Float
    poster_path : String
    original_language : String
    original_title : String
    genre_ids : [Int!]
    backdrop_path : String
    adult : Boolean
    overview : String
    release_date : String
  }

  type MovieDetails{
    id : ID!
    adult : Boolean
    backdrop_path : String
    belongs_to_collection : CollectionName
    budget : Float
    genres : [Genre]
    homepage : String
    imdb_id : String
    original_language : String
    original_title : String
    overview : String
    popularity : Float
    poster_path : String
    production_companies : [ProductionCompany]
    production_countries : [ProductionCountry]
    release_date : String
    revenue : Float
    runtime : Int
    spoken_languages : [SpokenLanguage]
    status : String
    tagline : String
    title : String
    vote_count : Int
    video : Boolean
    vote_average : Float
    videos : [VideoBlurb]
  }

  type VideoBlurb{
    id : String
    iso_639_1 : String
    iso_3166_1 : String
    key : String
    name : String
    site : String
    size : Int
    type : String
  }

  type SpokenLanguage{
    iso_639_1 : String
    name : String
  }

  type ProductionCompany{
    name : String
    id : Int
  }

  type ProductionCountry{
      iso_3166_1 : String
      name : String
  }

  type CollectionName{
    id : Int
    name : String
    poster_path : String
    backdrop_path : String
  }

  type Genre{
    id : Int
    name : String
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  input SearchQuery{
    query:String!,
    first: Int,
    last: Int,
    after: ID,
    before: ID
  }

  type Query{
    search( input:SearchQuery! ) : MovieConnection
    getMovieDetailsForId( id : String! ) : MovieDetails
  }
`
;

export default typeDefs;