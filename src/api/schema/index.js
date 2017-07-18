module.exports = `
  type Query {
    heroes: [Hero]
  }

  type Hero {
    id: ID
    alias: String
    picture: String
  }
`;
