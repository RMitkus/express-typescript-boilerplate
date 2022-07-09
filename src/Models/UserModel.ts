import { Location } from "./LocationModel";

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

type Role = {
    id: number;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}