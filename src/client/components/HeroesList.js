import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import glamorous from 'glamorous'

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 50,
  minWidth: 300,
}

const nameStyle = {
  color: 'white',
  bottom: 10,
  fontFamily: 'sans-serif',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: 10,
  flex: 1,
  zIndex: 1,
  textAlign: 'center',
}

const Card = glamorous.div({
  width: 250,
  height: 250,
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  background: '#eee',
  position: 'relative',
  transition: 'all 0.2s',
  overflow: 'hidden',
  ':hover': {
    cursor: 'pointer',
  },
})

const PictureBackground = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    transition: 'all 0.2s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  ({ picture }) => ({
    backgroundImage: `url(${picture})`,
  })
)

const HeroCard = ({ hero }) => {
  return (
    <Card>
      <PictureBackground picture={hero.picture} />
      <div style={nameStyle}>
        {hero.alias}
      </div>
    </Card>
  )
}

const HeroesList = ({ data, onHeroClick }) => {
  if (data.loading)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading heroes... </p>
    )

  return (
    <div style={listStyle}>
      {data.heroes.map(hero =>
        <a
          style={{ textDecoration: 'none' }}
          key={hero.id}
          href={`/hero?id=${hero.id}`}
          onClick={e => onHeroClick(e, hero.id)}
        >
          <HeroCard hero={hero} />
        </a>
      )}
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
