import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import HeroesList from '../components/HeroesList'
import HeroModal from '../components/HeroModal'
import withApollo from '../lib/withApollo'

class Index extends Component {
  constructor(props) {
    super(props)
    this.showHero = this.showHero.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
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
        {url.query.heroId &&
          <HeroModal
            id={url.query.heroId}
            onDismiss={() => this.dismissModal()}
          />}
        <HeroesList onHeroClick={(e, id) => this.showHero(e, id)} />
      </div>
    )
  }
}

export default withApollo(Index)
