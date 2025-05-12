import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./index.js";
import IMyContext from "../interface/mycontext.interface.js";
import ProductController from "../controller/product.controller.js";

const port = 4000;

const server = new ApolloServer<IMyContext>({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port },
  context: async ({ req }) => ({
    token: req.headers.authorization,
    dataSources: {
      productApi: new ProductController(),
    },
  }),
}).then(({ url }) => {
  console.log(`Servidor rodando em: ${url}`);
});
