type Amenities = {
    id: string;
    microwave: boolean;
    chair: boolean;
    wc: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type Location = {
    id: string;
    name: string;
    address: string;
    city: string;
    coordinates: string;
    createdAt: Date;
    updatedAt: Date;
    amenities: Amenities | null;
}

