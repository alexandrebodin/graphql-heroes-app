import React from 'react'
import { gql, graphql } from 'react-apollo'
import Movie from '../components/Movie'

const MovieContainer = ({ data }) => {
  if (data.loading || data.error) return null
  return <Movie movie={data.movie} />
}

const movieQuery = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      name
      production_year
      director
      heroes {
        id
        alias
        picture
      }
    }
  }
`
export default graphql(movieQuery, {
  options: ({ id }) => ({ id }),
})(MovieContainer)
