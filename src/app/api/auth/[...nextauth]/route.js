import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "you@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          }).then(res => res.json());

          if (user && user.token) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              token: user.token
            };
          }
          return null;
        }
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          token.token = user.token;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        session.user.token = token.token;
        return session;
      }
    }
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);