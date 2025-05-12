import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import typesGraphql from "./schema/index.js";
import resolversGraphql from "./resolvers/index.js";

const { productTypes } = typesGraphql;
const { productResolver } = resolversGraphql;

export const typeDefs = mergeTypeDefs([productTypes]);
export const resolvers = mergeResolvers([productResolver]);
