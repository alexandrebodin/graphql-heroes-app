exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments()
    table.string('name')
    table.string('production_year')
    table.string('director')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
}
