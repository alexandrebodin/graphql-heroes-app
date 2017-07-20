const movies = [
  { name: 'Batman', production_year: '1966', director: 'Leslie H. Martinson' },
  { name: 'Spider-Man', production_year: '1977', director: 'E. W. Swackhamer' },
  { name: 'Dr. Strange', production_year: '1978', director: 'Philip DeGuere' },
  { name: 'Superman', production_year: '1978', director: 'Richard Donner' },
  { name: 'Captain America', production_year: '1979', director: 'Rod Holcomb' },
  {
    name: 'Captain America II: Death Too Soon',
    production_year: '1979',
    director: 'Iván Nagy',
  },
  { name: 'Superman II', production_year: '1980', director: 'Richard Lester' },
  { name: 'Superman III', production_year: '1983', director: 'Richard Lester' },
  { name: 'Supergirl', production_year: '1984', director: 'Jeannot Szwarc' },
  {
    name: 'Superman IV: The Quest for Peace',
    production_year: '1987',
    director: 'Sidney J. Furie',
  },
  {
    name: 'The Incredible Hulk Returns',
    production_year: '1988',
    director: '	Nicholas J. Corea',
  },

  {
    name: 'The Trial of the Incredible Hulk',
    production_year: '1989',
    director: 'Bill Bixby',
  },
  { name: 'Batman', production_year: '1989', director: 'Tim Burton' },
  { name: 'The Punisher', production_year: '1989', director: 'Mark Goldblatt' },
  {
    name: 'The Death of the Incredible Hulk',
    production_year: '1990',
    director: 'Bill Bixby',
  },
  { name: 'Captain America', production_year: '1990', director: 'Albert Pyun' },
  { name: 'Batman Returns', production_year: '1992', director: 'Tim Burton' },
  {
    name: 'Batman Forever',
    production_year: '1995',
    director: 'Joel Schumacher',
  },
  {
    name: 'Batman & Robin',
    production_year: '1997',
    director: 'Joel Schumacher',
  },
  {
    name: 'Justice League of America',
    production_year: '1997',
    director: 'Félix Enríquez Alcalá',
  },
  { name: 'Blade', production_year: '1998', director: 'Stephen Norrington' },
  { name: 'X-Men', production_year: '2000', director: 'Bryan Singer' },

  { name: 'Blade II', production_year: '2002', director: 'Guillermo del Toro' },
  { name: 'Spider-Man', production_year: '2002', director: 'Sam Raimi' },
  {
    name: 'Daredevil',
    production_year: '2003',
    director: 'Mark Steven Johnson',
  },
  {
    name: 'X2: X-Men United',
    production_year: '2003',
    director: 'Bryan Singer',
  },
  { name: 'Hulk', production_year: '2003', director: 'Ang Lee' },
  {
    name: 'The Punisher',
    production_year: '2004',
    director: 'Jonathan Hensleigh',
  },
  { name: 'Spider-Man 2', production_year: '2004', director: 'Sam Raimi' },
  { name: 'Catwoman', production_year: '2004', director: 'Pitof' },
  {
    name: 'Blade: Trinity',
    production_year: '2004',
    director: 'David S. Goyer',
  },
  { name: 'Elektra', production_year: '2005', director: 'Rob Bowman' },
  {
    name: 'Batman Begins',
    production_year: '2005',
    director: 'Christopher Nolan',
  },

  {
    name: 'X-Men: The Last Stand',
    production_year: '2006',
    director: 'Brett Ratner',
  },
  {
    name: 'Superman Returns',
    production_year: '2006',
    director: 'Bryan Singer',
  },
  { name: 'Spider-Man 3', production_year: '2007', director: 'Sam Raimi' },
  { name: 'Iron Man', production_year: '2008', director: 'Jon Favreau' },
  {
    name: 'The Incredible Hulk',
    production_year: '2008',
    director: 'Louis Leterrier',
  },
  {
    name: 'The Dark Knight',
    production_year: '2008',
    director: 'Christopher Nolan',
  },
  {
    name: 'Punisher: War Zone',
    production_year: '2008',
    director: 'Lexi Alexander',
  },
  {
    name: 'X-Men Origins: Wolverine',
    production_year: '2009',
    director: 'Gavin Hood',
  },
  { name: 'Iron Man 2', production_year: '2010', director: 'Jon Favreau' },
  { name: 'Thor', production_year: '2011', director: 'Kenneth Branagh' },
  {
    name: 'X-Men: First Class',
    production_year: '2011',
    director: 'Matthew Vaughn',
  },

  {
    name: 'Green Lantern',
    production_year: '2011',
    director: 'Martin Campbell',
  },
  {
    name: 'Captain America: The First Avenger',
    production_year: '2011',
    director: 'Joe Johnston',
  },
  { name: 'The Avengers', production_year: '2012', director: 'Joss Whedon' },
  {
    name: 'The Amazing Spider-Man',
    production_year: '2012',
    director: 'Marc Webb',
  },
  {
    name: 'The Dark Knight Rises',
    production_year: '2012',
    director: 'Christopher Nolan',
  },
  { name: 'Iron Man 3', production_year: '2013', director: 'Shane Black' },
  { name: 'Man of Steel', production_year: '2013', director: 'Zack Snyder' },
  { name: 'The Wolverine', production_year: '2013', director: 'James Mangold' },
  {
    name: 'Thor: The Dark World',
    production_year: '2013',
    director: 'Alan Taylor',
  },
  {
    name: 'Captain America: The Winter Soldier',
    production_year: '2014',
    director: 'Anthony and Joe Russo',
  },
  {
    name: 'The Amazing Spider-Man 2',
    production_year: '2014',
    director: 'Marc Webb',
  },

  {
    name: 'X-Men: Days of Future Past',
    production_year: '2014',
    director: 'Bryan Singer',
  },
  {
    name: 'Guardians of the Galaxy',
    production_year: '2014',
    director: 'James Gunn',
  },
  {
    name: 'Avengers: Age of Ultron',
    production_year: '2015',
    director: 'Joss Whedon',
  },
  { name: 'Ant-Man', production_year: '2015', director: 'Peyton Reed' },
  { name: 'Deadpool', production_year: '2016', director: 'Tim Miller' },
  {
    name: 'Batman v Superman: Dawn of Justice',
    production_year: '2016',
    director: 'Zack Snyder',
  },
  {
    name: 'Captain America: Civil War',
    production_year: '2016',
    director: 'Anthony and Joe Russo',
  },
  {
    name: 'X-Men: Apocalypse',
    production_year: '2016',
    director: 'Bryan Singer',
  },
  {
    name: 'Doctor Strange',
    production_year: '2016',
    director: 'Scott Derrickson',
  },
  { name: 'Logan', production_year: '2017', director: 'James Mangold' },
  {
    name: 'Guardians of the Galaxy Vol. 2',
    production_year: '2017',
    director: 'James Gunn',
  },

  { name: 'Wonder Woman', production_year: '2017', director: 'Patty Jenkins' },
  {
    name: 'Spider-Man: Homecoming',
    production_year: '2017',
    director: 'Jon Watts',
  },
  {
    name: 'Thor: Ragnarok',
    production_year: '2017',
    director: 'Taika Waititi',
  },
  { name: 'Justice League', production_year: '2017', director: 'Zack Snyder' },
  { name: 'Black Panther', production_year: '2018', director: 'Ryan Coogler' },
  {
    name: 'Avengers: Infinity War',
    production_year: '2018',
    director: 'Anthony and Joe Russo',
  },
  { name: 'Deadpool 2', production_year: '2018', director: 'David Leitch' },
  {
    name: 'Ant-Man and the Wasp',
    production_year: '2018',
    director: 'Peyton Reed',
  },
  {
    name: 'X-Men: Dark Phoenix',
    production_year: '2018',
    director: 'Simon Kinberg',
  },
  { name: 'Aquaman', production_year: '2018', director: 'James Wan' },
  {
    name: 'Captain Marvel',
    production_year: '2019',
    director: 'Anna Boden and Ryan Fleck',
  },
  {
    name: 'The Fantastic Four',
    production_year: '1994',
    director: 'Roger Corman',
  },
  {
    name: 'Fantastic Four',
    production_year: '2005',
    director: 'Tim Story',
  },
  {
    name: 'Fantastic Four: Rise of the Silver Surfer',
    production_year: '2007',
    director: 'Tim Story',
  },
  {
    name: 'Fantastic Four',
    production_year: '2015',
    director: 'Josh Trank',
  },
]

