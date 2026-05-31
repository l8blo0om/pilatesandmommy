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

      {/* Music link */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.1s',
        }}
      >
        <a
          href="https://music.apple.com/us/album/touch%C3%A9-pussycat-vol-1/1889648702"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          {/* Music note icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <span>Now playing on Apple Music</span>
          {/* Apple Music logo */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
            <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.762-.726 10.338 10.338 0 00-1.775-.233c-.259-.012-.52-.014-.775-.014H6.75c-.255 0-.516.002-.775.014A10.338 10.338 0 004.2.165a5.022 5.022 0 00-1.762.726C1.32 1.624.575 2.624.258 3.934a9.23 9.23 0 00-.24 2.19C.006 6.386 0 6.644 0 6.9v10.2c0 .256.006.514.018.776a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.762.726c.58.13 1.175.205 1.775.233.259.012.52.014.775.014h10.5c.255 0 .516-.002.775-.014a10.338 10.338 0 001.775-.233 5.022 5.022 0 001.762-.726c1.118-.734 1.863-1.734 2.18-3.043a9.23 9.23 0 00.24-2.19c.012-.262.018-.52.018-.776V6.9c0-.256-.006-.514-.018-.776zM12 18.5c-3.584 0-6.5-2.916-6.5-6.5S8.416 5.5 12 5.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-10.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6.5c-1.378 0-2.5-1.122-2.5-2.5S10.622 9.5 12 9.5s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
