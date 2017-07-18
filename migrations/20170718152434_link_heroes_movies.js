exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('link_heroes_movies', table => {
    table.increments()
    table.integer('hero_id').unsigned().references('id').inTable('heroes')
    table.integer('movie_id').unsigned().references('id').inTable('movies')

    table.index(['hero_id', 'movie_id'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('link_heroes_movies')
}
