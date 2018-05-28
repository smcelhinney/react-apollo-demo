require('dotenv').config();
const { PRISMA_ENDPOINT: endpoint } = process.env;
import { GraphQLServer } from 'graphql-yoga';
import path from 'path';

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  }
};

const schema = path.resolve(__dirname, './prisma/generated/prisma.graphql');

const server = new GraphQLServer({ typeDefs, resolvers });
// const server = new GraphQLServer({ schema });
const options = {
  port: 8000,
  endpoint,
  subscriptions: '/subscriptions',
  playground: '/playground'
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
