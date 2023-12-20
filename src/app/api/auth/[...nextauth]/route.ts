import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: "email"},
        password: { type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })

          const user = await res.json()
          
          if (!res.ok) {
            throw new Error(user.message);
          }

          if (res.ok && user) {
            return user.data
          }

          return null
        } catch (error: any) {
          throw new Error(error);
        }
      },
    })
  ],
  pages: {
    signIn: '/login',
    error: ''
  },
  callbacks: {
    async jwt({ token, user, account }: any) {

      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token;
        
      return session;
    },
  },
})

export { handler as GET, handler as POST }