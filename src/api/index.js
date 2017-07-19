const router = require('express').Router()
const expressGraphQL = require('express-graphql')
const { buildSchema } = require('graphql')
const resolvers = require('./resolvers')
const schema = require('./schema')

router.use(
  '/',
  expressGraphQL({
    schema: buildSchema(schema),
    rootValue: resolvers,
    graphiql: true,
  })
)

module.exports = router
