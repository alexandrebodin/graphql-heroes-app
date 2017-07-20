import React from 'react'
import glamorous from 'glamorous'

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

export default HeroCard
