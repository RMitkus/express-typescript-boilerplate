import { PrismaClient } from '@prisma/client'

import { Location } from '../../../Models/LocationModel'

const prisma = new PrismaClient()

export const locationTypes = `
  type Location {
    id: String
    name: String
    address: String
    city: String
    coordinates: String
    createdAt: String
    updatedAt: String
    user: User
    amenities: Amenities
  }

  type Amenities {
    id: String
    microwave: Boolean
    chair: Boolean
    wc: Boolean
    createdAt: String
    updatedAt: String
    location: Location
  }
`

export const locationQueries = `
    locations: [Location]
`

export const locationResolvers = {
	locations: async (): Promise<Location[]> => {
		return await prisma.location.findMany({
			include: {
				amenities: true
			}
		})
	}
}
