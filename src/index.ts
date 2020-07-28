import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import models from "./models";
import sequelize from "./models/db";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    secret: "Uga buga",
    models,
  }),
});

sequelize
  .sync({
    force: true,
  })
  .then(async () => {
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  });
