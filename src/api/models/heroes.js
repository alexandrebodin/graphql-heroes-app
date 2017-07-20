const db = require('../db')

const resolveHero = heroDB =>
  Object.assign({}, heroDB, {
    movies: () => db.movies.findMoviesByHero({ heroId: heroDB.id }),
  })

const resolveHeroes = heroes => heroes.map(resolveHero)

const findAll = ({ search }) => {
  return db.heroes.findAll({ search }).then(resolveHeroes)
}

const findOne = params => {
  return db.heroes.findOne(params).then(resolveHeroes).then(([hero]) => hero)
}

module.exports = {
  findAll,
  findOne,
}
