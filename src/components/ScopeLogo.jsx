import React, { useState } from 'react';

/**
 * ScopeLogo Component
 * 
 * Instructions to replace the logo:
 * Simply place your new logo file at:
 * -> public/assets/scope-logo.png (or public/assets/scope-logo.svg)
 * OR replace src/assets/scope-logo.svg / src/assets/scope-logo.png
 */
export default function ScopeLogo({ size = 'md', showText = true, layout = 'row' }) {
  const [imgError, setImgError] = useState(false);

  // Dimension mapping
  const dimensions = {
    sm: { height: 28, fontSize: '18px', iconSize: 28 },
    md: { height: 38, fontSize: '24px', iconSize: 38 },
    lg: { height: 52, fontSize: '32px', iconSize: 52 },
  }[size] || { height: 38, fontSize: '24px', iconSize: 38 };

  return (
    <div
      className="scope-logo-container"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: layout === 'column' ? '6px' : '10px',
        flexDirection: layout === 'column' ? 'column' : 'row',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      {/* Scope Brand Icon / Asset */}
      {!imgError ? (
        <img
          src="/assets/scope-logo.svg"
          alt="Scope Logo"
          style={{
            height: `${dimensions.height}px`,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 8px rgba(245, 158, 11, 0.25))'
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Dynamic SVG Fallback */
        <svg
          width={dimensions.iconSize}
          height={dimensions.iconSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="21" stroke="#f59e0b" strokeWidth="3" />
          <line x1="24" y1="3" x2="24" y2="10" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="45" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="3" y1="24" x2="10" y2="24" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="24" x2="45" y2="24" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M 29 17 C 29 17 21 14 18 19 C 15 24 33 24 30 31 C 27 38 18 33 18 33"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="2.5" fill="#f59e0b" />
        </svg>
      )}

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            style={{
              fontSize: dimensions.fontSize,
              fontWeight: 900,
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #ffffff 30%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Cairo', system-ui, sans-serif"
            }}
          >
            Scope
          </span>
          <span
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            منظومة إدارة الوكالات
          </span>
        </div>
      )}
    </div>
  );
}
