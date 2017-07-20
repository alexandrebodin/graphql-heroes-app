import React from 'react'
import glamorous from 'glamorous'
import HeroesList from './HeroesList'

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  padding: 30,
})

const Title = glamorous.div({
  fontSize: '2em',
  fontWeight: 'bold',
})

const ProductionYear = glamorous.span({
  fontSize: '0.75em',
  fontWeight: 100,
})

const Movie = ({ movie }) => {
  return (
    <Container>
      <Title>
        {movie.name} <ProductionYear>({movie.production_year})</ProductionYear>
      </Title>
      <div>
        {movie.director}
      </div>
      <HeroesList heroes={movie.heroes} />
    </Container>
  )
}

export default Movie
