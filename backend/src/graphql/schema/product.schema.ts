const productTypes = `#graphql
  type Product {
    id: String!
    name: String!
    price: Float!
    description: String
  }

  type Query {
    products: [Product]
    product(id: String!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!, description: String): Product
    updateProduct(id: ID!, name: String, price: Float, description: String): Product
  }
`;

export default productTypes;
