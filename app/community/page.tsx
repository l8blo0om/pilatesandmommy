import Link from 'next/link';

export const metadata = {
  title: 'Community | Pilates & Mommy',
  description: 'Join the Pilates & Mommy community — a space for moms and instructors to connect, share, and grow.',
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">You Are Not Alone</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            A community<br /><em style={{ color: '#1B9E9E' }}>built on movement</em>
          </h1>
          <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
            Connect with mamas in Columbia, SC and instructors around the world. Share your journey,
            ask questions, and find your people.
          </p>
          <Link href="#join"
            className="inline-block mt-8 px-8 py-4 text-sm font-medium text-white rounded-full"
            style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
            Join the Community
          </Link>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">What We&rsquo;re Building</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 300 }}
            className="text-center mb-10">
            The community, taking shape
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💬', title: 'Members’ Space', desc: 'A place to ask questions, share wins, and support fellow mothers without judgment. In development — early members help shape it.' },
              { icon: '🎓', title: 'Instructor Hub', desc: 'A dedicated space for certified instructors to share resources and grow their practice. Opening with the founding cohort.' },
              { icon: '📅', title: 'Live Sessions', desc: 'Q&As, workshops, and challenges with Dr. Bishop. Rolling out as the community grows.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-stone-100 text-center hover:border-[#3ECFCF] transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}
                  className="mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, fontStyle: 'italic', color: '#1B9E9E', lineHeight: 1.4 }}>
            &ldquo;Mothers are not a niche. When you build something real for them, a community
            doesn&rsquo;t have to be manufactured — it gathers.&rdquo;
          </blockquote>
          <p className="mt-4 text-xs tracking-widest uppercase text-gray-400">Dr. Niia Bishop</p>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300 }}>
            Ready to join us?
          </h2>
          <p className="mt-4 text-gray-500 font-light">
            Community access is free with any class booking or certification enrollment.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="/classes"
              className="block text-center px-6 py-4 text-sm font-medium text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
              Book a Class
            </Link>
            <Link href="/certification"
              className="block text-center px-6 py-4 text-sm font-medium text-[#1B9E9E] border border-[#3ECFCF] rounded-full hover:bg-[#F0FAFA]">
              Get Certified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
