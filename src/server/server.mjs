import { ApolloServer, gql } from 'apollo-server';

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    getRandomKittenImages: [KittenImage]
  }

  type KittenImage {
    url: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    getRandomKittenImages: async () => {
      const randomNumbers = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 999) + 1
      );

      return randomNumbers.map((number) => ({
        url: `https://placekitten.com/g/200/${number}`,
      }));
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
