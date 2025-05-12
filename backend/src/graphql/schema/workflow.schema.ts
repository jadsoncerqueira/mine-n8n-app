const workflowTypes = `#graphql
  scalar Date
  type Workflow {
    id: String!
    user_id: String!
    name: String!
    description: String
    created_at: Date!
    updated_at: Date!
  }

  type Query {
    workflows: [Workflow]
    workflow(id: String!): Workflow
  }

  type Mutation {
    createWorkflow( user_id: String!, name: String!, description: String): Workflow
    updateWorkflow(id: ID!, user_id: String!, name: String!, description: String): Workflow
  }
`;

export default workflowTypes;
