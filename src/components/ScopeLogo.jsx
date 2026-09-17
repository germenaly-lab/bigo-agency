import React, { useState } from 'react';
import scoopLogoImg from '../assets/scope-logo.png';

/**
 * ScoopLogo / ScopeLogo Component
 * Renders the official Scoop Agency logo extracted from https://www.scoopagency.online/
 */
export default function ScopeLogo({ size = 'md', showText = true, layout = 'row', className = '' }) {
  const [imgError, setImgError] = useState(false);

  // Dimension mapping for refined, sleek professional presentation
  const dimensions = {
    xs: { height: 18, fontSize: '10.5px' },
    sm: { height: 26, fontSize: '11.5px' },
    md: { height: 34, fontSize: '12px' },
    lg: { height: 44, fontSize: '13px' },
    xl: { height: 56, fontSize: '14px' }
  }[size] || { height: 34, fontSize: '12px' };

  return (
    <div
      className={`scoop-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: layout === 'column' ? '8px' : '12px',
        flexDirection: layout === 'column' ? 'column' : 'row',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Official Scoop Logo Image */}
      {!imgError ? (
        <img
          src={scoopLogoImg || '/assets/scope-logo.png'}
          alt="Scoop Agency Logo"
          style={{
            height: `${dimensions.height}px`,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(233, 30, 99, 0.28))',
            display: 'block'
          }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Vector Fallback if image fails to load */
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: dimensions.height * 0.7 + 'px',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: '#e91e63',
              fontFamily: "'Cairo', system-ui, sans-serif"
            }}
          >
            SCOOP
          </span>
        </div>
      )}

      {/* Subtitle / Department Branding */}
      {showText && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: layout === 'column' ? 'center' : 'flex-start',
            lineHeight: 1.2
          }}
        >
          {layout === 'row' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: `${Math.max(18, dimensions.height * 0.55)}px`,
                  background: 'linear-gradient(to bottom, transparent, rgba(233,30,99,0.5), transparent)',
                  margin: '0 2px'
                }}
              />
              <span
                style={{
                  fontSize: dimensions.fontSize,
                  color: 'var(--text-muted)',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap'
                }}
              >
                منظومة إدارة الوكالات
              </span>
            </div>
          )}

          {layout === 'column' && (
            <span
              style={{
                fontSize: dimensions.fontSize,
                color: 'var(--text-muted)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textAlign: 'center'
              }}
            >
              منظومة إدارة الوكالات المعتمدة
            </span>
          )}
        </div>
      )}
    </div>
  );
}
