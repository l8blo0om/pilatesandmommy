import Link from 'next/link';

export const metadata = {
  title: 'The Postpartum Body | Pilates & Mommy',
  description: 'Understanding the postpartum body — diastasis recti, pelvic floor, hormones — and how movement supports recovery. Education, not medical advice.',
};

const challenges = [
  {
    title: 'Diastasis Recti',
    short: 'The "ab split"',
    desc: 'During pregnancy, the growing uterus stretches the connective tissue between the two sides of the rectus abdominis muscle. This is called diastasis recti, and it is very common in late pregnancy and the early postpartum period. Signs can include a "pooch" or doming along the midline, a feeling of core weakness, and lower back discomfort.',
    pilates: 'Pilates centers on deep core work — especially the transverse abdominis and breath — which research suggests can help restore tension and function across the midline. The goal is coordinated, functional strength, not a guaranteed "closing" of the gap. Persistent or wide separation is worth assessing with a pelvic-health physical therapist.',
    icon: '🫀',
  },
  {
    title: 'Pelvic Floor Dysfunction',
    short: 'More than just leaks',
    desc: 'The pelvic floor — a hammock of muscles at the base of the pelvis — goes through significant strain during pregnancy and birth. Dysfunction can show up as leaking, pelvic pain, painful intercourse, or a heaviness that may signal prolapse. It can involve weakness, tightness, or coordination problems — which is why symptoms should be assessed individually.',
    pilates: 'Our classes integrate pelvic floor awareness into movement — teaching both engagement and release, since an overly tight floor can be as problematic as a weak one. This is movement education, not treatment. Pain, prolapse symptoms, or persistent incontinence should be evaluated by an OB-GYN or a pelvic-health physical therapist.',
    icon: '🌺',
  },
  {
    title: 'Hormonal Shifts',
    short: 'Your body chemistry changed',
    desc: 'Estrogen and progesterone drop sharply after birth, especially while breastfeeding. This can affect mood, joint laxity, and energy. Many mothers are surprised by how different their body feels even months later.',
    pilates: 'Regular, low-impact movement is broadly associated with better mood and long-term bone and joint health. Pilates is one gentle, accessible way to stay moving through this window — a support, not a cure.',
    icon: '🌙',
  },
  {
    title: 'Core Weakness & Back Pain',
    short: 'When your powerhouse feels powerless',
    desc: 'Nine months of carrying extra weight, hormonal ligament relaxation, and the demands of newborn care (constant bending, lifting, feeding) leave most postpartum mamas with chronic back pain and a disconnected core.',
    pilates: 'The Pilates method was literally built around "the powerhouse" — the deep core system. Our postpartum classes rebuild this system layer by layer, alleviating back pain while preventing future injury.',
    icon: '💪',
  },
  {
    title: 'Body Image & Identity',
    short: 'The fourth trimester is real',
    desc: 'Postpartum bodies look and feel different — and our culture doesn\'t make that easy. Many mothers experience body-image struggles and shifts in identity. Postpartum depression and anxiety are real and common, and can show up physically.',
    pilates: 'Our studio is a judgment-free space, and movement can be a meaningful part of feeling reconnected to your body. It is not a treatment for depression or anxiety — if you are struggling, please reach out to your provider or a mental-health professional. You deserve real support.',
    icon: '💙',
  },
  {
    title: 'When to Start',
    short: 'Timing matters',
    desc: 'The answer isn\'t the same for everyone. After an uncomplicated birth, some people feel ready to move gently quite soon; a C-section, a complicated birth, or pelvic-floor symptoms usually mean a longer, more individualized return. There is no single universal timeline.',
    pilates: 'We ask that you get clearance from your OB-GYN or midwife before joining Restore, and we follow their guidance for your situation. Our instructors are trained to modify — but your care provider, who knows your birth and your body, sets the timeline.',
    icon: '📅',
  },
];

