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
    user: User;
}

type Location = {
    id: string;
    name: string;
    address: string;
    city: string;
    coordinates: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    amenities: Amenities |null;
}

type Amenities = {
    id: string;
    nursingTable: boolean;
    wifi: boolean;
    tv: boolean;
    microwave: boolean;
    chair: boolean;
    sink: boolean;
    wc: boolean;
    mirror: boolean;
    createdAt: Date;
    updatedAt: Date;
    location: Location;
}