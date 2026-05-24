import Link from 'next/link';

export const metadata = {
  title: 'LA Pilates Certification | Pilates & Mommy',
  description: 'Become a certified Pilates & Mommy instructor. LA-accredited training for maternal wellness specialists worldwide.',
};

const modules = [
  { num: '01', title: 'Foundations of Maternal Anatomy', desc: 'Deep dive into the pregnant and postpartum body — physiology, biomechanics, and structural changes.' },
  { num: '02', title: 'The Pelvic Floor & Core System', desc: 'Comprehensive training on pelvic floor function, assessment, and how to teach safe core work.' },
  { num: '03', title: 'Trimester-by-Trimester Programming', desc: 'Learn to safely modify and progress clients through each stage of pregnancy.' },
  { num: '04', title: 'Postpartum Recovery Protocols', desc: 'Evidence-based return-to-movement timelines, diastasis recti, and C-section recovery.' },
  { num: '05', title: 'Teaching Methodology', desc: 'Cueing, communication, class design, and building a maternal wellness business.' },
  { num: '06', title: 'Business & Brand Building', desc: 'Market your certification, build client trust, and grow a profitable niche practice.' },
];

export default function CertificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1B9E9E 0%, #5BAD8F 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-white/70 font-medium mb-4">For Instructors Worldwide</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'white', lineHeight: 1.1 }}>
            LA Pilates & Mommy<br />
            <em style={{ fontStyle: 'italic' }}>Certification</em>
          </h1>
          <p className="mt-6 text-white/80 font-light max-w-xl mx-auto">
            The only certification that combines LA Pilates methodology with specialized maternal wellness training.
            Teach prenatal and postpartum clients with confidence.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/contact"
              className="px-8 py-4 text-sm font-medium bg-white text-[#1B9E9E] rounded-full hover:shadow-lg transition-all">
              Apply Now
            </Link>
            <a href="#curriculum"
              className="px-8 py-4 text-sm font-medium text-white border border-white/40 rounded-full hover:bg-white/10 transition-all">
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['100%', 'Online Learning'],
              ['6', 'Comprehensive Modules'],
              ['LA', 'Accredited'],
              ['50+', 'Grads & Counting'],
            ].map(([val, label]) => (
              <div key={label} className="p-6">
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 400, color: '#1B9E9E' }}>{val}</p>
                <p className="text-xs text-gray-400 font-light tracking-wide mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-4">Is This For You?</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}
              className="mb-6">
              Built for serious instructors
            </h2>
            <div className="space-y-4">
              {[
                'Certified Pilates instructors who want to specialize in maternal wellness',
                'Personal trainers adding prenatal/postpartum to their offerings',
                'Yoga teachers expanding into Pilates-based movement',
                'Physical therapists seeking a movement-based certification',
                'New instructors who want to launch in a high-demand niche',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs mt-0.5"
                    style={{ background: '#3ECFCF' }}>✓</span>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #E8F8F5, #A8ECEC)' }}>
            <div className="text-5xl mb-6">🎓</div>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 300, color: '#1A1A1A' }}>
              Complete this certification and join a global community of maternal wellness specialists.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-white rounded-full">
              <p className="text-xs text-[#1B9E9E] font-medium tracking-wide">Self-paced · 100% Online · Lifetime Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">What You Will Learn</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}
            className="text-center mb-12">
            Curriculum overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.num} className="rounded-2xl p-8 border border-stone-100 hover:border-[#3ECFCF] transition-colors">
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, color: '#E8F8F5', lineHeight: 1 }}
                  className="mb-2">{m.num}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}
                  className="mb-3">{m.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">Investment</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}
            className="text-center mb-12">
            Choose your path
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Self-Study',
                price: '$497',
                note: 'One-time payment',
                features: ['All 6 modules', 'Video lessons', 'Downloadable resources', 'Digital certificate', 'Community access', ''],
                cta: 'Enroll Now',
                highlight: false,
              },
              {
                name: 'Mentored',
                price: '$897',
                note: 'One-time payment',
                features: ['Everything in Self-Study', '3 live coaching calls', 'Direct instructor feedback', 'Business launch guide', 'Priority community access', 'Certificate of Excellence'],
                cta: 'Apply for Mentored',
                highlight: true,
              },
            ].map((tier) => (
              <div key={tier.name}
                className={`rounded-2xl p-8 ${tier.highlight ? 'border-2 border-[#3ECFCF] shadow-lg' : 'border border-stone-200 bg-white'}`}
                style={tier.highlight ? { background: 'linear-gradient(160deg, #F0FAFA, white)' } : {}}>
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 text-xs rounded-full text-white bg-[#1B9E9E] font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 400 }}>
                  {tier.name}
                </h3>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, color: '#1B9E9E' }}>
                  {tier.price}
                </p>
                <p className="text-xs text-gray-400 mb-6">{tier.note}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.filter(Boolean).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: '#3ECFCF', fontSize: '10px' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block text-center px-6 py-4 text-sm font-medium text-white rounded-full"
                  style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
