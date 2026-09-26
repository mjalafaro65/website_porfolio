import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './component/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Maria Alfaro — Systems & Backend Architecture Lab',
  description: 'NJIT BS/MS CS. Relational data design, Spring/Flask services, RAG pipelines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} ${display.variable} min-h-screen bg-[#F7F4F0] text-[#2D173B] font-sans selection:bg-[#C85D2F]/20 selection:text-[#8A71AC] antialiased`}>
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,93,47,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(17,17,17,0.06),_transparent_36%)]" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-90" />

        <Navbar />
        <main className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 py-16 sm:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}