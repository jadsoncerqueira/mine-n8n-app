import { IncomingMessage, ServerResponse } from "http";
import IMyContext from "../../interface/mycontext.interface.js";
import IUser, { IPayload } from "../../interface/user.interface.js";
import ErrorAuth from "../../utils/errorAuth.js";
import { DateScalar } from "./dateScalar.resolver.js";

export const userResolver = {
  Query: {
    users: async (
      _: any,
      __: any,
      { dataSources }: IMyContext
    ): Promise<IUser[]> => {
      ErrorAuth(dataSources.userPayload)
      return dataSources.userApi.getUsers();
    },
    user: async (
      _: any,
      { id }: { id: string },
      { dataSources }: IMyContext
    ): Promise<IUser> => {
      ErrorAuth(dataSources.userPayload)
      return dataSources.userApi.getUserById(id);
    },
    token: async (
      _: any,
      { token }: { token: string},
      { dataSources }: IMyContext
    ): Promise<IUser> => {
      const {newToken, user} = await dataSources.userApi.login(token);
      dataSources.response.setHeader('Set-Cookie', `token=${newToken}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`);
      return user;
    },
    logout: async (
      _: any,
      { token}: { token: string},
      { dataSources }: IMyContext
    ): Promise<string> => {
       dataSources.response.setHeader(
        'Set-Cookie',
        'token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict'
      );
      return "ok"
    },
  },
  Date: DateScalar,
};
