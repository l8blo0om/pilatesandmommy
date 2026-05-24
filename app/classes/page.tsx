import Link from 'next/link';

export const metadata = {
  title: 'Classes & Booking | Pilates & Mommy',
  description: 'Book prenatal, postpartum, and mommy pilates classes in Columbia, SC or online.',
};

const classes = [
  {
    title: 'Prenatal Pilates',
    tag: 'All Trimesters',
    price: '$35 / class',
    desc: 'A safe, nurturing class designed specifically for each trimester. Focuses on breath, core support, pelvic stability, and preparing the body for birth.',
    features: ['Core & pelvic support', 'Breath & relaxation', 'Labor prep movements', 'In-studio & virtual'],
    color: '#E8F8F5',
  },
  {
    title: 'Postpartum Restore',
    tag: '6+ Weeks Postpartum',
    price: '$35 / class',
    desc: 'A gentle, evidence-based recovery class to reconnect with your core, heal diastasis recti, and rebuild whole-body strength after birth.',
    features: ['Diastasis recti focus', 'Pelvic floor rehab', 'Core reintegration', 'In-studio & virtual'],
    color: '#F0FAFA',
  },
  {
    title: 'Mommy & Me',
    tag: 'Bring Baby!',
    price: '$40 / class',
    desc: 'A joyful class that welcomes babies 3–12 months. Move your body, bond with your baby, and connect with other mamas.',
    features: ['Baby welcome', 'Community connection', 'Postpartum rebuilding', 'In-studio only'],
    color: '#E8F8F5',
  },
  {
    title: 'Power Pilates',
    tag: 'All Levels',
    price: '$40 / class',
    desc: 'Intermediate reformer and mat work for mamas who are ready to build serious strength, flexibility, and tone.',
    features: ['Reformer work', 'Full-body strength', 'Flexibility & balance', 'In-studio & virtual'],
    color: '#F0FAFA',
  },
  {
    title: 'Private Sessions',
    tag: 'Personalized',
    price: 'From $95',
    desc: 'One-on-one sessions tailored entirely to your body, goals, and stage of motherhood. The ultimate personalized experience.',
    features: ['Custom programming', '1-on-1 with instructor', 'Any stage welcome', 'In-studio & virtual'],
    color: '#E8F8F5',
  },
  {
    title: 'Corporate & Group',
    tag: 'For Teams',
    price: 'Contact for pricing',
    desc: 'Bring Pilates & Mommy to your workplace or community group. Perfect for prenatal/postnatal employee wellness programs.',
    features: ['Group rates available', 'On-site or virtual', 'Customizable format', 'Contact us to book'],
    color: '#F0FAFA',
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">Columbia, SC & Virtual</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Classes for every<br /><em style={{ color: '#1B9E9E' }}>stage of motherhood</em>
          </h1>
          <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
            Whether you are newly pregnant, freshly postpartum, or years into motherhood — there is a class here for you.
          </p>
        </div>
      </section>

      {/* Class Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="p-8" style={{ background: c.color }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 text-xs rounded-full text-[#1B9E9E] bg-white font-medium">
                      {c.tag}
                    </span>
                    <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', color: '#1B9E9E' }}>
                      {c.price}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 500 }}
                    className="mb-3">{c.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{c.desc}</p>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-2 mb-6">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500 font-light">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                          style={{ background: '#3ECFCF', fontSize: '10px' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="block text-center px-6 py-3 text-sm font-medium text-white rounded-full"
                    style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                    Book This Class
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '📍', title: 'Studio Location', desc: 'Columbia, SC\nAddress provided on booking confirmation.' },
              { icon: '💻', title: 'Virtual Classes', desc: 'Join from anywhere via Zoom link sent upon booking.' },
              { icon: '📱', title: 'Easy Booking', desc: 'Book online, via email, or call/text to reserve your spot.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-stone-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 500 }}
                  className="mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
