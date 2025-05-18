// src/components/Header.tsx
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="bg-emerald-800 text-white py-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h2 className="text-xl font-semibold">
          <Link href="/">Andrew Hartford</Link>
        </h2>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-emerald-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-200 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-emerald-200 transition-colors">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-emerald-200 transition-colors">
            Skills & Services
          </Link>
          <Link href="/resume" className="hover:text-emerald-200 transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-emerald-200 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
