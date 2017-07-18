const qb = require('./queryBuilder');

const findAll = () => {
  return qb.select().from('heroes');
};

module.exports = {
  findAll,
};
