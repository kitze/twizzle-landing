import {GraphQLClient} from 'graphql-request';
const {REACT_APP_GRAPHQL_TOKEN} = process.env;
const endpoint = 'http://localhost:4000';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Token: REACT_APP_GRAPHQL_TOKEN,
  }
});