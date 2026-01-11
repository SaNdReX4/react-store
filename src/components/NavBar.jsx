import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-around bg-white p-4 shadow-md rounded-lg mx-4 mt-4">
      <Link href="/" className="text-blue-600 font-medium hover:underline">
        Home
      </Link>
      
      <Link href="/cart" className="text-gray-600 hover:text-blue-600 font-medium hover:underline">
        Cart
      </Link>
      <Link href="/profile" className="text-gray-600 hover:text-blue-600 font-medium hover:underline">
        Account
      </Link>
      
    </nav>
  );
}