import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_URI,
  cache: new InMemoryCache(),
});

export default client;
