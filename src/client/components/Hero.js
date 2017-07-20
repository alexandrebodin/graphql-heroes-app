import Link from 'next/link'
import React from 'react'
import glamorous from 'glamorous'
import HeroesList from './HeroesList'

const Container = glamorous.div({
  display: 'flex',
  justfiyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 600,
  margin: 'auto',
  color: 'white',
  padding: 80,
})

const Identity = glamorous.div({
  display: 'flex',
  flex: '1 0 100%',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginBottom: 50,
})

const Profile = glamorous.div({
  flex: 1,
  padding: '0 20px',
})

const Title = glamorous.div({
  fontSize: '2em',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
})

const PictureBackground = glamorous.div(
  {
    width: 200,
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
  ({ picture }) => ({
    backgroundImage: `url(${picture})`,
  })
)

const MovieLi = glamorous.li({
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
})

const Hero = ({ hero }) => {
  return (
    <Container>
      <Identity>
        <PictureBackground picture={hero.picture} />
        <Profile>
          <Title>{hero.alias}</Title>
          Real name: {hero.firstname} {hero.lastname}
          <p style={{ textAlign: 'justify' }}>{hero.description}</p>
        </Profile>
      </Identity>
      <div>
        Movies in which <strong>{hero.alias}</strong> appears:
        <ul>
          {hero.movies.map(movie => {
            return (
              <MovieLi key={movie.id}>
                <Link href={`/movie?id=${movie.id}`}>
                  <div>
                    <strong>{movie.name}</strong>{' '}
                    <small>
                      by {movie.director} ({movie.production_year}){' '}
                    </small>
                  </div>
                </Link>
              </MovieLi>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default Hero