const link = [
  // Batman
  { movie_id: 1, hero_id: 2 },
  { movie_id: 1, hero_id: 5 },

  // Spider-Man
  { movie_id: 2, hero_id: 4 },

  // Dr. Strange
  { movie_id: 3, hero_id: 19 },

  // Superman
  { movie_id: 4, hero_id: 3 },

  // Captain America
  { movie_id: 5, hero_id: 15 },

  // Captain America II: Death Too Soon
  { movie_id: 6, hero_id: 15 },

  // Superman II
  { movie_id: 7, hero_id: 3 },

  // Superman III
  { movie_id: 8, hero_id: 3 },

  // Supergirl
  { movie_id: 9, hero_id: 9 },

  // Superman IV: The Quest for Peace
  { movie_id: 10, hero_id: 3 },

  // The Incredible Hulk Returns
  { movie_id: 11, hero_id: 21 },
  { movie_id: 11, hero_id: 23 },

  // The Trial of the Incredible Hulk
  { movie_id: 12, hero_id: 21 },
  { movie_id: 12, hero_id: 30 },

  // Batman
  { movie_id: 13, hero_id: 2 },

  // The Punisher
  { movie_id: 14, hero_id: 27 },

  // The Death of the Incredible Hulk
  { movie_id: 15, hero_id: 21 },

  // Captain America
  { movie_id: 16, hero_id: 15 },

  // Batman Returns
  { movie_id: 17, hero_id: 2 },
  { movie_id: 17, hero_id: 5 },

  // Batman Forever
  { movie_id: 18, hero_id: 2 },

  // Batman & Robin
  { movie_id: 19, hero_id: 2 },

  // Justice League of America
  { movie_id: 20, hero_id: 8 },
  { movie_id: 20, hero_id: 7 },

  // Blade
  { movie_id: 21, hero_id: 14 },

  // X-men
  { movie_id: 22, hero_id: 24 },
  { movie_id: 22, hero_id: 26 },
  { movie_id: 22, hero_id: 25 },

  // Blade II
  { movie_id: 23, hero_id: 14 },

  // Spider man
  { movie_id: 24, hero_id: 4 },

  // Daredevil
  { movie_id: 25, hero_id: 30 },
  { movie_id: 25, hero_id: 18 },

  // X2: X-Men United
  { movie_id: 26, hero_id: 24 },
  { movie_id: 26, hero_id: 26 },
  { movie_id: 26, hero_id: 25 },

  // Hulk
  { movie_id: 27, hero_id: 21 },

  // The Punisher
  { movie_id: 28, hero_id: 27 },

  // Spider-Man 2
  { movie_id: 29, hero_id: 4 },

  // Catwoman
  { movie_id: 30, hero_id: 5 },

  // Blade: Trinity
  { movie_id: 31, hero_id: 14 },

  // Elektra
  { movie_id: 32, hero_id: 18 },

  // Batman Begins
  { movie_id: 33, hero_id: 2 },

  // X-Men: The Last Stand
  { movie_id: 34, hero_id: 26 },
  { movie_id: 34, hero_id: 25 },
  { movie_id: 34, hero_id: 24 },
  { movie_id: 34, hero_id: 29 },
  { movie_id: 34, hero_id: 33 },
  { movie_id: 34, hero_id: 34 },
  { movie_id: 34, hero_id: 41 },
  { movie_id: 34, hero_id: 35 },
  { movie_id: 34, hero_id: 42 },

  // Superman returns
  { movie_id: 35, hero_id: 3 },

  // Spider-Man 3
  { movie_id: 36, hero_id: 4 },

  // Iron man
  { movie_id: 37, hero_id: 22 },

  // The Incredible Hulk
  { movie_id: 38, hero_id: 21 },

  // The Dark Knight
  { movie_id: 39, hero_id: 2 },

  // Punisher: War Zone
  { movie_id: 40, hero_id: 27 },

  // X-Men Origins: Wolverine
  { movie_id: 41, hero_id: 26 },

  // Iron Man 2
  { movie_id: 42, hero_id: 22 },

  // Thor
  { movie_id: 43, hero_id: 23 },

  // X-Men: First Class
  { movie_id: 44, hero_id: 24 },
  { movie_id: 44, hero_id: 26 },

  // Green Lantern
  { movie_id: 45, hero_id: 8 },

  // Captain America: The First Avenger
  { movie_id: 46, hero_id: 15 },

  // The Avengers
  { movie_id: 47, hero_id: 22 },
  { movie_id: 47, hero_id: 15 },
  { movie_id: 47, hero_id: 21 },
  { movie_id: 47, hero_id: 23 },
  { movie_id: 47, hero_id: 13 },
  { movie_id: 47, hero_id: 20 },

  // The Amazing Spider-Man
  { movie_id: 48, hero_id: 4 },

  // The Dark Knight Rises
  { movie_id: 49, hero_id: 2 },
  { movie_id: 49, hero_id: 5 },

  // Iron Man 3
  { movie_id: 50, hero_id: 22 },

  // Man of Steel
  { movie_id: 51, hero_id: 3 },

  // The Wolverine
  { movie_id: 52, hero_id: 26 },
  { movie_id: 52, hero_id: 34 },
  { movie_id: 52, hero_id: 24 },

  // Thor: The Dark World
  { movie_id: 53, hero_id: 23 },

  // Captain America: The Winter Soldier
  { movie_id: 54, hero_id: 15 },
  { movie_id: 54, hero_id: 13 },

  // The Amazing Spider-Man 2
  { movie_id: 55, hero_id: 4 },

  // X-Men: Days of Future Past
  { movie_id: 56, hero_id: 24 },
  { movie_id: 56, hero_id: 25 },
  { movie_id: 56, hero_id: 26 },
  { movie_id: 56, hero_id: 34 },
  { movie_id: 56, hero_id: 35 },
  { movie_id: 56, hero_id: 33 },
  { movie_id: 56, hero_id: 41 },
  { movie_id: 56, hero_id: 42 },
  { movie_id: 56, hero_id: 36 },

  // Guardians of the Galaxy
  { movie_id: 57, hero_id: 28 },
  { movie_id: 57, hero_id: 37 },
  { movie_id: 57, hero_id: 38 },
  { movie_id: 57, hero_id: 39 },

  // Avengers: Age of Ultron
  { movie_id: 58, hero_id: 22 },
  { movie_id: 58, hero_id: 23 },
  { movie_id: 58, hero_id: 21 },
  { movie_id: 58, hero_id: 15 },
  { movie_id: 58, hero_id: 13 },
  { movie_id: 58, hero_id: 20 },
  { movie_id: 58, hero_id: 36 },
  { movie_id: 58, hero_id: 40 },

  // Ant-Man
  { movie_id: 59, hero_id: 11 },

  // Deadpool
  { movie_id: 60, hero_id: 17 },

  // Batman v Superman: Dawn of Justice
  { movie_id: 61, hero_id: 2 },
  { movie_id: 61, hero_id: 3 },
  { movie_id: 61, hero_id: 10 },
  { movie_id: 61, hero_id: 7 },
  { movie_id: 61, hero_id: 1 },

  // Captain America: Civil War
  { movie_id: 62, hero_id: 15 },
  { movie_id: 62, hero_id: 22 },
  { movie_id: 62, hero_id: 13 },
  { movie_id: 62, hero_id: 12 },
  { movie_id: 62, hero_id: 11 },
  { movie_id: 62, hero_id: 4 },
  { movie_id: 62, hero_id: 40 },

  // X-Men: Apocalypse
  { movie_id: 63, hero_id: 24 },
  { movie_id: 63, hero_id: 25 },
  { movie_id: 63, hero_id: 29 },
  { movie_id: 63, hero_id: 34 },
  { movie_id: 63, hero_id: 35 },
  { movie_id: 63, hero_id: 36 },
  { movie_id: 63, hero_id: 33 },

  // Doctor Strange
  { movie_id: 64, hero_id: 19 },

  // Logan
  { movie_id: 65, hero_id: 26 },
  { movie_id: 65, hero_id: 24 },

  // Guardians of the Galaxy Vol. 2
  { movie_id: 66, hero_id: 28 },
  { movie_id: 66, hero_id: 37 },
  { movie_id: 66, hero_id: 38 },
  { movie_id: 66, hero_id: 39 },

  // Wonder Woman
  { movie_id: 67, hero_id: 10 },

  // Spider-Man: Homecoming
  { movie_id: 68, hero_id: 4 },

  // Thor: Ragnarok
  { movie_id: 69, hero_id: 23 },
  { movie_id: 69, hero_id: 21 },
  { movie_id: 69, hero_id: 19 },

  // Justice League
  { movie_id: 70, hero_id: 2 },
  { movie_id: 70, hero_id: 3 },
  { movie_id: 70, hero_id: 10 },
  { movie_id: 70, hero_id: 1 },
  { movie_id: 70, hero_id: 6 },
  { movie_id: 70, hero_id: 7 },
  { movie_id: 70, hero_id: 6 },

  // Black Panther
  { movie_id: 71, hero_id: 12 },

  // Avengers: Infinity War
  { movie_id: 72, hero_id: 22 },
  { movie_id: 72, hero_id: 21 },
  { movie_id: 72, hero_id: 23 },
  { movie_id: 72, hero_id: 20 },
  { movie_id: 72, hero_id: 19 },
  { movie_id: 72, hero_id: 13 },
  { movie_id: 72, hero_id: 4 },
  { movie_id: 72, hero_id: 12 },
  { movie_id: 72, hero_id: 11 },
  { movie_id: 72, hero_id: 37 },
  { movie_id: 72, hero_id: 40 },
  { movie_id: 72, hero_id: 28 },
  { movie_id: 72, hero_id: 38 },
  { movie_id: 72, hero_id: 39 },

  // Deadpool 2
  { movie_id: 73, hero_id: 17 },

  // Ant-Man and the Wasp
  { movie_id: 74, hero_id: 11 },

  // X-Men: Dark Phoenix
  { movie_id: 75, hero_id: 24 },
  { movie_id: 75, hero_id: 25 },
  { movie_id: 75, hero_id: 35 },
  { movie_id: 75, hero_id: 33 },
  { movie_id: 75, hero_id: 36 },
  { movie_id: 75, hero_id: 34 },

  // Aquaman
  { movie_id: 76, hero_id: 1 },

  // Captain Marvel
  { movie_id: 77, hero_id: 16 },

  // The Fantastic Four
  { movie_id: 78, hero_id: 43 },
  { movie_id: 78, hero_id: 44 },
  { movie_id: 78, hero_id: 45 },
  { movie_id: 78, hero_id: 46 },

  // Fantastic Four
  { movie_id: 79, hero_id: 43 },
  { movie_id: 79, hero_id: 44 },
  { movie_id: 79, hero_id: 45 },
  { movie_id: 79, hero_id: 46 },

  // Fantastic Four: Rise of the Silver Surfer
  { movie_id: 80, hero_id: 43 },
  { movie_id: 80, hero_id: 44 },
  { movie_id: 80, hero_id: 45 },
  { movie_id: 80, hero_id: 46 },

  // Fantastic Four
  { movie_id: 81, hero_id: 43 },
  { movie_id: 81, hero_id: 44 },
  { movie_id: 81, hero_id: 45 },
  { movie_id: 81, hero_id: 46 },
]

exports.seed = function(knex, Promise) {
  return knex
    .raw('TRUNCATE movies, link_heroes_movies RESTART IDENTITY CASCADE')
    .then(() =>
      knex('movies')
        .insert(movies)
        .then(() =>
          knex('link_heroes_movies')
            .del()
            .then(() => knex('link_heroes_movies').insert(link))
        )
    )
}
