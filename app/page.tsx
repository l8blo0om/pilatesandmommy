import Link from 'next/link';
import Image from 'next/image';

const classes = [
  { title: 'Prenatal Pilates', desc: 'Safe, nurturing movement designed for every trimester.', tag: 'In-Studio & Virtual' },
  { title: 'Postpartum Restore', desc: 'Gentle rebuilding from the inside out — core, floor, and beyond.', tag: 'In-Studio & Virtual' },
  { title: 'Mommy & Me', desc: 'Bond with your baby while rebuilding your strength.', tag: 'In-Studio' },
  { title: 'Power Pilates', desc: 'Full-body reformer work for the mama ready to level up.', tag: 'In-Studio' },
];

const testimonials = [
  { name: 'Jasmine T.', text: 'I found my body again after having my second baby. This place changed everything for me.' },
  { name: 'Renee M.', text: 'The postpartum classes were exactly what I needed. I felt seen and supported from day one.' },
  { name: 'Coach Aisha W.', text: 'The LA Certification program was world-class. I am now teaching with so much more confidence.' },
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
              Pilates & Mommy is a luxury wellness brand for mothers at every stage — from bump to beyond.
              Classes, community, a curated shop, and world-class certification for instructors.
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
              {[['500+', 'Moms Served'], ['15+', 'Class Types'], ['50+', 'Certified Instructors']].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#1B9E9E' }}>{num}</p>
                  <p className="text-xs text-gray-400 font-light tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — full column */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Modern frame */}
            <div className="relative" style={{ padding: '6px', borderRadius: '28px', background: 'linear-gradient(135deg, #3ECFCF, #5BAD8F)' }}>
              {/* Inner white frame */}
              <div className="relative overflow-hidden bg-white" style={{ borderRadius: '22px', height: '500px' }}>
                <Image
                  src="/logo-icon-white-bg.png"
                  alt="Pilates & Mommy"
                  fill
                  className="object-cover scale-[1.08]"
                  priority
                />
                {/* Subtle corner accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #3ECFCF, #5BAD8F)' }} />
              </div>
            </div>
            {/* Quote below */}
            <div className="text-center">
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', color: '#1A1A1A', fontWeight: 300 }}
                className="leading-snug italic">
                &ldquo;Your body grew a human. Let us help it thrive.&rdquo;
              </p>
              <p className="mt-2 text-xs text-gray-400 tracking-widest uppercase">Pilates & Mommy</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100 border border-stone-100 rounded-2xl overflow-hidden">
            {[
              { icon: '🧘‍♀️', title: 'Classes', sub: 'Book in-studio or virtual', href: '/classes' },
              { icon: '🏆', title: 'Certify', sub: 'LA Pilates worldwide', href: '/certification' },
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
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-md transition-shadow group">
                <span className="inline-block px-3 py-1 text-xs rounded-full text-[#1B9E9E] bg-[#E8F8F5] font-medium mb-4">
                  {c.tag}
                </span>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}
                  className="mb-2 group-hover:text-[#1B9E9E] transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSTPARTUM SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl h-80 lg:h-96 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #E8F8F5, #A8ECEC)' }}>
              <div className="text-center px-8">
                <div className="text-6xl mb-4">🌸</div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 300, color: '#1A1A1A' }}>
                  The postpartum body is not broken.<br />It is becoming.
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
                can feel overwhelming. We break it all down and show you exactly how Pilates helps you heal.
              </p>
              <ul className="mt-6 space-y-3">
                {['Diastasis recti & core recovery', 'Pelvic floor rehab through movement', 'Hormonal changes & body image', 'When to start — and what to avoid'].map((item) => (
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
            Our LA-accredited certification is designed for instructors who want to specialize in maternal wellness.
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">Kind Words</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center' }}
            className="mb-12">
            Moms &amp; instructors love us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-stone-100">
                <p className="text-gray-600 font-light leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-6 text-sm font-medium text-[#1B9E9E]">— {t.name}</p>
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
