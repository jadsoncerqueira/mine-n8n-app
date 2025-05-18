import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./index.js";
import IMyContext from "../interface/mycontext.interface.js";
import UserController from "../controller/user.controller.js";
import WorkflowController from "../controller/workflow.controller.js";
import { verifyToken } from "../utils/auth.js";
import { IPayload } from "../interface/user.interface.js";
import { GraphQLError } from "graphql";

const port = 4000;

const server = new ApolloServer<IMyContext>({ typeDefs, resolvers });

startStandaloneServer<IMyContext>(server, {
  listen: { port },
  context: async ({ req }) => {
    const token = req.headers.authorization as unknown as string;
    const isUserAuth = verifyToken(token);
    return {
      dataSources: {
        userPayload: isUserAuth,
        userApi: new UserController(),
        workflowApi: new WorkflowController()
      },
    }
  },
}).then(({ url }) => {
  console.log(`Servidor rodando em: ${url}`);
});
