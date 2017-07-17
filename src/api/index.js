const router = require('express').Router();
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');

const heroes = [
  {
    id: 1,
    name: 'Captain America',
  },
];

const schema = buildSchema(`
  type Query {
    heroes: [Heroe]
  }

  type Heroe {
    id: ID
    name: String
  }
`);

const root = {
  heroes: () => heroes,
};

router.use(
  '/',
  expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
