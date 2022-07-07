import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const postTypes = `
  type Post {
    id: String!
    title: String
    content: String
  }
`

export const postQueries = `
    posts: [Post]
    post(title: String): Post
`

export const postResolvers = {
  // users: async (): Promise<Users[]> => {
  //     return await prisma.users.findMany();
  // },
  // user: async (args: {email: string}): Promise<Users>=> {
  //   const user = await prisma.users.findUnique({
  //     where: {
  //       email: args.email
  //     }
  //   })
  //   if(!user){
  //   throw new Error('User not found')
  //   }
  //   return user
  // }
}