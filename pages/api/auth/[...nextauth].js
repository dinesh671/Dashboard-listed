import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';
import * as dotenv from 'dotenv'




export const authOptions = {
  // Configure one or more authentication provider
   
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    
    // ...add more providers here
  ],
  secret: process.env.JWT,

  pages: {
    signIn: '/Login.js',
    signOut: '/Dashboard.js',
  },
};

export default NextAuth(authOptions);
