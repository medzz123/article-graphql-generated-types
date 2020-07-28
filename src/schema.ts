import { gql } from 'apollo-server';

// The GraphQL schema
export const typeDefs = gql`
  type Query {
    customers: [Customer!]
  }

  type Mutation {
    createCustomer(email: String, name: String!): Customer!
    createVehicle(make: String!, customerId: ID!): Vehicle!
  }

  type Customer {
    id: ID!
    name: String!
    email: String
    vehicles: [Vehicle!]
  }

  type Vehicle {
    make: String!
    customer: Customer!
  }
`;
