module.exports = `
  type Query {
    heroes: [Hero]
    hero(id: ID): Hero
  }

  type Hero {
    id: ID
    alias: String
    picture: String
    firstname: String
    lastname: String
    description: String
  }
`
