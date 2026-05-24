import Link from 'next/link';

export const metadata = {
  title: 'Shop | Pilates & Mommy',
  description: 'Curated wellness products, apparel, digital guides, and more for mamas who move.',
};

const products = [
  { title: 'Postpartum Recovery Guide', type: 'Digital Download', price: '$29', emoji: '📖', tag: 'Bestseller', color: '#E8F8F5' },
  { title: 'Pilates Grip Socks', type: 'Apparel', price: '$24', emoji: '🧦', tag: 'New', color: '#F0FAFA' },
  { title: 'Mama Movement Journal', type: 'Physical', price: '$38', emoji: '📓', tag: '', color: '#E8F8F5' },
  { title: 'Prenatal Pilates Guide', type: 'Digital Download', price: '$27', emoji: '🤰', tag: 'Bestseller', color: '#F0FAFA' },
  { title: 'P&M Resistance Band Set', type: 'Equipment', price: '$45', emoji: '💪', tag: 'New', color: '#E8F8F5' },
  { title: 'Signature Tote Bag', type: 'Apparel', price: '$52', emoji: '👜', tag: '', color: '#F0FAFA' },
  { title: 'Core Restore Video Series', type: 'Digital Course', price: '$97', emoji: '🎥', tag: 'Popular', color: '#E8F8F5' },
  { title: 'P&M Yoga Mat', type: 'Equipment', price: '$88', emoji: '🧘‍♀️', tag: '', color: '#F0FAFA' },
];

const categories = ['All', 'Digital', 'Apparel', 'Equipment', 'Physical'];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#F0FAFA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1B9E9E] font-medium mb-4">The Shop</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Curated for<br /><em style={{ color: '#1B9E9E' }}>the mama who moves</em>
          </h1>
          <p className="mt-6 text-gray-500 font-light max-w-md mx-auto">
            Guides, gear, apparel, and digital resources designed with the Pilates & Mommy woman in mind.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-stone-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat, i) => (
            <button key={cat}
              className={`px-5 py-2 text-sm rounded-full whitespace-nowrap transition-all ${
                i === 0
                  ? 'text-white font-medium'
                  : 'text-gray-500 border border-stone-200 hover:border-[#3ECFCF] hover:text-[#1B9E9E]'
              }`}
              style={i === 0 ? { background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' } : {}}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="h-48 flex items-center justify-center relative" style={{ background: p.color }}>
                  <span className="text-6xl">{p.emoji}</span>
                  {p.tag && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-xs rounded-full text-white font-medium"
                      style={{ background: '#1B9E9E' }}>
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 bg-white">
                  <p className="text-xs text-[#1B9E9E] font-light mb-1">{p.type}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 500 }}
                    className="mb-2 group-hover:text-[#1B9E9E] transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', color: '#1B9E9E' }}>
                      {p.price}
                    </span>
                    <button className="px-4 py-2 text-xs font-medium text-white rounded-full"
                      style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-[#F9F8F5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4">🎁</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300 }}>
            Bundle & Save
          </h2>
          <p className="mt-3 text-gray-500 font-light">
            Pair your certification enrollment with our digital guides and save 20%.
          </p>
          <Link href="/contact"
            className="inline-block mt-6 px-8 py-4 text-sm font-medium text-white rounded-full"
            style={{ background: 'linear-gradient(135deg, #3ECFCF, #1B9E9E)' }}>
            Ask About Bundles
          </Link>
        </div>
      </section>
    </>
  );
}
