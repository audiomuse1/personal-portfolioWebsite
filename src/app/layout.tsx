// src/app/layout.tsx
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}