export const metadata = {
  title: 'Contact | Pilates & Mommy',
  description: 'Book a class, ask about certification, or just say hello. We are based in Columbia, SC.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">Say Hello</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            We would love<br /><em style={{ color: '#1B9E9E' }}>to hear from you</em>
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 300 }}
              className="mb-8">
              Send us a message
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-400 tracking-wide uppercase mb-2">First Name</label>
                  <input type="text" placeholder="Jane"
                    className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:border-[#3ECFCF] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 tracking-wide uppercase mb-2">Last Name</label>
                  <input type="text" placeholder="Doe"
                    className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:border-[#3ECFCF] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 tracking-wide uppercase mb-2">Email</label>
                <input type="email" placeholder="jane@example.com"
                  className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:border-[#3ECFCF] transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 tracking-wide uppercase mb-2">I am interested in...</label>
                <select className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:border-[#3ECFCF] transition-colors text-gray-600">
                  <option value="">Select a topic</option>
                  <option>Booking a Class</option>
                  <option>LA Certification</option>
                  <option>Shop / Products</option>
                  <option>Community Membership</option>
                  <option>Private Sessions</option>
                  <option>Corporate / Group</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-400 tracking-wide uppercase mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:border-[#3ECFCF] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 300 }}
                className="mb-8">
                Find us
              </h2>
              {[
                { icon: '📍', label: 'Studio Location', value: 'Columbia, SC\n(Address provided on booking confirmation)' },
                { icon: '📧', label: 'Email', value: 'hello@pilatesandmommy.com' },
                { icon: '📱', label: 'Phone / Text', value: '(803) 000-0000' },
                { icon: '🕐', label: 'Studio Hours', value: 'Mon–Sat: 7am – 7pm\nSunday: 9am – 2pm' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 py-4 border-b border-stone-100">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs tracking-wide uppercase text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm text-gray-600 font-light leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="rounded-2xl p-6" style={{ background: '#F0FAFA' }}>
              <p className="text-xs tracking-widest uppercase text-[#1B9E9E] font-medium mb-4">Follow Along</p>
              <div className="flex gap-4">
                {[
                  { label: 'Instagram', handle: '@pilatesandmommy' },
                  { label: 'TikTok', handle: '@pilatesandmommy' },
                  { label: 'Facebook', handle: 'Pilates & Mommy' },
                ].map((s) => (
                  <div key={s.label} className="flex-1 bg-white rounded-xl p-3 text-center border border-stone-100">
                    <p className="text-xs font-medium text-gray-700">{s.label}</p>
                    <p className="text-xs text-[#1B9E9E] font-light mt-0.5">{s.handle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick book */}
            <div className="rounded-2xl p-6 border-2 border-[#3ECFCF]" style={{ background: 'linear-gradient(160deg, #F0FAFA, white)' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.4rem', fontWeight: 400 }}
                className="mb-2">
                Ready to book right now?
              </p>
              <p className="text-sm text-gray-500 font-light mb-4">
                Skip the form — tell us your preferred class and time.
              </p>
              <a href="sms:8030000000"
                className="block text-center px-6 py-3 text-sm font-medium text-white rounded-full"
                style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                Text Us to Book
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
