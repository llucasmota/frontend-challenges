import { ApolloClient, InMemoryCache, NormalizedCache } from '@apollo/client';

export const clientGraphql = new ApolloClient({
  uri: 'http://localhost:3333',
  cache: new InMemoryCache(),
});
