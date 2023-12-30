import Link from 'next/link'
import { signOut } from 'next-auth/react'

export const Navbar = () => {
  const handleSignOut = () => {
    signOut({ redirect: false })
  }
  return (
  <nav>
    <div className="flex space-x-4">
      <Link href="/">
        <span>Home</span>
      </Link>

      <Link href="/login">
        <span>Login</span>
      </Link>

      <Link href="/register">
        <span>Register</span>
      </Link>

      <span onClick={handleSignOut}>Logout</span>
    </div>
  </nav>
  )
}
