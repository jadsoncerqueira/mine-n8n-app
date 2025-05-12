const userTypes = `#graphql
  scalar Date
  type User {
    id: String!
    email: String!
    name: String!
    picture: String!
    googgle_id: String
    created_at: Date
  }

  type Query {
    users: [User]
    user(id: String!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, picture: String!): User
    updateUser(id: ID!, email: String!, picture: String!): User
  }
`;

export default userTypes;
