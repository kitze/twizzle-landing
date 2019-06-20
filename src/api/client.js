import { GraphQLClient } from 'graphql-request';
import { isDev } from 'utils/dev-prod';

const { REACT_APP_GRAPHQL_TOKEN, REACT_APP_BACKEND_URL } = process.env;
const endpoint = isDev ? 'http://localhost:4000' : REACT_APP_BACKEND_URL;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Token: REACT_APP_GRAPHQL_TOKEN
  }
});
