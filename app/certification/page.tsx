import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Pilates & Mommy Certification — Become a Maternal Wellness Specialist',
  description: 'A maternal movement Pilates specialization developed by Dr. Niia Bishop. Train online. Teach with authority. Change careers.',
  openGraph: {
    title: 'Pilates & Mommy Certification',
    description: 'Train online with Dr. Niia Bishop. Specialize in prenatal and postpartum Pilates.',
    images: [{ url: '/logo-icon-pink-bg.png', width: 1024, height: 1024, alt: 'Pilates & Mommy — felted kangaroo and joey logo' }],
  },
};

const modules = [
  { num: '01', title: 'Foundations of Maternal Anatomy', desc: 'The pregnant and postpartum body — physiology, biomechanics, and structural changes across trimesters.' },
  { num: '02', title: 'The Pelvic Floor & Core System', desc: 'Comprehensive training on pelvic floor function, assessment, and how to teach safe, effective core work.' },
  { num: '03', title: 'Trimester-by-Trimester Programming', desc: 'Safely modify and progress clients through each stage of pregnancy with evidence-based protocols.' },
  { num: '04', title: 'Postpartum Recovery Protocols', desc: 'Return-to-movement timelines, diastasis recti, C-section recovery, and hormonal considerations.' },
  { num: '05', title: 'Teaching Methodology', desc: 'Cueing, communication, class design, and the art of holding space for mothers in transition.' },
  { num: '06', title: 'Business & Brand Building', desc: 'Market your niche, build client trust, price your services, and grow a profitable maternal wellness practice.' },
];

