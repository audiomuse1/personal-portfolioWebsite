// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h2 className="text-xl font-semibold">My Portfolio</h2>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
