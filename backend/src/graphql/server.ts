import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./index.js";
import IMyContext from "../interface/mycontext.interface.js";
import ProductController from "../controller/user.controller.js";
import WorkflowController from "../controller/workflow.controller.js";

const port = 4000;

const server = new ApolloServer<IMyContext>({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port },
  context: async ({ req }) => ({
    token: req.headers.authorization,
    dataSources: {
      userApi: new ProductController(),
      workflowApi: new WorkflowController()
    },
  }),
}).then(({ url }) => {
  console.log(`Servidor rodando em: ${url}`);
});
