const qb = require('./queryBuilder')

const findAll = ({ search } = {}) => {
  const query = qb.select().from('heroes')

  if (search)
    query.whereRaw('lower(alias) LIKE lower(:alias)', {
      alias: search + '%',
    })

  return query.orderBy('alias')
}

const findOne = ({ id }) => {
  return qb.select().from('heroes').where('id', id)
}

const findHeroeisByMovie = ({ movieId }) => {
  return qb
    .select('h.*')
    .from('heroes AS h')
    .leftJoin('link_heroes_movies AS l', 'l.hero_id', 'h.id')
    .where('l.movie_id', movieId)
}

module.exports = {
  findAll,
  findOne,
  findHeroeisByMovie,
}
