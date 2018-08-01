import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from 'apollo-link-context'

import { AUTH_TOKEN } from '../../ui/constants'
import App from "../../ui/App";

const httpLink = new HttpLink({
  uri: "http://triprec-gql.herokuapp.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});



Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("app")
  );
});
