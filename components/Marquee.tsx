// Scrolling brand tape — Soda City energy, translated to the warm maternal palette.
// Content duplicated once so the -50% loop is seamless.
const PHRASES = [
  'Strong mothers build strong worlds',
  'Movement for every stage of motherhood',
  'Prenatal',
  'Postpartum',
  'Mommy & Me',
  'Columbia, SC',
  'Founder-led since 2009',
];

export default function Marquee() {
  const run = [...PHRASES, ...PHRASES];
  return (
    <div
      className="marquee"
      style={{
        background: 'linear-gradient(90deg, #0d4040, #1B9E9E)',
        color: '#F0FAFA',
        padding: '14px 0',
        borderTop: '2px solid transparent',
        borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, hsl(var(--hue) 90% 60%), hsl(calc(var(--hue) + 40) 70% 55%), hsl(var(--hue) 90% 60%)) 1',
      }}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {run.map((p, i) => (
          <span className="marquee__item" key={i}>
            {p}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
