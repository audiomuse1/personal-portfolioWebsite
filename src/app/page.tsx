// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Andrew Hartford</h1>
      <p className="text-xl mb-8">I’m a developer specializing in Next.js, React, and AI-powered apps.</p>
      <nav className="space-x-4">
        <Link href="/about" className="text-blue-600 hover:underline">
          About Me
        </Link>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
      </nav>
    </section>
  );
}