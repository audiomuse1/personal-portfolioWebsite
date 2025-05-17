// src/app/layout.tsx
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'Andrew Hartford | Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Header />
        <main className="flex-grow pt-16 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}