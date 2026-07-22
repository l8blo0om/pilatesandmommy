'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

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
    }, 1000);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        opacity: leaving ? 0 : 1,
        transition: 'opacity 1s ease',
        pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      {/* Full-screen video */}
      <video
        src="/videos/0f70b6ba-32df-4738-a1bd-5948040545c6.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic dark overlay — deeper at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(5,30,30,0.55) 50%, rgba(5,30,30,0.78) 100%)',
        }}
      />

      {/* Subtle brand hue wash — inherits the CSS animation */}
      <div
        className="splash-bg absolute inset-0"
        style={{ opacity: 0.22, mixBlendMode: 'color' }}
      />

      {/* Content stack */}
      <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">

        {/* Logo */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 1.4s ease 0.1s, transform 1.4s ease 0.1s',
          marginBottom: '2rem',
        }}>
          <Image
            src="/logo.png"
            alt="Pilates & Mommy"
            width={120}
            height={120}
            className="w-24 h-24 object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Main headline */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1.4s ease 0.45s, transform 1.4s ease 0.45s',
          maxWidth: '680px',
        }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)',
            fontWeight: 300,
            color: 'white',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}>
            Strong mothers<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>build strong worlds.</em>
          </h1>
        </div>

        {/* Brand pillars */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.4s ease 0.85s',
          marginTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
        }}>
          {['Pilates', 'Education', 'Community'].map((p, i) => (
            <>
              <span
                key={p}
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 400,
                }}
              >
                {p}
              </span>
              {i < 2 && (
                <span
                  key={`dot-${i}`}
                  style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.45rem' }}
                >
                  ●
                </span>
              )}
            </>
          ))}
        </div>

        {/* Primary CTA */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 1.4s ease 1.1s, transform 1.4s ease 1.1s',
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}>
          <button
            onClick={handleEnter}
            className="group"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.45)',
              color: 'white',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              cursor: 'pointer',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              fontWeight: 400,
              padding: '1.1rem 4rem',
              borderRadius: '9999px',
              transition: 'background 0.35s ease, border-color 0.35s ease, letter-spacing 0.35s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'rgba(255,255,255,0.2)';
              el.style.borderColor = 'rgba(255,255,255,0.75)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'rgba(255,255,255,0.1)';
              el.style.borderColor = 'rgba(255,255,255,0.45)';
            }}
          >
            Begin
          </button>

          {/* Music — whisper-level, not a feature */}
          {!showPlayer && (
            <button
              onClick={() => setShowPlayer(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                fontSize: '0.62rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.35)')}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
              Listen while you explore
            </button>
          )}
        </div>

        {/* Spotify player */}
        <div style={{
          maxHeight: showPlayer ? '90px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.6s ease, margin-top 0.6s ease',
          marginTop: showPlayer ? '1rem' : '0',
          width: '100%',
          maxWidth: '300px',
        }}>
          <iframe
            src="https://open.spotify.com/embed/album/3DtUmSSk0nbugBhsQfzBYL?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px', display: 'block' }}
          />
        </div>

        {/* Founder credential — anchored to bottom */}
        <div style={{
          position: 'absolute',
          bottom: '2.25rem',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.4s ease 1.5s',
          textAlign: 'center',
        }}>
          <a
            href="/about"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.3rem',
              color: 'rgba(255,255,255,0.38)',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
          >
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}>
              Dr. Niia Bishop
            </span>
            <span style={{
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1.8,
            }}>
              PhD · Alvin Ailey Scholar · NDI Certified Dance Educator · Comprehensive Pilates Instructor
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}
