import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import App from "../../ui/App";

const httpLink = new HttpLink({
  uri: "http://triprec-gql.herokuapp.com/graphql"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById("app")
  );
});
