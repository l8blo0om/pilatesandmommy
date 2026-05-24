import Link from 'next/link';

export const metadata = {
  title: 'The Postpartum Body | Pilates & Mommy',
  description: 'Understanding postpartum challenges — diastasis recti, pelvic floor, hormones — and how Pilates heals.',
};

const challenges = [
  {
    title: 'Diastasis Recti',
    short: 'The "ab split"',
    desc: 'During pregnancy, the growing uterus separates the two sides of the rectus abdominis muscle. This is called diastasis recti, and it affects up to 60% of postpartum women. Signs include a "pooch" that doesn\'t improve, lower back pain, and weakness during core movements.',
    pilates: 'Pilates focuses on deep core activation — specifically the transverse abdominis — which acts like a natural corset, helping draw the separated muscles back together without dangerous pressure.',
    icon: '🫀',
  },
  {
    title: 'Pelvic Floor Dysfunction',
    short: 'More than just leaks',
    desc: 'The pelvic floor — a hammock of muscles at the base of the pelvis — goes through incredible strain during pregnancy and birth. Dysfunction can show up as leaking when you sneeze, pelvic pain, painful intercourse, or even prolapse.',
    pilates: 'Pilates integrates pelvic floor awareness into every movement. We teach proper engagement AND release — because an overly tight floor is just as problematic as a weak one.',
    icon: '🌺',
  },
  {
    title: 'Hormonal Shifts',
    short: 'Your body chemistry changed',
    desc: 'Estrogen and progesterone drop dramatically after birth, especially if breastfeeding. This affects everything: mood, joint laxity, bone density, and energy levels. Many mamas are surprised by how their body "feels different" even months later.',
    pilates: 'Mindful movement regulates cortisol, stimulates endorphin release, and — when done safely — supports healthy bone density. Pilates is low-impact but highly effective during this hormonal window.',
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
    desc: 'Postpartum bodies look and feel different — and our culture doesn\'t make that easy. Many mamas experience body image struggles, loss of identity, and even postpartum depression or anxiety that manifests physically.',
    pilates: 'Our studio is a judgment-free space. Movement heals not just bodies but minds. Pilates releases stored tension, improves self-efficacy, and reconnects you with what your body can do — not just how it looks.',
    icon: '💙',
  },
  {
    title: 'When to Start',
    short: 'Timing matters',
    desc: 'The answer isn\'t the same for everyone. A vaginal delivery, C-section, complicated birth, or pelvic floor issues all affect when and how you return to movement. Starting too early can do real harm.',
    pilates: 'We always recommend a 6-week (minimum) postpartum clearance from your OB or midwife before our Restore classes. Our instructors are trained to modify for your unique situation — always.',
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
            Here is what is happening inside it — and exactly how Pilates helps you heal, rebuild, and thrive.
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
