const db = require('./db');

const resolvers = {
  Query: {
    heroes: (ctx, { search }) => db.heroes.findAll({ search }),
    hero: (ctx, { id }) => db.heroes.findOne({ id }).then(([hero]) => hero),
    movie: (ctx, { id }) => db.movies.findOne({ id }).then(([movie]) => movie)
  },
  Hero: {
    movies(hero) {
      return db.movies.findMoviesByHero({ heroId: hero.id });
    }
  },
  Movie: {
    heroes(movie) {
      return db.heroes.findHeroeisByMovie({ movieId: movie.id });
    }
  }
};

module.exports = resolvers;
