import { CustomerModelStatic, Customer } from '../models/customer';
import { VehicleModelStatic, Vehicle } from '../models/vehicle';

export type CustomerModel = Customer;
export type VehicleModel = Vehicle;

export type Context = {
  secret: string;
  models: {
    Customer: CustomerModelStatic;
    Vehicle: VehicleModelStatic;
  };
};
