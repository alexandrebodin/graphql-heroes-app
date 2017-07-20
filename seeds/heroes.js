const heroes = [
  {
    alias: 'Aquaman',
    firstname: 'Arthur',
    lastname: 'Curry',
    picture: '/static/heroes/aquaman.jpg',
    description:
      "The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is a founding member of the Justice League and is among DC Comics' most recognized heroes.",
  },
  {
    alias: 'Batman',
    firstname: 'Bruce',
    lastname: 'Wayne',
    picture: '/static/heroes/batman.jpg',
    description:
      "Bruce Wayne, who witnessed the murder of his billionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on criminals' fears, and utilizing a high-tech arsenal, he became the legendary Batman.",
  },
  {
    alias: 'Superman',
    firstname: 'Clark Joseph',
    lastname: 'Kent',
    picture: '/static/heroes/superman.jpg',
    description:
      "Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America's heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and the American way!",
  },
  {
    alias: 'Spider-Man',
    firstname: 'Peter Benjamin',
    lastname: 'Parker',
    picture: '/static/heroes/spiderman.jpg',
    description:
      'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
  },
  {
    alias: 'Catwoman',
    firstname: 'Selina',
    lastname: 'Kyle',
    picture: '/static/heroes/catwoman.jpg',
    description:
      'Catwoman, the costumed alias persona of Selina Kyle, is a cat burglar with an on-again, off-again, romantic relationship with Batman. She is shown as a woman who is very strong-willed, independent and morally dubious.',
  },
  {
    alias: 'Cyborg',
    firstname: 'Victor',
    lastname: 'Stone',
    picture: '/static/heroes/cyborg.jpg',
    description:
      'Half man, half machine - all hero! After a near fatal incident, Victor Stone was cybernetically enhanced by his father. He now possesses the ability to communicate, manipulate, and interface with nearly all forms of technology. As he is constantly upgrading, he promises to defend the future from any threat. He is also a founding member of both, the Justice League and the Teen Titans.',
  },
  {
    alias: 'Flash',
    firstname: 'Barry',
    lastname: 'Allen',
    picture: '/static/heroes/flash.jpg',
    description:
      "Having discovered his mother murdered and his father blamed for the act, forensic scientist Barry Allen sought to clear his father's name and find the real killer. After being doused in chemicals and struck by lightning, Barry was granted the gift of super-speed. Now he protects his hometown of Central City as The Flash, the fastest man alive and founding member of the Justice League.",
  },
  {
    alias: 'Green Lantern',
    firstname: 'Alan',
    lastname: 'Scott',
    picture: '/static/heroes/greenlantern.jpg',
    description:
      "Alan Scott, the bearer of the mystical Starheart, is the original Golden Age Green Lantern and a founding member of the Justice Society of America. An all-time great, Alan continues to fight for truth, justice and freedom well into old age as a member of the Justice Society. He has now been introduced as an iconic gay character in DC's new reboot, The New 52.",
  },
  {
    alias: 'Supergirl',
    firstname: 'Kara',
    lastname: 'Zor-El',
    picture: '/static/heroes/supergirl.jpg',
    description:
      "Kara Zor-El is Superman's cousin and last survivor of Krypton's Argo City. She has a brash and defiant personality that she developed in response to the destruction of Krypton. Currently, she is operating out of National City alongside the D.E.O.",
  },
  {
    alias: 'Wonder Woman',
    firstname: 'Diana',
    lastname: 'Of Themyscira',
    picture: '/static/heroes/wonderwoman.jpg',
    description:
      "The princess of the Amazons, armed with powers of a god, Wonder Woman is one of Earth's most powerful defenders of peace and equality and a member of the Justice League. She is often considered an archetype for the comic book superheroine. She stands for Love, peace, and above all else, truth! Her original origin depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted as the daughter of Zeus and the Amazon queen Hippolyta.",
  },
  {
    alias: 'Ant-Man',
    firstname: 'Hank',
    lastname: 'Pym',
    picture: '/static/heroes/antman.jpg',
    description:
      "Hank Pym is a genius, one of the founding members of the Avengers, the creator of Pym Particles and Ultron, a sufferer of Bipolar disorder, and a modern-day superhero. He has acted under many memorable identities, such as Ant-Man, Giant Man, Goliath, Yellowjacket, and the Wasp. He is also the Earth's Scientist Supreme, as decreed by Eternity.",
  },
  {
    alias: 'Black Panther',
    firstname: "T'Challa",
    picture: '/static/heroes/blackpanther.jpg',
    description:
      "T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.",
  },
  {
    alias: 'Black Widow',
    firstname: 'Natasha',
    lastname: 'Romanova',
    picture: '/static/heroes/blackwidow.jpg',
    description:
      "Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin. Trained at a young age by the KGB's infamous Red Room Academy, the Black Widow was formerly an enemy to the Avengers. She later became their ally after breaking out of the U.S.S.R.'s grasp, and also serves as a top S.H.I.E.L.D. agent.",
  },
  {
    alias: 'Blade',
    firstname: 'Eric',
    lastname: 'Brooks',
    picture: '/static/heroes/blade.jpg',
    description:
      'A human-vampire hybrid with all the strengths but none of the weaknesses of a traditional vampire, Blade has dedicated his life to destroying the occult world of vampires and all who associate with them.',
  },
  {
    alias: 'Captain America',
    firstname: 'Steven "Steve"',
    lastname: 'Rogers',
    picture: '/static/heroes/captainamerica.jpg',
    description:
      "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
  },
  {
    alias: 'Captain Marvel',
    firstname: 'Carol',
    lastname: 'Danvers',
    picture: '/static/heroes/captainmarvel.jpg',
    description:
      'After encountering the Kree hero Captain Marvel, Carol Danvers was accidentally subjected to otherworldly radiation that transformed her into a superhuman warrior. Calling herself Ms. Marvel, she established herself as one of the most powerful and prominent heroes, both as a solo heroine and as a member of the Avengers. She has now adopted the mantle of Captain Marvel for herself.',
  },
  {
    alias: 'Deadpool',
    firstname: 'Wade',
    lastname: 'Wilson',
    picture: '/static/heroes/deadpool.jpg',
    description:
      'Wade Wilson is a former test subject of the Weapon X program, possessing a regenerative healing factor and an unstable compiling of other "Weapon X" experiments. Deadpool\'s powers and personality traits combine to make a wild, mentally unstable, and unpredictable mercenary. Deadpool has been a member of X-Force and the Thunderbolts, and a self-professed member of the X-Men and Avengers. The "Merc with a Mouth" is infamous for breaking the fourth wall.',
  },
  {
    alias: 'Elektra',
    firstname: 'Elektra',
    lastname: 'Natchios',
    picture: '/static/heroes/elektra.jpg',
    description:
      "The lethal scarlet assassin. Daredevil's most fearsome enemy as well as his former lover and most renowned as being the greatest assassin in the world.",
  },
  {
    alias: 'Doctor Strange',
    firstname: 'Stephen Vincent',
    lastname: 'Strange',
    picture: '/static/heroes/doctorstrange.jpg',
    description:
      'Dr. Stephen Strange was once a gifted but egotistical surgeon who sought out the Ancient One to heal his hands after they were wounded in a car accident. Instead, the Ancient One trained him to become Master of the Mystic Arts and the Sorcerer Supreme of Earth.',
  },
  {
    alias: 'Hawkeye',
    firstname: 'Clint',
    lastname: 'Barton',
    picture: '/static/heroes/hawkeyes.jpg',
    description:
      "Trained by criminals, and inspired by heroes, Clint Barton has grown from a troubled youth into one of the greatest heroes on Earth. The world knows him best as Hawkeye: Earth's Mightiest Marksman.",
  },
  {
    alias: 'Hulk',
    firstname: 'Robert Bruce',
    lastname: 'Banner',
    picture: '/static/heroes/hulk.jpg',
    description:
      'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.',
  },
  {
    alias: 'Iron Man',
    firstname: 'Anthony Edward "Tony"',
    lastname: 'Stark',
    picture: '/static/heroes/ironman.jpg',
    description:
      'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
  },
  {
    alias: 'Thor',
    firstname: 'Thor',
    lastname: 'Odinson',
    picture: '/static/heroes/thor.jpg',
    description:
      "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
  },
  {
    alias: 'Professor X',
    firstname: 'Charles Francis',
    lastname: 'Xavier',
    picture: '/static/heroes/professorx.jpg',
    description:
      "Professor Charles Xavier is the creator of the X-Men and founder of the Xavier School for Gifted Youngsters. His dream of peaceful coexistence between mutants and humanity has long been the driving force for the X-Men. An immensely powerful telepath and scientific genius, Xavier was among the world's greatest masterminds. Killed at the hands of a Phoenix crazed Cyclops, Xavier's memory and dream still remains and motivates his X-Men to keep fighting for a world that fears and hates them.",
  },
  {
    alias: 'Cyclops',
    firstname: 'Scott',
    lastname: 'Summers',
    picture: '/static/heroes/cyclops.jpg',
    description:
      'The first X-Man, Scott Summers possesses the mutant ability to draw ambient energy from another dimension through his eyes which are actually portals to the dimension, he usually channels this energy into concussive force blasts. He is visually distinctive for the ruby quartz visor he wears to control his devastating power. A born leader, Cyclops succeeded his mentor Professor X to command the X-Men.',
  },
  {
    alias: 'Wolverine',
    firstname: 'James',
    lastname: 'Howlett',
    picture: '/static/heroes/wolverine.jpg',
    description:
      "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
  },
  {
    alias: 'The Punisher',
    firstname: 'Frank',
    lastname: 'Castle',
    picture: '/static/heroes/punisher.jpg',
    description:
      "After his family was killed by the mob, US Marine Special Forces veteran Frank Castle became a one-man army in his war against organized crime. Emblazoning a distinct death's-head symbol on his chest, Frank Castle became the vigilante now known as The Punisher.",
  },
  {
    alias: 'Baby Groot',
    firstname: ' Baby Groot',
    picture: '/static/heroes/groot.jpg',
    description:
      'The tree-like creature known as Groot was captured by the Kree and put on a team with Star-Lord, Bug, Mantis, and Rocket Raccoon. A tree of few words, Groot formed a bond with the creature known as Rocket Raccoon. Forming the Guardians of the Galaxy, Groot and his best friend Rocket travel through space getting into trouble wherever they go.',
  },
  {
    alias: 'Psylocke',
    firstname: 'Elizabeth "Betsy"',
    lastname: 'Braddock',
    picture: '/static/heroes/psylocke.jpg',
    description:
      'British beauty Elizabeth "Betsy" Braddock is a mutant with vast telepathic and telekinetic powers that she can focus into deadly weapons. She is a stealthy martial artist, a former fashion model and longtime X-Man.',
  },
  {
    alias: 'Daredevil',
    firstname: 'Matthew Michael',
    lastname: 'Murdock',
    picture: '/static/heroes/daredevil.jpg',
    description:
      'Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell\'s Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.',
  },
  {
    alias: 'Jessica Jones',
    firstname: 'Jessica Campbell',
    lastname: 'Jones',
    picture: '/static/heroes/jessicajones.jpg',
    description:
      'Former private investigator and retired superhero, Jessica is married to Luke Cage and is the mother of Danielle, their infant daughter.',
  },
  {
    alias: 'Luke Cage',
    firstname: 'Carl',
    lastname: 'Lucas',
    picture: '/static/heroes/lukecage.jpg',
    description:
      'Luke Cage, wrongly convicted and unjustly imprisoned, was altered in a failed prison experiment that granted him unbreakable skin and superhuman strength. With his street smarts, and unending determination to do right, he fights for the common man! He eventually married Jessica Jones and had a daughter with her. Luke was also a member of The Avengers and the Leader of Thunderbolts for a time.',
  },
  {
    alias: 'Storm',
    firstname: 'Ororo',
    lastname: 'Munroe',
    picture: '/static/heroes/storm.jpg',
    description:
      'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.',
  },
  {
    alias: 'Magneto',
    firstname: 'Max',
    lastname: 'Eisenhardt',
    picture: '/static/heroes/magneto.jpg',
    description:
      'Among the most powerful, recognizable, and infamous mutants to inhabit the planet Earth, Magneto was the X-Men\'s first major nemesis. Now known as a revolutionist and terrorist, Magneto has fought for the X-Men as many times as he’s been against them.',
  },
  {
    alias: 'Mystique',
    firstname: 'Raven',
    lastname: 'Darkholme',
    picture: '/static/heroes/mystique.jpg',
    description:
      'True to her name, the shape shifting Mystique is an enigma. Is she a mutant terrorist determined to bring about the end of humanity, or a misguided mutant with a good heart?',
  },
  {
    alias: 'Quicksilver',
    firstname: 'Pietro Django',
    lastname: 'Maximoff',
    picture: '/static/heroes/quicksilver.jpg',
    description:
      'Quicksilver is a meta-human with the ability to travel at speeds far beyond the average human. He is the twin brother of the Scarlet Witch. After he and his sister left the Brotherhood of Evil Mutants, they became members of the Avengers. Although Quicksilver\'s loyalties and reliability have long been erratic, his love for his sister has proven constant.',
  },
  {
    alias: 'Star-Lord',
    firstname: 'Peter',
    lastname: 'Quill',
    picture: '/static/heroes/starlord.jpg',
    description:
      'Peter Quill is the first and current Star-Lord, a human-alien hybrid and leader of the Guardians of the Galaxy. He is the son of J\'son of Spartax who is King of the Spartoi Empire.',
  },
  {
    alias: 'Gamora',
    picture: '/static/heroes/gamora.jpg',
    description:
      'The last of the Zen-Whoberi race, Gamora was adopted by the villainous Thanos and raised as an assassin. Gamora turned on her adopted father and now uses her abilities to help those who cannot help themselves. A veteran of the Annihilation Wave, Gamora now travels with the Guardians of the Galaxy and is known as the Most Dangerous Woman in the Universe.',
  },
  {
    alias: 'Rocket Raccoon',
    firstname: 'Rocket',
    lastname: 'Raccoon',
    picture: '/static/heroes/rocket.jpg',
    description:
      'An expert marksman with a penchant for large weaponry, Rocket Raccoon is the last of his kind. After being captured by the Kree, Rocket teams up with Star-Lord and other adventurers to form the Guardians of the Galaxy. Together, they travel the galaxy and defend it from those who wish it harm.',
  },
  {
    alias: 'Vision',
    picture: '/static/heroes/vision.jpg',
    description:
      'Vision is an artificial intelligence, a "synthezoid" created by the villain Ultron and an Avenger who possesses the power to alter his density at will. Having gained a modicum of humanity, Vision is always afraid he may one day lose touch with it.',
  },
  {
    alias: 'Rogue',
    firstname: 'Anna',
    lastname: 'Marie',
    picture: '/static/heroes/rogue.jpg',
    description:
      'Once a member of the Brotherhood of Evil Mutants, Rogue has since become a veteran member of the X-Men. After many years, she has finally gained conscious control of her power to absorb the thoughts, abilities and memories of others through physical contact. She is currently a member of both the Avengers Unity Squad and the X-Men team, based out of Jean Grey\'s School for Higher Learning.',
  },
  {
    alias: 'Kitty Pryde',
    firstname: 'Katherine Anne',
    lastname: 'Pryde',
    picture: '/static/heroes/kittypryde.jpg',
    description:
      'Kitty Pryde, also known as Shadowcat, is a mutant gifted with the ability to become intangible and phase her body through solid material. A talented prodigy, she became the "poster child" of the X-Men. Since "Battle of the Atom", Kitty has left Wolverine to join Cyclops and now mentors the time-displaced original X-Men.',
  },
  {
    alias: 'Mister Fantastic',
    firstname: 'Reed',
    lastname: 'Richards',
    picture: '/static/heroes/misterfantastic.jpg',
    description:
      'Reed Richards, also known as Mr. Fantastic, is the leader of the Fantastic Four. He can stretch his body to great distances due to his exposure to cosmic rays while in space. He is also considered to be one of the smartest men alive.',
  },
  {
    alias: 'Invisible Woman',
    firstname: 'Susan',
    lastname: 'Storm',
    picture: '/static/heroes/invisiblewoman.jpg',
    description:
      'Susan Storm is a founding member of the Fantastic Four and later the Future Foundation. She is able to create invisible force fields of any shape she conceives and able to turn herself and anything she\'s in contact with invisible.',
  },
  {
    alias: 'Human Torch',
    firstname: 'Jonathan Lowell Spencer',
    lastname: 'Storm',
    picture: '/static/heroes/humantorch.jpg',
    description:
      'The second most powerful member of the Fantastic Four and the brother of Sue Richards. Due to an accident caused by cosmic radiation in space, he can manipulate fire, turn his entire body into it and fly.',
  },
  {
    alias: 'Thing',
    firstname: 'Benjamin Jacob',
    lastname: 'Grimm',
    picture: '/static/heroes/thing.jpg',
    description:
      'Ben Grimm - The Thing - is the original, quintessential tough-guy of the Marvel Universe but because of his transformation he\'s also the tragic member of the Fantastic Four. Ben was an ace test-pilot until exposure to intense cosmic radiation mutated him into a rock-skinned monster with immense superhuman strength. Ben\'s exterior is much harder than stone and he has a gruff disposition, but inside he has a heart of gold.',
  },
]

exports.seed = function(knex, Promise) {
  return knex
    .raw('TRUNCATE heroes RESTART IDENTITY CASCADE')
    .then(() => knex('heroes').insert(heroes))
}
