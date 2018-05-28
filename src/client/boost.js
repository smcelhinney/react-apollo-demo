const { PRISMA_ENDPOINT: uri } = process.env;

import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri
});

export default client;
