import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import glamorous from 'glamorous'

import HeroesList from '../components/HeroesList'
import HeroModal from '../components/HeroModal'
import withApollo from '../lib/withApollo'

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Input = glamorous.input({
  padding: 8,
  borderRadius: 12,
  border: 'none',
  width: '50%',
  minWidth: 250,
  margin: '25px 0',
})

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: null,
    }

    this.showHero = this.showHero.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e) {
    if (!this.props.url.query.heroId) return
    if (e.keyCode === 27) {
      window.history.back()
    }
  }

  dismissModal() {
    Router.push('/')
  }

  showHero(e, id) {
    e.preventDefault()
    Router.push(`/?heroId=${id}`, `/hero?id=${id}`)
  }

  search(query) {
    this.setState(() => ({
      searchQuery: query,
    }))
  }

  render() {
    const { url } = this.props

    return (
      <div>
        <Head>
          <title>GraphQL Heroes</title>
          <link rel="icon" href="/static/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Container>
          <Input
            type="text"
            placeholder="search"
            value={this.state.searchQuery || ''}
            onChange={e => this.search(e.target.value)}
          />
          {url.query.heroId &&
            <HeroModal
              id={url.query.heroId}
              onDismiss={() => this.dismissModal()}
            />}
          <HeroesList
            onHeroClick={(e, id) => this.showHero(e, id)}
            search={this.state.searchQuery}
          />
        </Container>
      </div>
    )
  }
}

export default withApollo(Index)
