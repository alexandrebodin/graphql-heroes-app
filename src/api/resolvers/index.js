const db = require('../db')

const resolvers = {
  heroes: () => db.heroes.findAll(),
  hero: ({ id }) => db.heroes.find(id),
}

module.exports = resolvers
