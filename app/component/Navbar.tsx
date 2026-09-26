'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal } from 'lucide-react';

const navItems = [
  { name: 'Overview', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Works', href: '/works' },
  // { name: 'Archive', href: '/archive' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#2a2928]/95 border-b border-[#4a4542]/90">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono text-l text-[#f7f3ef] tracking-[0.12em] uppercase">
          <Terminal className="w-4 h-4 text-[#f7f4f1]" />
          <span>MARIA.ALFARO</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  isActive
                    ? 'bg-[#3f3c39] text-[#f9f5f1] border border-[#5d5753] shadow-inner'
                    : 'text-[#e4ddd7] hover:text-[#ffffff] hover:bg-[#3d3936]/80'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}