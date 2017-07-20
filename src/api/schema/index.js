module.exports = `
  type Query {
    heroes(search: String): [Hero]
    hero(id: ID!): Hero
    movie(id: ID!): Movie
  }
  
  type Hero {
    id: ID!
    alias: String!
    picture: String
    firstname: String
    lastname: String
    description: String
    movies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    production_year: String
    director: String
    heroes: [Hero]
  }
`
