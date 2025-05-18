import { GraphQLError } from "graphql";
import { IPayload } from "../interface/user.interface.js";

export default function ErrorAuth(userPayload: IPayload | null) {
    if(!userPayload) {
      throw new GraphQLError('User is not authenticated', {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        }
      });
    }

    
}