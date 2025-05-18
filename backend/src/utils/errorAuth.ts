import { GraphQLError } from "graphql";

export default function ErrorAuth(val: boolean) {
    if(val) {
          throw new GraphQLError('User is not authenticated', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 },
            }
          });
        }
}