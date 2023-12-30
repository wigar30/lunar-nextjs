import { ofetch } from 'ofetch'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      async authorize(credentials, req) {
        try {
          const res = await ofetch('/v1/auth/login', {
            baseURL: process.env.NEXT_PUBLIC_API,
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          })

          if (res) {
            return res.data
          }

          return null
        } catch (error: any) {
          throw new Error(error.data.error.message || error || 'something went wrong :(')
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '',
    // signOut: '/login'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log(baseUrl, url)
      if (url === '/login') {
        return `${baseUrl}/login`
      }
      return `${baseUrl}`
    },
    async jwt({ token, user, account }: any) {
      return { ...token, ...user }
    },
    async session({ session, token, user }: any) {
      session = {
        token,
        user
      }

      return session
    }
  }
})

export { handler as GET, handler as POST }
