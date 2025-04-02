import { TLaravelObject } from "./utils/laravel";

export type TExample = {
  role: TExampleRole;
  address: TAddress;
} & TLaravelObject;

type TAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

// Needed in multiple components
export type TExampleRole = {
  name: string;
  description: string;
  permissions: string[];
};