export default function CertificationPage() {
  return (
    <>
      {/* HERO — full page, dark, cinematic */}
      <section style={{ minHeight: '94vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>

        {/* Hero image */}
        <Image
          src="/images/cert-hero-park.jpg"
          alt="Pilates & Mommy Certification"
          fill
          className="object-cover"
          priority
        />

        {/* Dark vignette for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 5rem', width: '100%' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: '1.25rem' }}>
            For Instructors Worldwide
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            The certification that<br />
            <em style={{ fontStyle: 'italic', color: '#3ECFCF' }}>changes how you teach.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.75, maxWidth: '560px', marginBottom: '2.5rem' }}>
            A maternal movement specialization — prenatal, postpartum, pelvic floor, and beyond —
            developed from two decades of Pilates, dance education, and embodied teaching.
            Train online with Dr. Niia Bishop. Teach with authority. Build the practice you imagined.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-glow btn-glow--pill">
              Apply Now
            </Link>
            <a href="#curriculum" style={{
              display: 'inline-block', padding: '1.1rem 2.75rem',
              fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.06em',
              color: 'white', border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '9999px', textDecoration: 'none',
              backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.08)',
            }}>
              See Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* TAUGHT BY */}
      <section style={{ background: '#0d1f1f', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

          {/* Instructor portrait */}
          <div style={{
            borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', position: 'relative',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: '1.5rem',
          }}>
            <Image src="/images/niia-portrait.png" alt="Dr. Niia Bishop" fill className="object-cover" />
            <div style={{ position: 'relative', width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.35)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontWeight: 400, color: 'white', marginBottom: '0.2rem' }}>
                Dr. Niia Bishop
              </p>
              <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.8 }}>
                PhD · Alvin Ailey Scholar · NDI Certified<br />Comprehensive Pilates Instructor
              </p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#3ECFCF', fontWeight: 500, marginBottom: '1rem' }}>
              Taught by
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, color: 'white', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Dr. Niia Bishop
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.8 }}>
                A scholarship dancer, PhD, and the creator of Mamilates — one of the first
                Mommy & Me Pilates formats in the country — Dr. Bishop built this curriculum
                from lived experience, academic rigor, and two decades in maternal movement.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.8 }}>
                She doesn't teach what she read. She teaches what she discovered when
                Pilates healed the injury that years of professional dance left behind.
              </p>
            </div>
            <Link href="/about" style={{
              display: 'inline-block', marginTop: '1.5rem',
              fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#3ECFCF', textDecoration: 'none', borderBottom: '1px solid rgba(62,207,207,0.35)',
              paddingBottom: '2px',
            }}>
              Full credentials →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'white', padding: '4rem 1.5rem', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            ['100%', 'Online & Self-Paced'],
            ['6', 'Core Modules'],
            ['PhD', 'Founder-Designed'],
            ['Lifetime', 'Content Access'],
          ].map(([val, label]) => (
            <div key={label}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 400, color: '#1B9E9E', lineHeight: 1 }}>{val}</p>
              <p style={{ fontSize: '0.65rem', color: '#aaa', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem', lineHeight: 1.5 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: '#F9F8F5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem' }}>
            Is This For You?
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '2.5rem' }}>
            Built for serious instructors<br />ready to specialize.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              'Certified Pilates instructors adding a maternal wellness specialty',
              'Personal trainers expanding into prenatal and postpartum work',
              'Yoga teachers building Pilates-based movement offerings',
              'Physical therapists seeking a movement-based clinical complement',
              'New instructors launching directly into a high-demand niche',
              'Doulas and birth workers adding embodied movement to their practice',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: '#3ECFCF', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', color: 'white', marginTop: '2px',
                }}>✓</span>
                <p style={{ fontSize: '0.88rem', color: '#555', fontWeight: 300, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
            What You Will Learn
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: '3rem' }}>
            Curriculum overview
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {modules.map((m) => (
              <div key={m.num} className="card-glow" style={{ borderRadius: '16px', padding: '2rem', border: '1px solid #eee', background: '#F9F8F5' }}>
                <p className="accent" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3.5rem', fontWeight: 400, lineHeight: 1, marginBottom: '0.5rem', opacity: 0.85 }}>
                  {m.num}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: '#888', fontWeight: 300, lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION IMAGE SECTION */}
      <section style={{ background: '#F9F8F5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

            {/* Tall left image */}
            <div style={{ borderRadius: '20px', aspectRatio: '3/4', gridRow: 'span 2', position: 'relative', overflow: 'hidden' }}>
              <Image src="/images/cert-editorial-tall.png" alt="Pilates instructor teaching" fill className="object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 300, color: 'white', lineHeight: 1.3 }}>
                  <em>Teaching changes when you understand the body completely.</em>
                </p>
              </div>
            </div>

            {/* Study image */}
            <div style={{ borderRadius: '20px', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
              <Image src="/images/cert-study.png" alt="Online certification study" fill className="object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', fontWeight: 300, color: 'white', lineHeight: 1.3 }}>
                  Online. Self-paced. Yours.
                </p>
              </div>
            </div>

            {/* Community image */}
            <div style={{ borderRadius: '20px', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
              <Image src="/images/cert-community.png" alt="Community of certified instructors" fill className="object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', fontWeight: 300, color: 'white', lineHeight: 1.3 }}>
                  Learn alongside the founding cohort.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDING COHORT */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem' }}>
            Founding Cohort
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
            Be among the first to teach the method
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>
            This certification is newly open for enrollment. That means you won&rsquo;t find a wall of
            testimonials here yet — you&rsquo;ll find something rarer: direct access to Dr. Bishop as
            she trains her founding group of maternal movement specialists. Your work becomes the
            first chapter of this method&rsquo;s story.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block', padding: '1.1rem 2.75rem',
            fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em',
            color: 'white', background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)',
            borderRadius: '9999px', textDecoration: 'none',
          }}>
            Ask About the Founding Cohort
          </Link>
        </div>
      </section>

      {/* PRICING — three-rung ladder: learn it → learn it with a coach → get the whole business */}
      <section style={{ background: '#F9F8F5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
            Three ways in
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: '0.75rem' }}>
            Learn it. Teach it. Own it.
          </h2>
          <p style={{ textAlign: 'center', color: '#888', fontWeight: 300, fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 3rem' }}>
            Start with the method, or skip straight to the whole business — delivered to your door.
          </p>
          <div className="pricing-grid">
            {[
              {
                name: 'Self-Study',
                price: '$497',
                note: 'One-time · Lifetime access',
                features: ['All 6 modules', 'Video lessons', 'Downloadable resources', 'Digital certificate', 'Community access'],
                cta: 'Enroll Now',
                flagship: false,
              },
              {
                name: 'Mentored',
                price: '$897',
                note: 'One-time · Lifetime access',
                features: ['Everything in Self-Study', '3 live coaching calls', 'Direct instructor feedback', 'Business launch guide', 'Certificate of Excellence'],
                cta: 'Apply for Mentored',
                flagship: false,
                badge: 'Most Popular',
              },
              {
                name: 'The Pouch',
                price: 'From $2,900',
                note: 'One-time + $79/mo · your whole business, delivered',
                features: [
                  'Full certification included',
                  'The kit — puppets, bubbles & a giant parachute',
                  'Branded merch — hoodie, tee & hat',
                  'Everything ships in branded bags',
                  'Car magnet + yard sign',
                  'Print-ready marketing + a starter set we print for you',
                  'Your classes listed on pilatesandmommy.com',
                  'AI business assistant + monthly music drops',
                ],
                cta: 'Claim Your Pouch',
                flagship: true,
                badge: 'Everything, delivered',
              },
            ].map((tier) => (
              <div key={tier.name} className={tier.flagship ? 'price-card price-card--flagship' : 'price-card'} style={{
                borderRadius: '20px', padding: '2.5rem', position: 'relative',
                border: tier.flagship ? '2px solid transparent' : (tier.badge ? '2px solid #3ECFCF' : '1px solid #e5e5e5'),
                background: tier.flagship ? 'linear-gradient(160deg, #0d4040, #123a3a)' : 'white',
                color: tier.flagship ? '#eafafa' : 'inherit',
                boxShadow: tier.flagship ? '0 0 0 1.5px hsl(var(--hue) 80% 55%), 0 12px 40px rgba(13,64,64,0.35)' : 'none',
              }}>
                {tier.badge && (
                  <span style={{
                    display: 'inline-block', padding: '0.25rem 0.75rem',
                    fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: tier.flagship ? 'hsl(var(--hue) 70% 52%)' : '#1B9E9E',
                    color: tier.flagship ? '#062020' : 'white', borderRadius: '9999px',
                    fontWeight: 600, marginBottom: '1rem',
                  }}>
                    {tier.badge}
                  </span>
                )}
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 400, marginBottom: '0.25rem', color: tier.flagship ? 'white' : 'inherit' }}>{tier.name}</h3>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: tier.flagship ? '2.4rem' : '3rem', fontWeight: 300, color: tier.flagship ? 'hsl(var(--hue) 80% 68%)' : '#1B9E9E', lineHeight: 1.1 }}>{tier.price}</p>
                <p style={{ fontSize: '0.7rem', color: tier.flagship ? 'rgba(234,250,250,0.55)' : '#aaa', fontWeight: 300, marginBottom: '1.5rem', marginTop: '0.25rem' }}>{tier.note}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: tier.flagship ? 'rgba(234,250,250,0.85)' : '#555', fontWeight: 300 }}>
                      <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: tier.flagship ? 'hsl(var(--hue) 70% 52%)' : '#3ECFCF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: tier.flagship ? '#062020' : 'white' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={tier.flagship ? undefined : 'btn-glow btn-glow--pill'}
                  style={tier.flagship ? {
                    display: 'block', textAlign: 'center', padding: '1rem',
                    fontSize: '0.8rem', fontWeight: 600, color: '#062020', borderRadius: '9999px',
                    background: 'hsl(var(--hue) 75% 58%)',
                    textDecoration: 'none', letterSpacing: '0.04em',
                  } : { display: 'block', textAlign: 'center' }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#aaa', fontSize: '0.75rem', fontWeight: 300, marginTop: '2rem' }}>
            The Pouch includes your certification — no need to buy it separately.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#062020', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 300, color: 'white', lineHeight: 1.15, marginBottom: '1rem',
          }}>
            The mothers you teach<br />
            <em style={{ color: '#3ECFCF', fontStyle: 'italic' }}>deserve a specialist.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Train with Dr. Niia Bishop — two decades of Pilates, dance education, and a PhD.<br />
            Teach with the authority that comes from real knowledge.
          </p>
          <Link href="/contact" className="btn-glow btn-glow--pill">
            Apply Now
          </Link>
          <p style={{ marginTop: '1.25rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Questions? <Link href="/contact" style={{ color: 'rgba(62,207,207,0.6)', textDecoration: 'none' }}>Contact us →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
