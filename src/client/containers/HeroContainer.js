import React from 'react'
import { gql, graphql } from 'react-apollo'
import Hero from '../components/Hero'

const HeroContainer = ({ data, onHeroClick }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading hero... </p>
    )

  return <Hero hero={data.hero} />
}

const heroQuery = gql`
  query getHero($id: ID!) {
    hero(id: $id) {
      id
      alias
      picture
      firstname
      lastname
      description
      movies {
        id
        name
        production_year
        director
      }
    }
  }
`
export default graphql(heroQuery, {
  options: ({ id }) => ({ id }),
})(HeroContainer)
