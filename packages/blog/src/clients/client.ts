import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_URI,
  cache: new InMemoryCache(),
});

console.log('uri : ', import.meta.env.VITE_SERVER_URI);

export default client;
