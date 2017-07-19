const qb = require('./queryBuilder')

const findAll = ({ search } = {}) => {
  const query = qb.select().from('heroes')

  if (search)
    query.whereRaw('lower(alias) LIKE lower(:alias)', {
      alias: search + '%',
    })

  return query
}

const find = id => {
  return qb.select().from('heroes').where('id', id).first()
}

module.exports = {
  findAll,
  find,
}
