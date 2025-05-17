// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-6 text-center text-sm mt-auto">
      &copy; {new Date().getFullYear()} Andrew Hartford. All rights reserved.
    </footer>
  );
}