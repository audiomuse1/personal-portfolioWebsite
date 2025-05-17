// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400 mt-auto">
      &copy; {new Date().getFullYear()} Andrew Hartford. All rights reserved.
    </footer>
  );
}