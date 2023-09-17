import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphqlpokemon.favware.tech/v7'
  }),
  cache: new InMemoryCache()
});

