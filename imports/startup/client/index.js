import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from 'apollo-link-context'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

const theme = createMuiTheme({
  typography: {
    fontSize: 25,
  },
  palette: {
    primary: {
      light: '#8a6f67',
      main: '#6d4c41',
      dark: '#4c352d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33d375',
      main: '#00c853',
      dark: '#008c3a',
      contrastText: '#000',
    },
  },
});


Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}> 
        <App />
      </MuiThemeProvider >
    </ApolloProvider>,
    document.getElementById("app")
  );
});
