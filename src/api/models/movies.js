const db = require('../db')

const resolveMovie = movieDB =>
  Object.assign({}, movieDB, {
    heroes: () => db.heroes.findHeroeisByMovie({ movieId: movieDB.id }),
  })

const findOne = ({ id }) =>
  db.movies.findOne({ id }).then(([movie]) => movie).then(resolveMovie)

module.exports = {
  findOne,
}
