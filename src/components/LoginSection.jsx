import React, { useState } from 'react';
import {
  LogIn,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sun,
  Moon,
  HelpCircle,
  X
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';

export default function LoginSection({
  user: _user,
  setUser,
  setActiveTab,
  themeMode = 'dark',
  onToggleThemeMode
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Normal submit handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setErrorMessage('يرجى إدخال البريد الإلكتروني أو رقم الهاتف وكلمة المرور');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    const isEmail = identifier.includes('@');
    const displayName = isEmail ? identifier.split('@')[0] : 'وكيل معتمد';

    setTimeout(() => {
      setSuccessMessage('تم التحقق بنجاح! جاري التوجيه...');
      setTimeout(() => {
        setUser({
          name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
          identifier: identifier,
          role: 'manager',
          email: isEmail ? identifier : `${identifier}@scoopagency.online`,
          phone: !isEmail ? identifier : '+966 50 123 4567',
          badge: 'القلادة الذهبية',
          status: 'نشط',
          joinDate: 'سبتمبر 2026'
        });
        if (setActiveTab) setActiveTab('home');
      }, 400);
    }, 500);
  };

  return (
    <div className="login-screen-wrapper">
      {/* Ambient lighting glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '380px',
          background: 'radial-gradient(ellipse at center, rgba(233, 30, 99, 0.16), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '15%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Floating Controls */}
      {onToggleThemeMode && (
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '20px',
            zIndex: 10
          }}
        >
          <button
            type="button"
            onClick={onToggleThemeMode}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}
            title={themeMode === 'dark' ? 'التحويل للوضع الفاتح' : 'التحويل للوضع الداكن'}
          >
            {themeMode === 'dark' ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#8b5cf6" />}
          </button>
        </div>
      )}

      {/* Main Ultra-Compact Login Card (Fits 100vh on desktop without scrolling) */}
      <div className="glass-card login-card-compact">
        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '14px' }}>
          {/* Verified Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 12px',
              borderRadius: '9999px',
              background: 'rgba(233, 30, 99, 0.12)',
              border: '1px solid rgba(233, 30, 99, 0.35)',
              color: '#e91e63',
              fontSize: '11px',
              fontWeight: '800',
              marginBottom: '10px'
            }}
          >
            <ShieldCheck size={12} />
            <span>المنصة الرسمية المعتمدة | BIGO LIVE</span>
          </div>

          {/* Official Scoop Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <ScopeLogo size="md" showText={false} layout="column" />
          </div>

          <h1
            style={{
              fontSize: '20px',
              fontWeight: '900',
              color: 'var(--text-main)',
              marginBottom: '3px',
              letterSpacing: '-0.01em'
            }}
          >
            تسجيل دخول الوكلاء
          </h1>
          <p
            style={{
              fontSize: '12.5px',
              color: 'var(--text-muted)',
              lineHeight: '1.4',
              margin: '0 auto'
            }}
          >
            أدخل بيانات حسابك المعتمد لإدارة المذيعين ومتابعة العمليات
          </p>
        </div>

        {/* Feedback: Error Alert */}
        {errorMessage && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '8px 12px',
              borderRadius: '10px',
              fontSize: '12px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertCircle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Feedback: Success Alert */}
        {successMessage && (
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#6ee7b7',
              padding: '8px 12px',
              borderRadius: '10px',
              fontSize: '12px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Compact Form */}
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          {/* Input: Username / Email / Phone */}
          <div>
            <label
              style={{
                display: 'block',
                fontWeight: '700',
                fontSize: '12px',
                marginBottom: '4px',
                color: 'var(--text-main)'
              }}
            >
              البريد الإلكتروني أو رقم الهاتف
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                className="form-input"
                style={{
                  width: '100%',
                  paddingRight: '38px',
                  paddingLeft: '12px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: 'var(--text-main)',
                  fontSize: '13px',
                  outline: 'none'
                }}
                placeholder="name@example.com أو 0500000000"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                autoComplete="username"
              />
              <User
                size={16}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '12px',
                  color: 'var(--text-dim)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>

          {/* Input: Password */}
          <div>
            <label
              style={{
                display: 'block',
                fontWeight: '700',
                fontSize: '12px',
                marginBottom: '4px',
                color: 'var(--text-main)'
              }}
            >
              كلمة المرور
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="form-input"
                style={{
                  width: '100%',
                  paddingRight: '38px',
                  paddingLeft: '38px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: 'var(--text-main)',
                  fontSize: '13px',
                  outline: 'none'
                }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Lock
                size={16}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '12px',
                  color: 'var(--text-dim)',
                  pointerEvents: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '11px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
              marginTop: '1px'
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <input
                type="checkbox"
                style={{
                  width: '14px',
                  height: '14px',
                  accentColor: '#e91e63',
                  cursor: 'pointer'
                }}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>تذكر بياناتي</span>
            </label>

            <button
              type="button"
              onClick={() => setShowHelpModal(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#e91e63',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none'
              }}
            >
              نسيت كلمة المرور؟
            </button>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              marginTop: '4px',
              height: '42px',
              fontSize: '14px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              borderRadius: '11px',
              border: 'none',
              cursor: isLoading ? 'wait' : 'pointer',
              color: '#ffffff',
              background: 'linear-gradient(135deg, #e91e63 0%, #d81b60 60%, #f59e0b 100%)',
              boxShadow: '0 6px 20px rgba(233, 30, 99, 0.35)',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.8 : 1
            }}
          >
            {isLoading ? (
              <>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#ffffff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }}
                />
                <span>جاري الدخول...</span>
              </>
            ) : (
              <>
                <LogIn size={16} />
                <span>تسجيل الدخول</span>
              </>
            )}
          </button>
        </form>

        {/* Security Assurance Badges */}
        <div
          style={{
            marginTop: '12px',
            paddingTop: '8px',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontSize: '10.5px',
            color: 'var(--text-dim)'
          }}
        >
          <span>🔒 تشفير 256-Bit SSL</span>
          <span>•</span>
          <span>⚡ خوادم سحابية محمية</span>
          <span>•</span>
          <span>⭐ معتمد BIGO LIVE</span>
        </div>
      </div>

      {/* Discrete Bottom Copyright */}
      <div
        style={{
          marginTop: '10px',
          fontSize: '11px',
          color: 'var(--text-dim)',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        © 2026 Scoop Agency. جميع الحقوق محفوظة.
      </div>

      {/* Help / Password Reset Modal */}
      {showHelpModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '16px'
          }}
          onClick={() => setShowHelpModal(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '400px',
              width: '100%',
              padding: '24px',
              borderRadius: '18px',
              border: '1px solid rgba(233, 30, 99, 0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowHelpModal(false)}
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <HelpCircle size={36} color="#e91e63" style={{ marginBottom: '6px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '4px' }}>
                استعادة كلمة المرور
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                لأسباب أمنية، يتم إعادة تعيين كلمات المرور حصراً عبر المشرف المباشر أو إدارة وكالة Scoop.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '10px',
                padding: '12px',
                fontSize: '12px',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}
            >
              <div>📞 <strong>واتساب الدعم الفني:</strong> عبر مشرف الوكالة المباشر</div>
              <div>🌐 <strong>الموقع الرسمي:</strong> scoopagency.online</div>
            </div>

            <button
              type="button"
              onClick={() => setShowHelpModal(false)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '9px',
                border: 'none',
                background: '#e91e63',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              حسناً، فهمت ذلك
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
