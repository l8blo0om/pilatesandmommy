import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F5] border-t border-stone-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Pilates & Mommy"
                width={140}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
              Empowering moms through mindful movement. Based in Columbia, SC — serving instructors worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <a key={s} href="#" className="text-xs text-gray-400 hover:text-[#1B9E9E] tracking-wide uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Explore</p>
            {[
              { href: '/classes', label: 'Classes & Booking' },
              { href: '/postpartum', label: 'The Postpartum Body' },
              { href: '/certification', label: 'Get Certified' },
              { href: '/shop', label: 'Shop' },
              { href: '/community', label: 'Community' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="block text-sm text-gray-500 hover:text-[#1B9E9E] font-light py-1">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Connect</p>
            <Link href="/contact"
              className="block text-sm text-gray-500 hover:text-[#1B9E9E] font-light py-1">
              Contact Us
            </Link>
            <Link href="/about"
              className="block text-sm text-gray-500 hover:text-[#1B9E9E] font-light py-1">
              Our Story
            </Link>
            <p className="text-sm text-gray-500 font-light py-1">Columbia, SC</p>
            <Link
              href="/classes"
              className="inline-block mt-4 px-5 py-2.5 text-sm font-medium text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}
            >
              Book a Class
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Pilates & Mommy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
