const appTypeDefs = 
`
type Query {
  hello(name: String): String!
  movie(name: String): [MovieBasic]
}
`

module.exports = appTypeDefs;