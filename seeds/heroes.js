const heroes = [
  { alias: 'Aquaman', picture: '/static/heroes/aquaman.jpg' },
  { alias: 'Batman', picture: '/static/heroes/batman.jpg' },
  { alias: 'Superman', picture: '/static/heroes/superman.jpg' },
  { alias: 'Spider-Man', picture: '/static/heroes/spiderman.jpg' },
  { alias: 'Catwoman', picture: '/static/heroes/catwoman.jpg' },
  { alias: 'Cyborg', picture: '/static/heroes/cyborg.jpg' },
  { alias: 'Flash', picture: '/static/heroes/flash.jpg' },
  { alias: 'Green Lantern', picture: '/static/heroes/greenlantern.jpg' },
  { alias: 'Supergirl', picture: '/static/heroes/supergirl.jpg' },
  { alias: 'Wonder Woman', picture: '/static/heroes/wonderwoman.jpg' },
  { alias: 'Ant-Man', picture: '/static/heroes/antman.jpg' },
  { alias: 'Black Panther', picture: '/static/heroes/blackpanther.jpg' },
  { alias: 'Black Widow', picture: '/static/heroes/blackwidow.jpg' },
  { alias: 'Blade', picture: '/static/heroes/blade.jpg' },
  { alias: 'Captain America', picture: '/static/heroes/captainamerica.jpg' },
  { alias: 'Captain Marvel', picture: '/static/heroes/captainmarvel.jpg' },
  { alias: 'Deadpool', picture: '/static/heroes/deadpool.jpg' },
  { alias: 'Elektra', picture: '/static/heroes/elektra.jpg' },
  { alias: 'Doctor Strange', picture: '/static/heroes/doctorstrange.jpg' },
  { alias: 'Hawkeyes', picture: '/static/heroes/hawkeyes.jpg' },
  { alias: 'Hulk', picture: '/static/heroes/hulk.jpg' },
  { alias: 'Iron Man', picture: '/static/heroes/ironman.jpg' },
  { alias: 'Thor', picture: '/static/heroes/thor.jpg' },
  { alias: 'Professor X', picture: '/static/heroes/professorx.jpg' },
  { alias: 'Cyclops', picture: '/static/heroes/cyclops.jpg' },
  { alias: 'Wolverine', picture: '/static/heroes/wolverine.jpg' },
  { alias: 'The Punisher', picture: '/static/heroes/punisher.jpg' },
  { alias: 'Groot', picture: '/static/heroes/groot.jpg' },
]

exports.seed = function(knex, Promise) {
  return knex('heroes').del().then(() => knex('heroes').insert(heroes))
}