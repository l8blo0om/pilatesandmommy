'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only show once per session
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
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
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
      }}>
        <Image
          src="/logo.png"
          alt="Pilates & Mommy"
          width={220}
          height={220}
          className="w-48 h-48 object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Tagline */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
        textAlign: 'center',
        marginTop: '1.5rem',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 300,
          color: 'white',
          letterSpacing: '0.02em',
          lineHeight: 1.2,
        }}>
          Movement made<br />
          <em>for mamas.</em>
        </p>
      </div>

      {/* Apple Music embed */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity 1s ease 0.8s',
        marginTop: '2rem',
        width: '100%',
        maxWidth: '380px',
        padding: '0 1.5rem',
        borderRadius: '18px',
        overflow: 'hidden',
      }}>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{ width: '100%', overflow: 'hidden', borderRadius: '14px', background: 'transparent' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/touch%C3%A9-pussycat-vol-1/1889648702"
        />
      </div>

      {/* Enter button */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s ease 1.1s, transform 1s ease 1.1s',
        marginTop: '2rem',
      }}>
        <button
          onClick={handleEnter}
          className="group flex items-center gap-3 px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase"
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.4)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer',
            letterSpacing: '0.15em',
          }}
        >
          <span>Enter</span>
          <span style={{ fontSize: '1rem', transition: 'transform 0.3s ease' }}
            className="group-hover:translate-x-1 inline-block">→</span>
        </button>
      </div>

      {/* Skip */}
      <button
        onClick={handleEnter}
        className="absolute bottom-8 text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors"
        style={{ letterSpacing: '0.2em' }}
      >
        Skip
      </button>
    </div>
  );
}
