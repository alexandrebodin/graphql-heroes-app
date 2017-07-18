exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('heroes', table => {
    table.increments()
    table.string('alias')
    table.string('firstname')
    table.string('lastname')
    table.string('picture')
    table.string('description')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('heroes')
}
