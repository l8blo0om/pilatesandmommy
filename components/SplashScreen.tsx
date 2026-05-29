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
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.6)',
          marginTop: '0.75rem',
          letterSpacing: '0.08em',
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
          className="group flex items-center gap-3 px-12 py-4 rounded-full text-sm font-medium"
          style={{
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.45)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
          }}
        >
          <span>Enter</span>
          <span style={{ transition: 'transform 0.3s ease' }}
            className="group-hover:translate-x-1 inline-block">→</span>
        </button>
      </div>

      {/* Music toggle — bottom of screen */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-3"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.1s',
        }}
      >
        {/* Sliding player */}
        <div style={{
          maxHeight: showPlayer ? '200px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          width: '320px',
        }}>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="175"
            style={{ width: '100%', borderRadius: '14px', display: 'block' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/touch%C3%A9-pussycat-vol-1/1889648702"
          />
        </div>

        {/* Music note toggle */}
        <button
          onClick={() => setShowPlayer(p => !p)}
          className="flex items-center gap-2"
          style={{
            color: showPlayer ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <span>{showPlayer ? 'Hide player' : 'Now playing'}</span>
        </button>
      </div>
    </div>
  );
}
