import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import HeroesList from '../components/HeroesList'
import withApollo from '../lib/withApollo'

class Index extends Component {
  render() {
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
        <HeroesList />
      </div>
    )
  }
}

export default withApollo(Index)
