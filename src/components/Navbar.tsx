import Link from 'next/link'

export const Navbar = () => (
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
    </div>
  </nav>
)
