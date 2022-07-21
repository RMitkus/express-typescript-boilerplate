import { Location } from './LocationModel';

type Role = {
  id: number;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export type User = {
    id: string;
    name: string;
    lastName: string | null;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role | null;
    locations: Location[];
  }

