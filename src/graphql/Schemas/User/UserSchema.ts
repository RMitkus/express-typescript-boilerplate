import { PrismaClient } from '@prisma/client';
import { User } from '../../../Models/UserModel';
const prisma = new PrismaClient();

export const userTypes = `
  type User {
    id: String!
    name: String
    lastName: String
    email: String!
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
`;

export const userQueries = `
    users: [User]
    user(email: String): User
    userLogin(email: String, password: String): User
`;

export const userResolvers = {
	users: async (): Promise<User[]> => {
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
	user: async (args: {email: string}): Promise<User> => {
		const user = await prisma.user.findUnique({
			where: {
				email: args.email
			},
			include: {
				role: true,
				locations: {
					include: {
						amenities: true
					}
				}
			}
		});
		if (!user) {
			throw new Error('User not found');
		}
		return user;
	},
	userLogin: async (args: {email: string, password: string}): Promise<User> => {
		console.log(args.email, args.password);
		const user = await prisma.user.findFirst({
			where: {
				email: args.email,
				password: args.password
			},
			include: {
				role: true,
				locations: {
					include: {
						amenities: true
					}
				}
			}
		});
		if (!user) {
			throw new Error('User not found');
		}
		return user;
	}
};
