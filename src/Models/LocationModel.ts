export type Location = {
    id: string;
    name: string;
    address: string;
    city: string;
    coordinates: string;
    createdAt: Date;
    updatedAt: Date;
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
}