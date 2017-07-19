const db = require('../db')

const resolvers = {
  heroes: ({ search }) => db.heroes.findAll({ search }),
  hero: ({ id }) => db.heroes.find(id),
}

module.exports = resolvers
