import { LaravelObject } from "@mcsoud/laravel";

export default interface Example extends LaravelObject {
  role: ExampleRole;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

// Needed in multiple components
export interface ExampleRole {
  name: string;
  description: string;
  permissions: string[];
}