export default function PostpartumPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(160deg, #F0FAFA, #E8F8F5)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">Education & Empowerment</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            The postpartum body:<br />
            <em style={{ color: '#1B9E9E' }}>what no one told you</em>
          </h1>
          <p className="mt-6 text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Your body just did one of the most extraordinary things in the universe.
            Here is what is happening inside it — and how thoughtful movement can support you
            as you recover and rebuild.
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 300, fontStyle: 'italic', color: '#1B9E9E' }}>
            &ldquo;Your body is not broken. It is in recovery. And recovery, done right, leads to the strongest version of you.&rdquo;
          </blockquote>
          <p className="mt-3 text-xs tracking-widest uppercase text-gray-400">Pilates & Mommy</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((c, i) => (
              <div key={c.title} className={`rounded-2xl overflow-hidden border border-stone-100 ${i === challenges.length - 1 && challenges.length % 2 !== 0 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}`}>
                <div className="bg-white p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 500 }}>
                        {c.title}
                      </h3>
                      <p className="text-sm text-[#1B9E9E] font-light">{c.short}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">{c.desc}</p>
                  <div className="rounded-xl p-4" style={{ background: '#F0FAFA' }}>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#1B9E9E] font-medium mb-2">How Pilates Helps</p>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{c.pilates}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch & learn */}
      <section className="py-20 bg-[#F9F8F5]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-center accent">Watch &amp; Learn</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, textAlign: 'center' }}
            className="mb-10">
            The science, explained gently
          </h2>
          <div className="grid md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3 card-glow rounded-2xl overflow-hidden bg-black">
              <video
                src="/videos/edu-rebuilding-foundation.mp4"
                controls
                preload="metadata"
                playsInline
                className="w-full aspect-video"
              />
              <div className="bg-white p-5">
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}>
                  Rebuilding the Foundation
                </h3>
                <p className="text-sm text-gray-500 font-light">A 4-minute look at what actually happens to the postpartum body — and how thoughtful movement supports recovery.</p>
              </div>
            </div>
            <div className="md:col-span-2 card-glow rounded-2xl overflow-hidden bg-black">
              <video
                src="/videos/edu-core-60s.mp4"
                controls
                preload="metadata"
                playsInline
                className="w-full aspect-[9/16]"
              />
              <div className="bg-white p-5">
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 500 }}>
                  How Mommy &amp; Me Rebuilds the Core
                </h3>
                <p className="text-sm text-gray-500 font-light">The 60-second version — why the signature class works from the inside out.</p>
              </div>
            </div>
          </div>

          {/* Shareable infographic */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="card-glow rounded-2xl overflow-hidden border border-stone-100 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/edu-infographic.jpg"
                alt="Rebuilding the Postpartum Body — diastasis recti & core recovery, pelvic floor-informed movement, and rebuilding from the inside out"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>
                The one-page version
              </h3>
              <p className="mt-3 text-gray-500 font-light leading-relaxed">
                The three ideas this whole page rests on — abdominal separation, the pelvic floor,
                and rebuilding from the inside out — on a single graphic. Save it, print it,
                send it to a mama who needs it.
              </p>
              <a href="/images/edu-infographic.jpg" download="rebuilding-the-postpartum-body.jpg"
                className="btn-glow btn-glow--pill inline-block mt-6">
                Download &amp; Share
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & scope-of-practice note */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-stone-200 p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-3">
              What we know · what we&rsquo;re still learning
            </p>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
              This page is education, not medical advice. Pilates & Mommy provides movement
              instruction — not diagnosis, physical therapy, or rehabilitation. The research on
              exercise in the postpartum period is genuinely encouraging, and also still evolving;
              we try to describe it honestly rather than overpromise.
            </p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              If you have pelvic pain, prolapse symptoms, persistent incontinence, a wide or painful
              abdominal separation, or any concern about your recovery, please see your OB-GYN,
              midwife, or a pelvic-health physical therapist. For current guidance on returning to
              activity after pregnancy, the American College of Obstetricians and Gynecologists
              (ACOG) is a trustworthy starting point.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1B9E9E, #5BAD8F)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'white' }}>
            Ready to begin your recovery?
          </h2>
          <p className="mt-4 text-white/80 font-light">
            Join our Postpartum Restore class and take the first step toward feeling like yourself again.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/classes"
              className="px-8 py-4 text-sm font-medium bg-white text-[#1B9E9E] rounded-full hover:shadow-lg transition-all">
              Book Postpartum Restore
            </Link>
            <Link href="/community"
              className="px-8 py-4 text-sm font-medium text-white border border-white/40 rounded-full hover:bg-white/10 transition-all">
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
