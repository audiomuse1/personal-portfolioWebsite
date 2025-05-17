// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-emerald-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h2 className="text-xl font-semibold">
            <a href="/">My Portfolio</a>
        </h2>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-emerald-200">Home</Link>
          <Link href="/about" className="hover:text-emerald-200">About</Link>
          <Link href="/projects" className="hover:text-emerald-200">Projects</Link>
          <Link href="/contact" className="hover:text-emerald-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
