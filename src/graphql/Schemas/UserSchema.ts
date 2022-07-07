import { PrismaClient, UserArgs } from '@prisma/client';

const prisma = new PrismaClient();

export const userTypes = `
  type User {
    id: String!
    name: String
    lastName: String
    email: String
    password: String!
    createdAt: String
    updatedAt: String
    role: Role
    locations: [Location]
  }

  type Role {
    id: Int
    role: String
    createdAt: String
    updatedAt: String
    user: User
  }

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
    nursingTable: Boolean
    wifi: Boolean
    tv: Boolean
    microwave: Boolean
    chair: Boolean
    sink: Boolean
    wc: Boolean
    mirror: Boolean
    createdAt: String
    updatedAt: String
    location: Location
  }
`

export const userQueries = `
    users: [User]
    user(email: String): User
`

export const userResolvers = {
  users: async (): Promise<UserArgs[]> => {
      return await prisma.user.findMany({
        include: {
          role: true,
          locations: {
            include: {
              amenities: true
            }
          }
        }
      });
    },
    // user: async (args: {email: string}): Promise<Users>=> {
    //   const user = await prisma.users.findUnique({
    //     where: {
    //       email: args.email
    //     },
    //     include: {
    //       role: true,
    //    }
    //   })
    //  if(!user){
    //   throw new Error('User not found')
    //  }
    //   return user
    // }
}