const qb = require('./queryBuilder')

const findAll = () => {
  return qb.select().from('heroes')
}

const find = id => {
  return qb.select().from('heroes').where('id', id).first()
}

module.exports = {
  findAll,
  find,
}
