import IMyContext from "../../interface/mycontext.interface.js";
import IUser from "../../interface/user.interface.js";
import ErrorAuth from "../../utils/errorAuth.js";
import { DateScalar } from "./dateScalar.resolver.js";

export const userResolver = {
  Query: {
    users: async (
      _: any,
      __: any,
      { dataSources }: IMyContext
    ): Promise<IUser[]> => {
      ErrorAuth(!dataSources.userPayload)
      return dataSources.userApi.getUsers();
    },
    user: async (
      _: any,
      { id }: { id: string },
      { dataSources }: IMyContext
    ): Promise<IUser> => {
      ErrorAuth(!dataSources.userPayload)
      return dataSources.userApi.getUserById(id);
    },
  },
  Date: DateScalar,
};
