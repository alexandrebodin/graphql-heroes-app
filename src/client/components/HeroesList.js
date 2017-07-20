import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import glamorous from 'glamorous'
import HeroCard from './HeroCard'

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  minWidth: 300,
}

const HeroesList = ({ heroes, onHeroClick }) => {
  return (
    <div style={listStyle}>
      {heroes.map(hero =>
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

export default HeroesList
