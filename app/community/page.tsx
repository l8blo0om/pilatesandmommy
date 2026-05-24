import Link from 'next/link';

export const metadata = {
  title: 'Community | Pilates & Mommy',
  description: 'Join the Pilates & Mommy community — a space for moms and instructors to connect, share, and grow.',
};

const posts = [
  { name: 'Simone R.', time: '2 hours ago', text: 'Just finished my first Postpartum Restore class after 8 weeks. I actually cried. In a good way. 💙', likes: 34 },
  { name: 'Instructor Layla T.', time: '5 hours ago', text: 'Graduated the LA Certification last month and already have 12 clients. Best investment I ever made in my teaching career.', likes: 89 },
  { name: 'Destiny M.', time: '1 day ago', text: 'Question for the mamas: anyone find pilates helped with their postpartum anxiety? Would love to hear your experiences.', likes: 47 },
  { name: 'Coach Renata V.', time: '2 days ago', text: 'Reminder that your core is healing, not failing. Give it grace. Give it time. Give it Pilates. 🌿', likes: 122 },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">You Are Not Alone</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            A community<br /><em style={{ color: '#1B9E9E' }}>built on movement</em>
          </h1>
          <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
            Connect with mamas in Columbia, SC and instructors around the world. Share your journey,
            ask questions, and find your people.
          </p>
          <Link href="#join"
            className="inline-block mt-8 px-8 py-4 text-sm font-medium text-white rounded-full"
            style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
            Join the Community
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💬', title: 'Private Forum', desc: 'A members-only space to ask questions, share wins, and support fellow mamas without judgment.' },
              { icon: '🎓', title: 'Instructor Hub', desc: 'A dedicated space for certified instructors to share resources, get feedback, and grow their practice.' },
              { icon: '📅', title: 'Live Events', desc: 'Monthly live Q&As, workshops, and challenges exclusively for community members.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-stone-100 text-center hover:border-[#3ECFCF] transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}
                  className="mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed Preview */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1B9E9E] font-medium mb-2 text-center">Community Highlights</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300 }}
            className="text-center mb-10">
            What mamas are saying
          </h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.name} className="bg-white rounded-2xl p-6 border border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                      {post.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{post.name}</p>
                      <p className="text-xs text-gray-400">{post.time}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">❤️ {post.likes}</span>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{post.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 font-light mt-6">
            Join to see the full community feed
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.8rem', fontWeight: 300 }}>
            Ready to join us?
          </h2>
          <p className="mt-4 text-gray-500 font-light">
            Community access is free with any class booking or certification enrollment.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="/classes"
              className="block text-center px-6 py-4 text-sm font-medium text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
              Book a Class
            </Link>
            <Link href="/certification"
              className="block text-center px-6 py-4 text-sm font-medium text-[#1B9E9E] border border-[#3ECFCF] rounded-full hover:bg-[#F0FAFA]">
              Get Certified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
