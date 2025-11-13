import './globals.css';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Streaming Dashboard',
  description: 'Simplified streaming dashboard built with Next.js 14'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        
        <Header />
        <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
