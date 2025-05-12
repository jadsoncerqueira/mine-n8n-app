const workflowTypes = `#graphql
  scalar Date
  type Workflow {

  }

  type Query {
    workflows: [Workflow]
    workflow(id: String!): Workflow
  }

  type Mutation {
    createWorkflow(): Workflow
    updateWorkflow(id: ID!): Workflow
  }
`;

export default workflowTypes;
