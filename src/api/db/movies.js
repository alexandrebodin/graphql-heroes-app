const qb = require('./queryBuilder')

const findOne = ({ id }) => {
  return qb.select().from('movies').where('id', id)
}

const findMoviesByHero = ({ heroId }) => {
  return qb
    .select('m.*')
    .from('movies AS m')
    .leftJoin('link_heroes_movies AS l', 'l.movie_id', 'm.id')
    .where('l.hero_id', heroId)
}

module.exports = {
  findOne,
  findMoviesByHero,
}
