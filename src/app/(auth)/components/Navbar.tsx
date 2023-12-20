import Link from 'next/link'

export const Navbar = () => (
  <nav className="container mx-auto flex justify-between items-center h-14">
    <div>
      <Link href="/">
        <p className="text-lg first-letter:text-4xl font-medium first-letter:font-normal text-primary-800 dark:text-primary-200">Lunar</p>
      </Link>
    </div>
    <div className="flex space-x-4">
      <p className="text-sm text-primary-100">Belanja murah hanya di Lunar</p>
    </div>
  </nav>
)
