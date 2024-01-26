import { DefaultSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth"
import prisma from "./prisma";




declare module 'next-auth'{
    interface Session extends DefaultSession{
        user:{
            id:string
            username:string
            
        }& DefaultSession['user']
    }
}

interface User {
    username:string
}


export const authOptions: NextAuthOptions = {
    callbacks:{
    session:({session, user}) => {
        return {
            ...session,
            user:{
                ...session.user,
                id:user.id,
                username:user.name
            }
        }
    }
    },


    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
      ],
}

export const getServerAuthSession = () => getServerSession(authOptions)

//