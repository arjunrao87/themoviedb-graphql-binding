const movieTypeDefs = 
`

interface Movie {
  id: ID!
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int
}

type MovieBasic implements Movie{
  id: ID!
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int

  genre_ids : [Int!]
}

type MovieDetail implements Movie{
  id: ID!
  adult: Boolean
  backdrop_path : String
  original_language : String
  original_title : String
  overview : String
  popularity : Float
  poster_path : String
  release_date : String
  title : String
  video : Boolean
  vote_average : Float
  vote_count : Int

  belongs_to_collection : CollectionName
  budget : Float
  genres : [Genre]
  homepage : String
  imdb_id : String
  production_companies : [ProductionCompany]
  production_countries : [ProductionCountry]
  revenue : Float
  runtime : Int
  spoken_languages : [SpokenLanguage]
  status : String
  tagline : String
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
`
module.exports = movieTypeDefs