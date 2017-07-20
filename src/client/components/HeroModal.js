import Link from 'next/link'
import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import glamorous from 'glamorous'

const ModalContainer = glamorous.div({
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, .65)',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
})

const Content = glamorous.div({
  width: 900,
  height: 500,
  overflow: 'hidden',
  display: 'flex',
})

const ImageWrapper = glamorous.div({
  background: '#111',
  flex: '0 0 580px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: 10,
})

const Image = glamorous.div(
  {
    width: '100%',
    height: '100%',
  },
  ({ picture }) => ({
    backgroundImage: `url(${picture})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  })
)

const SideBar = glamorous.div({
  background: '#fff',
  flex: '0 0 260px',
  textAlign: 'left',
  padding: 20,
  fontSize: 12,
})

const Title = glamorous.div({
  fontSize: 16,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: 10,
})

const SubTitle = glamorous.div({
  fontSize: 12,
  marginBottom: 10,
})

const MovieLi = glamorous.li({
  ':hover': {
    textDecoration: 'underline',
  },
})

class HeroModal extends Component {
  dismiss(e) {
    if (this._shim === e.target || this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render() {
    const { data } = this.props

    if (data.loading || data.error) return null

    const hero = data.hero
    return (
      <ModalContainer
        innerRef={el => (this._shim = el)}
        onClick={e => this.dismiss(e)}
      >
        <Content innerRef={el => (this._photoWrap = el)}>
          <ImageWrapper>
            <Image picture={hero.picture} />
          </ImageWrapper>
          <SideBar>
            <Title>
              {hero.alias}
            </Title>
            <SubTitle>
              Real identity:{' '}
              <strong>
                {hero.firstname} {hero.lastname}
              </strong>
            </SubTitle>
            <p style={{ textAlign: 'justify' }}>
              {hero.description}
            </p>
            <strong>Movies:</strong>
            <ul
              style={{
                margin: 0,
                padding: 5,
                listStyle: 'none',
                lineHeight: 1.5,
              }}
            >
              {hero.movies.map(m => {
                return (
                  <MovieLi key={m.id} style={{ cursor: 'pointer' }}>
                    <Link href={`/movie?id=${m.id}`}>
                      <span>
                        <strong>{m.name}</strong>{' '}
                        <small>
                          by {m.director} ({m.production_year})
                        </small>
                      </span>
                    </Link>
                  </MovieLi>
                )
              })}
            </ul>
          </SideBar>
        </Content>
      </ModalContainer>
    )
  }
}

const heroQuery = gql`
  query hero($id: ID!) {
    hero(id: $id) {
      id
      alias
      picture
      description
      firstname
      lastname
      movies {
        id
        name
        director
        production_year
      }
    }
  }
`
export default graphql(heroQuery, {
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
})(HeroModal)
