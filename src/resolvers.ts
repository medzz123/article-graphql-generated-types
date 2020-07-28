// A map of functions which return data for the schema.
import { Resolvers } from './typings/generated';

export const resolvers: Resolvers = {
  Query: {
    customers: async (_, _1, context) => {
      const { models } = context;
      return await models.Customer.findAll();
    },
  },

  Mutation: {
    createCustomer: async (_, args, context) => {
      const { name, email } = args;
      const { models } = context;
      return await models.Customer.create({ name, email });
    },
    createVehicle: async (_, args, context) => {
      const { make, customerId } = args;
      const { models } = context;
      return await models.Vehicle.create({ make, customerId });
    },
  },

  Customer: {
    vehicles: async (customer, _, context) => {
      const { models } = context;
      return await models.Vehicle.findAll({
        where: { customerId: customer.id },
      });
    },
  },

  Vehicle: {
    customer: async (vehicle, _, context) => {
      const { models } = context;
      return await models.Customer.findOne({
        where: { customerId: vehicle.customerId },
      });
    },
  },
};
