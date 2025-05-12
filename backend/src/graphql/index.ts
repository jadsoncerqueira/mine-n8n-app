import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import typesGraphql from "./schema/index.js";
import resolversGraphql from "./resolvers/index.js";

const { userTypes, workflowTypes } = typesGraphql;
const { userResolver, workflowResolver } = resolversGraphql;

export const typeDefs = mergeTypeDefs([userTypes, workflowTypes]);
export const resolvers = mergeResolvers([userResolver, workflowResolver]);
