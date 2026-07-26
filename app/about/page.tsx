import Link from 'next/link';

export const metadata = {
  title: 'About Dr. Niia Bishop | Pilates & Mommy',
  description: 'PhD, Alvin Ailey scholar, NDI certified dance educator, and Comprehensive Pilates Instructor — the story behind Pilates & Mommy.',
};

const timeline = [
  { year: 'Age 5', label: 'Movement begins', detail: 'Starts studying dance' },
  { year: 'Scholarship', label: 'Alvin Ailey School of Dance', detail: 'Ballet · Modern · African · Jazz' },
  { year: 'Amherst', label: 'Bachelor of Arts', detail: 'Amherst College — with studies at Mt. Holyoke & Smith' },
  { year: 'Certification', label: 'NDI Dance Educator', detail: 'National Dance Institute scholarship' },
  { year: 'Michigan', label: 'PhD, Comparative Literature', detail: 'University of Michigan' },
  { year: '2007', label: 'Pilates Certified', detail: 'Mat & Machine — after results "so profound" she had to teach it' },
  { year: '2009', label: 'Created Mamilates', detail: 'One of the first Mommy & Me Pilates formats in the country, born at the birth of her son Reza' },
  { year: 'Now', label: 'Pilates & Mommy', detail: 'Instructor · Educator · Founder' },
];

export default function AboutPage() {
  return (
    <>
      {/* Opening — dark, editorial */}
      <section style={{ background: '#0d1f1f', padding: '8rem 1.5rem 7rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#3ECFCF',
            fontWeight: 500,
            marginBottom: '2.5rem',
          }}>
            About
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 300,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '2rem',
          }}>
            Movement has been<br />
            <em style={{ fontStyle: 'italic', color: '#3ECFCF' }}>her language since five.</em>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 300,
            lineHeight: 1.8,
            maxWidth: '560px',
          }}>
            Scholar. Dancer. Educator. Mother. Dr. Niia Bishop built Pilates & Mommy from
            personal transformation — not from a brand brief.
          </p>
        </div>
      </section>

      {/* The origin */}
      <section style={{ background: 'white', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#1B9E9E',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}>
            The Story
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <p style={{ fontSize: '1.15rem', color: '#1A1A1A', fontWeight: 300, lineHeight: 1.85 }}>
              She was five years old when movement became her language. A scholarship to the
              Alvin Ailey School of Dance followed — training in ballet, modern, African, and jazz —
              before she went on to dance professionally in companies across Massachusetts and New York.
            </p>

            <p style={{ fontSize: '1.15rem', color: '#3a3a3a', fontWeight: 300, lineHeight: 1.85 }}>
              A knee injury at sixteen never fully healed. She kept dancing anyway.
              She earned her Bachelor of Arts at Amherst College, studying alongside peers at
              Mt. Holyoke and Smith, and received a scholarship through the National Dance Institute
              to become a certified dance educator. Movement was always the through-line.
            </p>

            <p style={{ fontSize: '1.15rem', color: '#3a3a3a', fontWeight: 300, lineHeight: 1.85 }}>
              Then came the University of Michigan, and a PhD in Comparative Literature.
              Somewhere between dissertation chapters, she pressed play on a Windsor Pilates DVD
              at home. The results were, in her words, <em style={{ fontStyle: 'italic', color: '#1B9E9E' }}>so profound</em> that
              she immediately pursued certification in mat and machine Pilates — completing it in 2007.
            </p>

            <p style={{ fontSize: '1.15rem', color: '#3a3a3a', fontWeight: 300, lineHeight: 1.85 }}>
              In 2009, at the birth of her son Reza, she created Mamilates — one of the first
              Mommy & Me Pilates formats in the country. A cross between Gymboree and Windsor Pilates,
              she described it. She taught it in NYC, Long Island, and Buffalo before eventually
              bringing the work south to Columbia, SC.
            </p>

            <p style={{ fontSize: '1.15rem', color: '#3a3a3a', fontWeight: 300, lineHeight: 1.85 }}>
              Today she teaches at Club Pilates in Forest Acres, holds an appointment as Assistant
              Professor at Allen University, and runs Pilates & Mommy as a living expression of
              everything she has learned about bodies, resilience, and what women are capable of.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: '#F9F8F5', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 300,
            color: '#1A1A1A',
            lineHeight: 1.3,
            fontStyle: 'italic',
            letterSpacing: '0.01em',
          }}>
            &ldquo;Pilates did for my body what years of dance couldn&rsquo;t.
            I had to share that.&rdquo;
          </blockquote>
          <p style={{
            marginTop: '1.5rem',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#1B9E9E',
            fontWeight: 500,
          }}>
            Dr. Niia Bishop
          </p>
        </div>
      </section>

      {/* Credential timeline */}
      <section style={{ background: 'white', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#1B9E9E',
            fontWeight: 500,
            marginBottom: '3rem',
          }}>
            Credentials & Formation
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <div
                key={item.year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '2rem',
                  paddingBottom: i < timeline.length - 1 ? '2.5rem' : '0',
                  borderBottom: i < timeline.length - 1 ? '1px solid #f0f0f0' : 'none',
                  marginBottom: i < timeline.length - 1 ? '2.5rem' : '0',
                }}
              >
                <div>
                  <span style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#3ECFCF',
                    fontWeight: 600,
                  }}>
                    {item.year}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    marginBottom: '0.25rem',
                    lineHeight: 1.2,
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#888',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: '#0d1f1f', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#3ECFCF',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}>
            Philosophy
          </p>

          <div style={{ display: 'grid', gap: '3rem' }}>
            {[
              {
                heading: 'Movement is medicine.',
                body: 'Pilates healed an injury that dance created and two decades of medicine never resolved. That is not a coincidence. The body responds to intelligent, consistent movement — and Niia has made it her life\'s work to teach exactly that.',
              },
              {
                heading: 'Expertise and warmth are not opposites.',
                body: 'A PhD and a warm welcome can exist in the same room. Pilates & Mommy is built on the belief that mothers deserve both rigor and care — not one at the expense of the other.',
              },
              {
                heading: 'Mothers are not a niche.',
                body: 'The postpartum body. The pregnant body. The body that survived grief or infertility or just a hard year. These are not edge cases. They are the majority. They deserve instructors trained to meet them where they are.',
              },
            ].map((p) => (
              <div key={p.heading}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '1.6rem',
                  fontWeight: 300,
                  color: 'white',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}>
                  {p.heading}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'white', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Ready to move with intention?
          </h2>
          <p style={{ color: '#888', fontWeight: 300, lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Whether you&rsquo;re looking for a class, a certification, or a community —
            the door is open.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/classes"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'white',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Book a Class
            </Link>
            <Link
              href="/certification"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#1B9E9E',
                borderRadius: '9999px',
                border: '1px solid #3ECFCF',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Get Certified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
