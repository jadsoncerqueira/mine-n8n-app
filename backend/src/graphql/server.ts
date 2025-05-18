import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./index.js";
import IMyContext from "../interface/mycontext.interface.js";
import UserController from "../controller/user.controller.js";
import WorkflowController from "../controller/workflow.controller.js";
import { verifyToken } from "../utils/authGoogle.js";

const port = 4000;

const server = new ApolloServer<IMyContext>({ typeDefs, resolvers, 
  formatError: (err) => {
    // Oculta o stack trace no log, mostra só mensagem útil
    console.error('Erro GraphQL:', err.message);
    return err;
  },
  csrfPrevention: false
 });

startStandaloneServer<IMyContext>(server, {
  listen: { port },
  context: async ({ req }) => {
    const token = req.headers.authorization as unknown as string;
    return {
      dataSources: {
        userPayload: await verifyToken(token),
        userApi: new UserController(),
        workflowApi: new WorkflowController()
      },
    }
  },
}).then(({ url }) => {
  console.log(`Servidor rodando em: ${url}`);
});
