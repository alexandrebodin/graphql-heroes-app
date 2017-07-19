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
  width: 800,
  height: 500,
  overflow: 'hidden',
  display: 'flex',
})

const Image = glamorous.div({
  background: '#111',
  flex: '0 0 600px',
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
})

const SideBar = glamorous.div({
  background: '#fff',
  flex: '0 0 200px',
  textAlign: 'left',
  padding: 20,
  fontSize: 12,
})

const Title = glamorous.div({
  fontSize: 20,
  marginBottom: 50,
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

    if (data.loading) return null

    const hero = data.hero
    return (
      <ModalContainer
        innerRef={el => (this._shim = el)}
        onClick={e => this.dismiss(e)}
      >
        <Content innerRef={el => (this._photoWrap = el)}>
          <Image>
            <img src={hero.picture} />
          </Image>

          <SideBar>
            <Title>
              {hero.alias} <br />
              {hero.firstname} {hero.lastname}
            </Title>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li>- Great photo!</li>
            </ul>
          </SideBar>
        </Content>
      </ModalContainer>
    )
  }
}

const heroQuery = gql`
  query hero($id: ID) {
    hero(id: $id) {
      id
      alias
      picture
      description
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
