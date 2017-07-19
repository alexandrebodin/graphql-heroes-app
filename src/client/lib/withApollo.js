import React, { Component } from 'react'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/api',
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

const withApollo = WrappedComponent => {
  return class WithApolloComponent extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}

export default withApollo
