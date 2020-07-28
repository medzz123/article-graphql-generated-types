import { Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from './db';
import Vehicle from './vehicle';

export class Customer extends Model {
  public name: string;
  public email: string | null;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Customer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'customer' }
);

Customer.hasMany(Vehicle);
Vehicle.belongsTo(Customer);

export type CustomerModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Customer;
};

export default Customer as CustomerModelStatic;
