import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  padding: 50,
  maxWidth: 1200,
  margin: 'auto',
}

const cardStyle = {
  width: 250,
  height: 250,
  margin: 10,
  background: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  position: 'relative',
}

const nameStyle = {
  color: 'white',
  bottom: 10,
  fontFamily: 'sans-serif',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: 10,
  flex: 1,
  textAlign: 'center',
}

const HeroesList = ({ data }) => {
  if (data.loading) return <p> Loading heroes... </p>
  console.log(data)
  return (
    <div style={listStyle}>
      {data.heroes.map(hero => {
        const style = {
          ...cardStyle,
          backgroundImage: `url(${hero.picture})`,
        }

        return (
          <div key={hero.id} style={style}>
            <div style={nameStyle}>
              {hero.alias}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const heroesQuery = gql`
  query {
    heroes {
      id
      alias
      picture
    }
  }
`
export default graphql(heroesQuery)(HeroesList)
