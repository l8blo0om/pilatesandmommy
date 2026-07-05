'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('splash-seen');
    if (seen) {
      setVisible(false);
    } else {
      setMounted(true);
    }
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => {
      sessionStorage.setItem('splash-seen', 'true');
      setVisible(false);
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6"
      style={{
        background: 'linear-gradient(160deg, #0d6b6b 0%, #1B9E9E 40%, #5BAD8F 100%)',
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #fff, transparent)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #B2DFD0, transparent)', transform: 'translate(-30%, 30%)' }} />

      {/* Logo */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
      }}>
        <Image
          src="/logo.png"
          alt="Pilates & Mommy"
          width={220}
          height={220}
          className="w-44 h-44 object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Tagline */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
        textAlign: 'center',
        marginTop: '1.25rem',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 300,
          color: 'white',
          letterSpacing: '0.02em',
          lineHeight: 1.15,
        }}>
          Movement made<br />
          <em>for mamas.</em>
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.55)',
          marginTop: '0.75rem',
          letterSpacing: '0.1em',
          fontWeight: 300,
        }}>
          Pilates · Community · Certification
        </p>
      </div>

      {/* Enter button */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease 0.8s, transform 1s ease 0.8s',
        marginTop: '2.5rem',
      }}>
        <button
          onClick={handleEnter}
          className="group flex items-center gap-3 px-12 py-4 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.45)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          <span>Enter</span>
          <span style={{ transition: 'transform 0.3s ease' }}
            className="group-hover:translate-x-1 inline-block">→</span>
        </button>
      </div>

      {/* Now Playing pill */}
      <div
        className="absolute bottom-8"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.1s',
        }}
      >
        <a
          href="https://music.apple.com/us/album/touch%C3%A9-pussycat-vol-1/1889648702"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.4)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.25)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.15)';
            }}
          >
            {/* Animated equalizer bars */}
            <div className="flex items-end gap-[3px]" style={{ height: '14px' }}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    borderRadius: '2px',
                    background: 'rgba(255,255,255,0.7)',
                    animation: `eq-bar ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
                    height: `${[8, 14, 10, 6][i - 1]}px`,
                  }}
                />
              ))}
            </div>

            {/* Label */}
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
              Now playing
            </p>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes eq-bar {
          from { transform: scaleY(0.3); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
