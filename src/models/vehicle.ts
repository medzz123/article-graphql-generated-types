import { BuildOptions, DataTypes, Model } from 'sequelize';

import sequelize from './db';

export class Vehicle extends Model {
  public make: string;

  // Generated
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  // Foreign Keys
  public readonly customerId: string;
}

Vehicle.init(
  {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: 'vehicle' }
);

export type VehicleModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Vehicle;
};

export default Vehicle as VehicleModelStatic;
