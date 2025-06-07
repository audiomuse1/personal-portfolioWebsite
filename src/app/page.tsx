"use client";

// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 mt-16">
      <div className="mb-12 relative">
        <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden">
          <Image
            src="/images/selfPhoto.jpg"
            alt="Andrew Hartford"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="rounded-full"
          />
        </div>
      </div>
<h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Andrew Hartford</h1>
      <p className="text-xl mb-8">I'm a developer in Austin, TX specializing in Next.js, React, and AI-powered apps.</p>
      <nav className="space-x-4">
        <Link href="/about" className="text-emerald-600 hover:underline">
          About Me
        </Link>
        <Link href="/projects" className="text-emerald-600 hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-emerald-600 hover:underline">
          Contact
        </Link>
      </nav>
    </section>
  );
}