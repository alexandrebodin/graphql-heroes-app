const models = require('../models')

const resolvers = {
  heroes: ({ search }) => models.heroes.findAll({ search }),
  hero: ({ id }) => models.heroes.findOne({ id }),
  movie: ({ id }) => models.movies.findOne({ id }),
}

module.exports = resolvers
