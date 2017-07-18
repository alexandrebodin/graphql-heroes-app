const db = require('../db');

const resolvers = {
  heroes: () => db.heroes.findAll(),
};

module.exports = resolvers;
