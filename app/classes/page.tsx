import { CALENDLY_URL, CALENDLY_EVENTS } from '@/lib/booking';

export const metadata = {
  title: 'Classes & Booking | Pilates & Mommy',
  description: 'Book Mommy & Me Pilates — the signature mat class — in Columbia, Fort Mill, Charlotte, or online.',
};

const classes = [
  {
    title: 'Mommy & Me',
    tag: '★ The Signature · Bring Baby!',
    price: '$40 / class',
    desc: 'A joyful class that welcomes babies 3–12 months. Move your body, bond with your baby, and connect with other mamas.',
    features: ['Baby welcome', 'Community connection', 'Postpartum rebuilding', 'In-studio only'],
    color: '#E8F8F5',
    video: '/videos/class-mommy-me.mp4',
  },
  {
    title: 'Postpartum Restore',
    tag: '6+ Weeks Postpartum',
    price: '$35 / class',
    desc: 'A gentle recovery class to reconnect with your deep core, work with diastasis recti, and rebuild whole-body strength after birth. Movement education — provider clearance required.',
    features: ['Diastasis recti-aware', 'Pelvic floor-informed movement', 'Core reintegration', 'In-studio & virtual'],
    color: '#F0FAFA',
    video: '/videos/class-postpartum.mp4',
  },
  {
    title: 'Corporate & Group',
    tag: 'For Teams',
    price: 'Contact for pricing',
    desc: 'Bring Pilates & Mommy to your workplace or community group. Perfect for prenatal/postnatal employee wellness programs.',
    features: ['Group rates available', 'On-site or virtual', 'Customizable format', 'Contact us to book'],
    color: '#F0FAFA',
    video: '/videos/class-virtual.mp4',
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero — full-bleed class video */}
      <section className="relative py-32 overflow-hidden">
        <video
          src="/videos/classes-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,26,26,0.7), rgba(6,32,32,0.55))' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase font-medium mb-4 accent">Columbia · Fort Mill · Charlotte & Virtual</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1, color: 'white' }}>
            Classes for every<br /><em style={{ color: '#3ECFCF' }}>stage of motherhood</em>
          </h1>
          <p className="mt-6 text-white/75 font-light max-w-lg mx-auto">
            Freshly postpartum or years into motherhood — there is a mat here for you, and your baby is invited.
          </p>
        </div>
      </section>

      {/* Class Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-stone-100 card-glow">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={c.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,32,32,0.25), transparent 50%)' }} />
                </div>
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
                  <a href={CALENDLY_EVENTS[c.title] ?? CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-glow btn-glow--pill block text-center">
                    Book This Class
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passes & Packs */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-center accent">Come More, Pay Less</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300, textAlign: 'center' }}
            className="mb-10">
            Passes &amp; packs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Drop-In', price: '$35–40', note: 'per class', desc: 'Try any class, any city, any time. No commitment — just come move.', highlight: false },
              { name: '4-Class Pack', price: '$120', note: '$30/class · save up to $40', desc: 'Four classes, any mix, any location. Valid 8 weeks. The regular-mama move.', highlight: true },
              { name: 'Monthly Unlimited', price: '$129', note: 'per month', desc: 'Every group class, every city, all month — plus first dibs on new time slots.', highlight: false },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl p-8 text-center card-glow"
                style={{ background: p.highlight ? 'linear-gradient(160deg, #0d4040, #123a3a)' : '#F9F8F5', color: p.highlight ? '#eafafa' : 'inherit', border: p.highlight ? 'none' : '1px solid #eee' }}>
                {p.highlight && (
                  <span className="inline-block px-3 py-1 mb-3 text-xs rounded-full font-semibold uppercase tracking-wider"
                    style={{ background: 'hsl(var(--hue) 70% 52%)', color: '#062020', fontSize: '0.6rem' }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500, color: p.highlight ? 'white' : 'inherit' }}>{p.name}</h3>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.6rem', fontWeight: 300, color: p.highlight ? 'hsl(var(--hue) 80% 68%)' : '#1B9E9E', lineHeight: 1.1 }}>{p.price}</p>
                <p className="text-xs mb-4" style={{ color: p.highlight ? 'rgba(234,250,250,0.6)' : '#aaa' }}>{p.note}</p>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: p.highlight ? 'rgba(234,250,250,0.85)' : '#555' }}>{p.desc}</p>
                <a href="/contact" className="btn-glow btn-glow--pill block text-center">
                  {p.name === 'Drop-In' ? 'Book a Class' : `Get the ${p.name}`}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400 font-light">
            Packs work across all group classes and all locations. Book your spot as usual — we&rsquo;ll check you in.
          </p>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '📍', title: 'Locations', desc: 'Columbia · Fort Mill · Charlotte\nExact address provided on booking confirmation.' },
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
