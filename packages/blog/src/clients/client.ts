import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const VALIDATED_API_KEY = import.meta.env.VITE_VALIDATED_API_KEY;

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_SERVER_URI,
    headers: {
      'x-api-key': VALIDATED_API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
