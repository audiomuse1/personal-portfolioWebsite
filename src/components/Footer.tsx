// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-6 text-center text-sm w-full">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} Andrew Hartford. All rights reserved.
      </div>
    </footer>
  );
}