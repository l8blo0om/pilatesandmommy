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
    }, 800);
  };

  const handleStartWithMusic = () => {
    setShowPlayer(true);
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
      {/* Blobs */}
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
          className="w-40 h-40 object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Tagline */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
        textAlign: 'center',
        marginTop: '1rem',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: 300,
          color: 'white',
          letterSpacing: '0.02em',
          lineHeight: 1.15,
        }}>
          Movement made<br />
          <em>for mamas.</em>
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)',
          marginTop: '0.6rem',
          letterSpacing: '0.1em',
          fontWeight: 300,
        }}>
          Pilates · Community · Certification
        </p>
      </div>

      {/* Spotify player — slides in when chosen */}
      <div style={{
        maxHeight: showPlayer ? '90px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.6s ease',
        marginTop: showPlayer ? '1.5rem' : '0',
        width: '100%',
        maxWidth: '340px',
        opacity: mounted ? 1 : 0,
        transitionProperty: 'max-height, margin-top, opacity',
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

      {/* Buttons */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease 0.8s, transform 1s ease 0.8s',
        marginTop: '1.75rem',
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {!showPlayer && (
          <button
            onClick={handleStartWithMusic}
            className="flex items-center gap-2"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.45)',
              color: 'white',
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '0.85rem 1.5rem',
              borderRadius: '9999px',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            Start with music
          </button>
        )}

        <button
          onClick={handleEnter}
          className="group flex items-center gap-2"
          style={{
            background: showPlayer ? 'rgba(255,255,255,0.92)' : 'transparent',
            border: '1px solid rgba(255,255,255,0.45)',
            color: showPlayer ? '#1B9E9E' : 'white',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            fontWeight: 500,
            padding: '0.85rem 2rem',
            borderRadius: '9999px',
            transition: 'background 0.4s ease, color 0.4s ease',
          }}
        >
          <span>Enter</span>
          <span className="group-hover:translate-x-1 inline-block" style={{ transition: 'transform 0.3s ease' }}>→</span>
        </button>
      </div>

      {/* Album credit */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 1s ease 1.1s',
        marginTop: '1.25rem',
        textAlign: 'center',
      }}>
        <a
          href="https://open.spotify.com/album/3DtUmSSk0nbugBhsQfzBYL"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            justifyContent: 'center',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >
          {/* Spotify icon */}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Center + Balance · Dr. Niia Bishop
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
