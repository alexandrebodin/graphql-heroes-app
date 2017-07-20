import React from 'react'
import { gql, graphql } from 'react-apollo'
import HeroesList from '../components/HeroesList'

const HeroesListContainer = ({ data, onHeroClick }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading heroes... </p>
    )

  return <HeroesList heroes={data.heroes} onHeroClick={onHeroClick} />
}

const heroesQuery = gql`
  query FilterHeroes($search: String) {
    heroes(search: $search) {
      id
      alias
      picture
    }
  }
`
export default graphql(heroesQuery, {
  options: ({ search }) => ({ search }),
})(HeroesListContainer)
