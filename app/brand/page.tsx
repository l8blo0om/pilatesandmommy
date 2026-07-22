export const metadata = {
  title: 'Brand Fact Sheet | Pilates & Mommy',
  description: 'The canonical facts for anyone writing about Pilates & Mommy.',
  robots: { index: false, follow: false },
};

const facts: { heading: string; items: string[] }[] = [
  {
    heading: 'The Brand',
    items: [
      'Pilates & Mommy — mat-based Pilates for mothers, babies welcome.',
      'No reformers, no machines. Props: puppets, bubbles, and a giant rainbow parachute.',
      'Taglines: “Strong mothers build strong worlds.” · “Bring the baby — we planned on it.”',
    ],
  },
  {
    heading: 'The Founder',
    items: [
      'Dr. Niia Bishop — PhD, Alvin Ailey scholar, NDI-certified dance educator, comprehensive Pilates instructor since 2007.',
      'Created one of the country’s first Mommy & Me Pilates formats in 2009.',
    ],
  },
  {
    heading: 'The Classes (only these two exist)',
    items: [
      'Mommy & Me — THE signature — $40 drop-in — babies 3–12 months — 45 minutes.',
      'Postpartum Restore — $35 drop-in — 6+ weeks postpartum, provider clearance required — 60 minutes.',
      'No prenatal, no power, no private sessions. Do not reference them.',
    ],
  },
  {
    heading: 'Pricing',
    items: [
      '4-Week Session — $120 (reserved weekly spot).',
      '8-Week Session — $220 (best rate).',
      'Monthly Unlimited — $129/month, every group class, every city.',
    ],
  },
  {
    heading: 'Grand Opening — Founding Mamas',
    items: [
      '“Become a Founding Mama. Take your first class for $20 this September, then lock in Unlimited Pilates & Mommy classes for $129 a month for life. Only 12 founding memberships are available in each city.”',
      'Lifetime rate requires membership to remain active.',
      'Always say “$20” — never “half off.”',
    ],
  },
  {
    heading: 'Where & When',
    items: [
      'Columbia · Irmo · Fort Mill · Charlotte · Rock Hill — plus virtual.',
      'Exact venues TBD — do not name specific studios or addresses.',
      'September launch — exact dates TBD, do not invent dates.',
      'Booking: pilatesandmommy.com/classes',
    ],
  },
];

export default function BrandPage() {
  return (
    <section className="py-24 bg-[#F9F8F5] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.25em] uppercase font-medium mb-4 accent">For Collaborators, Writers & Campaigns</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 300, lineHeight: 1.1 }}>
          The facts, and<br /><em style={{ color: '#1B9E9E' }}>only the facts.</em>
        </h1>
        <p className="mt-4 text-gray-500 font-light max-w-lg">
          Everything below is true and current. If it isn&rsquo;t on this page, don&rsquo;t claim it —
          no invented classes, dates, venues, stats, or testimonials. When in doubt, ask Dr. Bishop.
        </p>

        <div className="mt-12 space-y-6">
          {facts.map((f) => (
            <div key={f.heading} className="bg-white rounded-2xl p-8 border border-stone-100 card-glow">
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}
                className="mb-4 text-[#147070]">{f.heading}</h2>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                    <span className="w-4 h-4 mt-0.5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: '#3ECFCF', fontSize: '9px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-400 font-light text-center">
          Last updated July 2026 · This page is the single source of truth for Pilates &amp; Mommy messaging.
        </p>
      </div>
    </section>
  );
}
