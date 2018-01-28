const router = require('express').Router();
const expressGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const { buildSchema } = require('graphql');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

router.use(
  '/',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = router;
