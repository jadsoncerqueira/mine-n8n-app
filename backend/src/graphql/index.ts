import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import typesGraphql from "./schema/index.js";
import resolversGraphql from "./resolvers/index.js";

const { userTypes } = typesGraphql;
const { userResolver } = resolversGraphql;

export const typeDefs = mergeTypeDefs([userTypes]);
export const resolvers = mergeResolvers([userResolver]);
