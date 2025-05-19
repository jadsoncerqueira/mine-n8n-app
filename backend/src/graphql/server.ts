import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { typeDefs, resolvers } from './index.js';
import IMyContext from '../interface/mycontext.interface.js';
import UserController from '../controller/user.controller.js';
import WorkflowController from '../controller/workflow.controller.js';
import { IncomingMessage } from 'http';
import { verifyToken } from '../utils/authJwt.js';

const port = 4000;

// Função para extrair o valor do cookie
async function getCookieValue(req: IncomingMessage, name: string): Promise<string | null | undefined> {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;
  return cookieHeader
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(`${name}=`))
    ?.split('=')[1];
}

// Crie uma instância do Apollo Server
const server = new ApolloServer<IMyContext>({
  typeDefs,
  resolvers,
  formatError: (err) => {
    console.error('Erro GraphQL:', err.message);
    return err;
  },
  csrfPrevention: false,
});

// Inicie o servidor Apollo
await server.start();

// Crie uma instância do Express
const app = express();

// Configure o middleware do Express
app.use(
  '/graphql',
  cors({
    origin: 'http://localhost:3000', // Substitua pela origem do seu frontend
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
      res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
      const token = await getCookieValue(req, 'token');
      return {
        dataSources: {
          response: res,
          userPayload: verifyToken(token),
          userApi: new UserController(),
          workflowApi: new WorkflowController(),
        },
      };
    },
  })
);

// Inicie o servidor HTTP
const httpServer = http.createServer(app);
httpServer.listen({ port }, () => {
  console.log(`Servidor rodando em: http://localhost:${port}/graphql`);
});




// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs, resolvers } from "./index.js";
// import IMyContext from "../interface/mycontext.interface.js";
// import UserController from "../controller/user.controller.js";
// import WorkflowController from "../controller/workflow.controller.js";
// import { IncomingMessage, ServerResponse } from "http";
// import { verifyToken } from "../utils/authJwt.js";

// const port = 4000;

// const server = new ApolloServer<IMyContext>({ typeDefs, resolvers, 
//   formatError: (err) => {
//     // Oculta o stack trace no log, mostra só mensagem útil
//     console.error('Erro GraphQL:', err.message);
//     return err;
//   },
//   csrfPrevention: false,
//  });

//  async function getCookieValue(req: IncomingMessage, name: string): Promise<string | null | undefined>
//   {
//   const cookieHeader = req.headers.cookie;
//   if (!cookieHeader) return null;
//   return cookieHeader
//     .split(';')
//     .map(c => c.trim())
//     .find(c => c.startsWith(`${name}=`))
//     ?.split('=')[1];
// }

// startStandaloneServer<IMyContext>(server, {
//   listen: { port },
//   context: async ({ req, res }) => {
//     res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
//     res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
//     const token = await getCookieValue(req, 'token')
//     return {
//       dataSources: {
//         response: res,
//         userPayload: verifyToken(token),
//         userApi: new UserController(),
//         workflowApi: new WorkflowController()
//       },
//     }
//   },
// }).then(({ url }) => {
//   console.log(`Servidor rodando em: ${url}`);
// });
