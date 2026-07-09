import Link from 'next/link';

export const metadata = {
  title: 'Pilates & Mommy Certification — Become a Maternal Wellness Specialist',
  description: 'The only Pilates certification built specifically for maternal wellness. Train online. Teach with authority. Change careers.',
  openGraph: {
    title: 'Pilates & Mommy Certification',
    description: 'Train online with Dr. Niia Bishop. Specialize in prenatal and postpartum Pilates.',
    images: [{ url: '/certification-thumbnail.jpg', width: 1200, height: 630, alt: 'Pilates & Mommy Certification' }],
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

const testimonials = [
  { name: 'Maya R.', role: 'Pilates Instructor, Atlanta GA', quote: 'This certification gave me the confidence to work with postpartum clients I was previously afraid to touch. It filled every gap my general training left.' },
  { name: 'Daniela C.', role: 'Personal Trainer, Miami FL', quote: 'I launched a prenatal program within 30 days of completing the course. My waitlist is already full.' },
  { name: 'Priya S.', role: 'Yoga Teacher, NYC', quote: "Dr. Bishop's approach is rigorous and warm at the same time. It feels like the certification she always wished existed." },
];

export default function CertificationPage() {
  return (
    <>
      {/* HERO — full page, dark, cinematic */}
      <section style={{ minHeight: '94vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }}>

        {/* Hero image placeholder */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #062020 0%, #0d4040 35%, #1B9E9E 70%, #5BAD8F 100%)',
        }} />

        {/* Placeholder slot — swap this div for a real <video> or <Image> */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.07,
        }}>
          <p style={{ color: 'white', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Hero image / video · 1920 × 1080
          </p>
        </div>

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
            The only Pilates certification built specifically for maternal wellness —
            prenatal, postpartum, pelvic floor, and beyond. Train online with Dr. Niia Bishop.
            Teach with authority. Build the practice you imagined.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-block', padding: '1.1rem 2.75rem',
              fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em',
              color: '#0d4040', background: 'white', borderRadius: '9999px',
              textDecoration: 'none', transition: 'box-shadow 0.2s',
            }}>
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

          {/* Photo placeholder */}
          <div style={{
            borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5',
            background: 'linear-gradient(160deg, #1B9E9E, #5BAD8F)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
            padding: '1.5rem',
          }}>
            <div style={{ width: '100%', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15 }}>
              <p style={{ color: 'white', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                Instructor portrait<br />4 : 5 ratio
              </p>
            </div>
            <div style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.35)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}>
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
            ['50+', 'Certified Graduates'],
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
              <div key={m.num} style={{ borderRadius: '16px', padding: '2rem', border: '1px solid #eee', transition: 'border-color 0.2s' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3.5rem', fontWeight: 300, color: '#f0f0f0', lineHeight: 1, marginBottom: '0.5rem' }}>
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

            {/* Large image placeholder */}
            <div style={{
              borderRadius: '20px', aspectRatio: '3/4', gridRow: 'span 2',
              background: 'linear-gradient(160deg, #1B9E9E, #0d6b6b)',
              display: 'flex', alignItems: 'flex-end', padding: '1.5rem',
            }}>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 300, color: 'white', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                  <em>Teaching changes<br />when you understand<br />the body completely.</em>
                </p>
                <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Photo · 3:4
                </p>
              </div>
            </div>

            {/* Small image placeholder 1 */}
            <div style={{
              borderRadius: '20px', aspectRatio: '4/3',
              background: 'linear-gradient(135deg, #3ECFCF, #5BAD8F)',
              display: 'flex', alignItems: 'flex-end', padding: '1.25rem',
            }}>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', fontWeight: 300, color: 'white', lineHeight: 1.3, marginBottom: '0.3rem' }}>
                  Online. Self-paced. Yours.
                </p>
                <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Photo · 4:3</p>
              </div>
            </div>

            {/* Small image placeholder 2 */}
            <div style={{
              borderRadius: '20px', aspectRatio: '4/3',
              background: 'linear-gradient(135deg, #5BAD8F, #1B9E9E)',
              display: 'flex', alignItems: 'flex-end', padding: '1.25rem',
            }}>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', fontWeight: 300, color: 'white', lineHeight: 1.3, marginBottom: '0.3rem' }}>
                  Join 50+ graduates worldwide.
                </p>
                <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Photo · 4:3</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
            From Graduates
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: '3rem' }}>
            What certified instructors say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ borderRadius: '16px', padding: '2rem', border: '1px solid #eee' }}>

                {/* Testimonial image placeholder */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', marginBottom: '1.25rem',
                  background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)',
                }} />

                <p style={{ fontSize: '0.9rem', color: '#444', fontWeight: 300, lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1B9E9E' }}>{t.name}</p>
                <p style={{ fontSize: '0.7rem', color: '#aaa', fontWeight: 300, marginTop: '0.2rem' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: '#F9F8F5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B9E9E', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>
            Investment
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: '3rem' }}>
            Choose your path
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              {
                name: 'Self-Study',
                price: '$497',
                note: 'One-time payment · Lifetime access',
                features: ['All 6 modules', 'Video lessons', 'Downloadable resources', 'Digital certificate', 'Community access'],
                cta: 'Enroll Now',
                highlight: false,
              },
              {
                name: 'Mentored',
                price: '$897',
                note: 'One-time payment · Lifetime access',
                features: ['Everything in Self-Study', '3 live coaching calls', 'Direct instructor feedback', 'Business launch guide', 'Certificate of Excellence'],
                cta: 'Apply for Mentored',
                highlight: true,
              },
            ].map((tier) => (
              <div key={tier.name} style={{
                borderRadius: '20px', padding: '2.5rem',
                border: tier.highlight ? '2px solid #3ECFCF' : '1px solid #e5e5e5',
                background: tier.highlight ? 'linear-gradient(160deg, #F0FAFA, white)' : 'white',
                boxShadow: tier.highlight ? '0 8px 32px rgba(62,207,207,0.12)' : 'none',
              }}>
                {tier.highlight && (
                  <span style={{
                    display: 'inline-block', padding: '0.25rem 0.75rem',
                    fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: '#1B9E9E', color: 'white', borderRadius: '9999px',
                    fontWeight: 500, marginBottom: '1rem',
                  }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 400, marginBottom: '0.25rem' }}>{tier.name}</h3>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, color: '#1B9E9E', lineHeight: 1 }}>{tier.price}</p>
                <p style={{ fontSize: '0.7rem', color: '#aaa', fontWeight: 300, marginBottom: '1.5rem', marginTop: '0.25rem' }}>{tier.note}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#555', fontWeight: 300 }}>
                      <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#3ECFCF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: 'white' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{
                  display: 'block', textAlign: 'center', padding: '1rem',
                  fontSize: '0.8rem', fontWeight: 500, color: 'white', borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)',
                  textDecoration: 'none', letterSpacing: '0.04em',
                }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
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
            Train with the instructor who built this field.<br />
            Teach with the authority that comes from real knowledge.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block', padding: '1.1rem 3.5rem',
            fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em',
            color: '#062020', background: 'white', borderRadius: '9999px',
            textDecoration: 'none',
          }}>
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
