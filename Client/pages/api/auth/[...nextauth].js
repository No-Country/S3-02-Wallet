import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials;

        //Call to DB
        if (email !== "john@gmail.com" || password !== "1234") {
          throw new Error("Error in Email or Password");
        }
        //Everything OK, return user credentials
        return { id: "123", name: "John Doe", email: "john@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
