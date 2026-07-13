import Link from 'next/link';
import Image from 'next/image';
import Marquee from '@/components/Marquee';

const classes = [
  { title: 'Prenatal Pilates', desc: 'Safe, nurturing movement designed for every trimester.', tag: 'In-Studio & Virtual', img: '/images/class-prenatal.png' },
  { title: 'Postpartum Restore', desc: 'Gentle rebuilding from the inside out — core, floor, and beyond.', tag: 'In-Studio & Virtual', img: '/images/class-postpartum.png' },
  { title: 'Mommy & Me', desc: 'Bond with your baby while rebuilding your strength.', tag: 'In-Studio', img: '/images/class-mommy-me.png' },
  { title: 'Power Pilates', desc: 'Full-body mat strength for the mama ready to level up.', tag: 'In-Studio', img: '/images/class-power.png' },
];

// Founder principles — Dr. Niia Bishop's own words (not customer testimonials).
const principles = [
  { text: 'The postpartum body is not broken. It is becoming.' },
  { text: 'A PhD and a warm welcome can exist in the same room.' },
  { text: 'Mothers are not a niche.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background gradient — left side only */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0FAFA] to-[#E8F8F5]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-6">
              Columbia, SC · Worldwide
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#1A1A1A' }}>
              Movement made<br />
              <em style={{ fontStyle: 'italic', color: '#1B9E9E' }}>for mamas.</em>
            </h1>
            <p className="mt-6 text-base text-gray-500 font-light leading-relaxed max-w-md">
              A maternal movement method founded by Dr. Niia Bishop — PhD, dancer, and creator of
              one of the country&rsquo;s first Mommy &amp; Me Pilates formats. Classes practice the
              method. Certification teaches it. Community grows around it.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/classes"
                className="px-8 py-4 text-sm font-medium text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                Book a Class
              </Link>
              <Link href="/certification"
                className="px-8 py-4 text-sm font-medium text-[#1B9E9E] border border-[#3ECFCF] rounded-full hover:bg-[#F0FAFA] transition-all">
                Get Certified
              </Link>
            </div>
            <div className="mt-12 flex gap-10">
              {[['2009', 'Method Founded'], ['PhD', 'Founder-Led'], ['6', 'Certification Modules']].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#1B9E9E' }}>{num}</p>
                  <p className="text-xs text-gray-400 font-light tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — full column */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* Logo mark */}
            <div className="flex justify-center">
              <div className="relative" style={{ padding: '5px', borderRadius: '22px', background: 'linear-gradient(135deg, #3ECFCF, #5BAD8F)' }}>
                <div className="relative overflow-hidden bg-white" style={{ borderRadius: '17px', width: '120px', height: '120px' }}>
                  <Image
                    src="/logo-icon-white-bg.png"
                    alt="Pilates & Mommy"
                    fill
                    className="object-cover scale-[1.08]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Hero video */}
            <div className="relative overflow-hidden" style={{ borderRadius: '24px', height: '420px' }}>
              <video
                src="/videos/0f70b6ba-32df-4738-a1bd-5948040545c6.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,158,158,0.4) 0%, transparent 60%)' }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 300, color: 'white', lineHeight: 1.3 }}
                  className="italic">
                  &ldquo;Your body grew a human.<br />Let us help it thrive.&rdquo;
                </p>
                <p className="mt-1 text-xs text-white/60 tracking-widest uppercase">Pilates & Mommy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND TAPE */}
      <Marquee />

      {/* BRAND PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100 border border-stone-100 rounded-2xl overflow-hidden">
            {[
              { icon: '🧘‍♀️', title: 'Classes', sub: 'Book in-studio or virtual', href: '/classes' },
              { icon: '🏆', title: 'Certify', sub: 'Pilates & Mommy worldwide', href: '/certification' },
              { icon: '🛍️', title: 'Shop', sub: 'Curated wellness goods', href: '/shop' },
              { icon: '💬', title: 'Community', sub: 'Moms supporting moms', href: '/community' },
            ].map((p) => (
              <Link key={p.title} href={p.href}
                className="bg-white p-8 flex flex-col items-center text-center hover:bg-[#F0FAFA] transition-colors group">
                <span className="text-3xl mb-3">{p.icon}</span>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}
                  className="group-hover:text-[#1B9E9E] transition-colors">{p.title}</p>
                <p className="text-xs text-gray-400 font-light mt-1">{p.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES PREVIEW */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2">Move With Us</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
                Classes for every stage
              </h2>
            </div>
            <Link href="/classes" className="text-sm text-[#1B9E9E] border-b border-[#1B9E9E] pb-0.5 hover:opacity-70 whitespace-nowrap">
              View all classes →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(27,158,158,0.1), rgba(91,173,143,0.25))' }} />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white font-medium"
                    style={{ background: 'rgba(27,158,158,0.85)', backdropFilter: 'blur(4px)' }}>
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}
                    className="mb-2 group-hover:text-[#1B9E9E] transition-colors">{c.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSTPARTUM SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl h-80 lg:h-96 overflow-hidden">
              <Image
                src="/images/postpartum-spotlight.png"
                alt="Postpartum wellness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,107,107,0.45), rgba(91,173,143,0.35))' }} />
              <div className="absolute inset-0 flex items-end p-8">
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 300, color: 'white', lineHeight: 1.3 }}>
                  The postpartum body is not broken.<br /><em>It is becoming.</em>
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-4">Education</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.2 }}>
                Understanding your postpartum body
              </h2>
              <p className="mt-4 text-gray-500 font-light leading-relaxed">
                Diastasis recti, pelvic floor dysfunction, hormonal shifts — navigating the postpartum body
                can feel overwhelming. We break it down honestly and show you how thoughtful movement supports recovery.
              </p>
              <ul className="mt-6 space-y-3">
                {['Diastasis recti & core recovery', 'Pelvic floor-informed movement', 'Hormonal changes & body image', 'When to start — and what to avoid'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                      style={{ background: '#3ECFCF' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/postpartum"
                className="inline-block mt-8 px-8 py-4 text-sm font-medium text-white rounded-full"
                style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION BANNER */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1B9E9E, #5BAD8F)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-white/70 font-medium mb-4">For Instructors Worldwide</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'white', lineHeight: 1.1 }}>
            Become a certified<br /><em>Pilates & Mommy instructor</em>
          </h2>
          <p className="mt-4 text-white/80 font-light max-w-lg mx-auto">
            Our certification is designed for instructors who want to specialize in maternal wellness.
            Train online. Teach with confidence. Change lives.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/certification"
              className="px-8 py-4 text-sm font-medium bg-white text-[#1B9E9E] rounded-full hover:shadow-lg transition-all">
              View Certification →
            </Link>
            <Link href="/contact"
              className="px-8 py-4 text-sm font-medium text-white border border-white/40 rounded-full hover:bg-white/10 transition-all">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER PRINCIPLES */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">What We Believe</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center' }}
            className="mb-12">
            The ideas the method is built on
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.text} className="bg-white rounded-2xl p-8 border border-stone-100">
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }} className="text-xl text-gray-700 font-light leading-snug italic">
                  &ldquo;{p.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400 font-light">
            Written by Dr. Niia Bishop. Client stories coming soon.
          </p>
        </div>
      </section>

      {/* VIDEO REEL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">In Motion</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center' }}
            className="mb-12">
            See what we do
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              '0f70b6ba-32df-4738-a1bd-5948040545c6',
              '39baef77-b256-4892-95e9-027560b0667b',
              '6d0aaddc-767d-4797-879c-72d197e52b51',
              '948d4fbc-a1e6-442e-b11a-ae054f59b044',
            ].map((id) => (
              <div key={id} className="relative overflow-hidden rounded-2xl aspect-[9/16] bg-stone-100">
                <video
                  src={`/videos/${id}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,158,158,0.25), transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-4">Join the Community</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300 }}>
            You deserve a community<br />that moves with you.
          </h2>
          <p className="mt-4 text-gray-500 font-light">
            Sign up for wellness tips, class updates, and exclusive offers.
          </p>
          <form className="mt-8 flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm border border-stone-200 rounded-full outline-none focus:border-[#3ECFCF] transition-colors"
            />
            <button type="submit"
              className="px-6 py-3 text-sm font-medium text-white rounded-full whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
              Join
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
