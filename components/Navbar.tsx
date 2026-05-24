'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/postpartum', label: 'The Postpartum Body' },
  { href: '/certification', label: 'Certification' },
  { href: '/shop', label: 'Shop' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Pilates & Mommy"
            width={180}
            height={76}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-light tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-[#1B9E9E] border-b border-[#1B9E9E]'
                  : 'text-gray-600 hover:text-[#1B9E9E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 text-sm font-medium text-white rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-light tracking-wide border-b border-stone-50 ${
                pathname === link.href ? 'text-[#1B9E9E]' : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center px-5 py-3 text-sm font-medium text-white rounded-full"
            style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
