import Link from 'next/link';

export const metadata = {
  title: 'About | Pilates & Mommy',
  description: 'Our story, mission, and the heart behind Pilates & Mommy.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">Our Story</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Born from love,<br /><em style={{ color: '#1B9E9E', fontStyle: 'italic' }}>built for moms.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl h-80 flex items-center justify-center"
            style={{ background: 'linear-gradient(160deg, #A8ECEC, #B2DFD0)' }}>
            <div className="text-center">
              <div className="text-6xl mb-3">🌿</div>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', color: '#1A1A1A', fontWeight: 300 }}>
                Columbia, SC
              </p>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 300 }}
              className="mb-6">
              Meet Dr. Niia Bishop
            </h2>
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Niia Bishop's relationship with movement began early — as a scholarship student at the Alvin Ailey
                School of Dance, she trained in ballet, modern, African, and jazz, before going on to dance
                professionally in companies across Massachusetts and New York.
              </p>
              <p>
                After earning her PhD in Comparative Literature from the University of Michigan — where her academic
                work centered on mindfulness, meditation, and the body — Niia discovered Pilates. What started with
                a DVD at home became a certification in mat and machine Pilates in 2007, and a lifelong calling.
              </p>
              <p>
                In 2009, with the birth of her son Reza, Pilates & Mommy was born. Niia created one of the first
                Mommy & Me Pilates programs in the country, teaching across NYC, Long Island, and Buffalo before
                bringing her work to the South Carolina community she now calls home.
              </p>
              <p>
                Today, Dr. Bishop is a Club Pilates instructor in Forest Acres, SC and an Assistant Professor at
                Allen University — and she remains devoted to helping mothers reconnect with their strength, their
                bodies, and themselves.
              </p>
            </div>
            <Link href="/classes"
              className="inline-block mt-8 px-8 py-4 text-sm font-medium text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">What We Stand For</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300 }}
            className="text-center mb-12">Our values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💚', title: 'Empowerment', desc: 'We believe movement is medicine, and every mom deserves access to it.' },
              { icon: '🌊', title: 'Expertise', desc: 'Every method we teach is rooted in anatomy, evidence, and maternal wellness science.' },
              { icon: '✨', title: 'Excellence', desc: 'From the studio experience to our online programs, luxury is non-negotiable.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-stone-100 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}
                  className="mb-3">{v.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300 }}>
            Ready to move?
          </h2>
          <p className="mt-4 text-gray-500 font-light">Join us in the studio or online — wherever you are in your journey.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/classes"
              className="px-8 py-4 text-sm font-medium text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
              Book a Class
            </Link>
            <Link href="/contact"
              className="px-8 py-4 text-sm font-medium text-[#1B9E9E] border border-[#3ECFCF] rounded-full hover:bg-[#F0FAFA]">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
