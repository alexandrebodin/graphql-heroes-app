import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3001/api'
  }),
  cache: new InMemoryCache()
});

const withApollo = WrappedComponent => {
  return class WithApolloComponent extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
};

export default withApollo;
