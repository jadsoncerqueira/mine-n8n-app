import { GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value: unknown): Date | null {
    if (typeof value === "string" || typeof value === "number") {
      return new Date(value);
    }
    return null;
  },
  serialize(value: unknown): string | null {
    if (value instanceof Date) {
      return value.toISOString();
    }
    return null;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});
