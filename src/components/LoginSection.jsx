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
  Zap,
  Sun,
  Moon,
  KeyRound,
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
      setSuccessMessage('تم التحقق بنجاح! جاري التوجيه إلى المنظومة...');
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
      }, 500);
    }, 600);
  };

  // 1-Click Quick Demo Login handler
  const handleQuickDemoLogin = () => {
    setIdentifier('admin@scoopagency.online');
    setPassword('••••••••');
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setSuccessMessage('مرحباً بك! تم تسجيل الدخول كـ مدير معتمد...');
      setTimeout(() => {
        setUser({
          name: 'مدير وكالة سكوب',
          identifier: 'admin@scoopagency.online',
          role: 'owner',
          email: 'admin@scoopagency.online',
          phone: '+966 50 888 9999',
          badge: 'الماسة الملكية',
          status: 'معتمد رسمياً',
          joinDate: '2026'
        });
        if (setActiveTab) setActiveTab('home');
      }, 500);
    }, 600);
  };

  return (
    <div
      className="login-page-wrapper"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '32px 16px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows for elite SaaS aesthetic */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '550px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(233, 30, 99, 0.16), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.09), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Floating Controls: Theme Switch & Admin Shortcut */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          right: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (setActiveTab) {
              setActiveTab('admin');
              window.location.hash = '#admin';
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--glass-border)',
            padding: '8px 14px',
            borderRadius: '9999px',
            color: 'var(--text-muted)',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#f59e0b';
            e.currentTarget.style.color = '#f59e0b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
          title="الدخول المباشر إلى لوحة التحكم الإدارية"
        >
          <KeyRound size={14} />
          <span>لوحة التحكم (Admin)</span>
        </button>

        {onToggleThemeMode && (
          <button
            type="button"
            onClick={onToggleThemeMode}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
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
            {themeMode === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#8b5cf6" />}
          </button>
        )}
      </div>

      {/* Main Luxury Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          zIndex: 1,
          margin: 'auto 0'
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: '42px 34px',
            borderRadius: '26px',
            border: '1px solid rgba(233, 30, 99, 0.28)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.55), 0 0 35px rgba(233, 30, 99, 0.12)',
            backdropFilter: 'blur(20px)',
            position: 'relative'
          }}
        >
          {/* Official Agency Badge */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(233, 30, 99, 0.12)',
                border: '1px solid rgba(233, 30, 99, 0.35)',
                color: '#e91e63',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.03em',
                marginBottom: '16px'
              }}
            >
              <ShieldCheck size={14} />
              <span>المنظومة الرسمية المعتمدة | BIGO LIVE</span>
            </div>

            {/* Scoop Official Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <ScopeLogo size="xl" showText={false} layout="column" />
            </div>

            <h1
              style={{
                fontSize: '24px',
                fontWeight: '900',
                color: 'var(--text-main)',
                marginBottom: '6px',
                letterSpacing: '-0.02em'
              }}
            >
              تسجيل دخول الوكلاء
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                maxWidth: '360px',
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
                padding: '12px 14px',
                borderRadius: '14px',
                fontSize: '13px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
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
                padding: '12px 14px',
                borderRadius: '14px',
                fontSize: '13px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Input: Username / Email / Phone */}
            <div>
              <label
                className="form-label"
                style={{
                  display: 'block',
                  fontWeight: '700',
                  fontSize: '13px',
                  marginBottom: '8px',
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
                    paddingRight: '44px',
                    paddingLeft: '14px',
                    height: '48px',
                    borderRadius: '14px',
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  placeholder="name@example.com أو 0500000000"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoComplete="username"
                />
                <User
                  size={18}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '15px',
                    color: 'var(--text-dim)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>

            {/* Input: Password */}
            <div>
              <label
                className="form-label"
                style={{
                  display: 'block',
                  fontWeight: '700',
                  fontSize: '13px',
                  marginBottom: '8px',
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
                    paddingRight: '44px',
                    paddingLeft: '44px',
                    height: '48px',
                    borderRadius: '14px',
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <Lock
                  size={18}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '15px',
                    color: 'var(--text-dim)',
                    pointerEvents: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '14px',
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
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '13px'
              }}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    width: '16px',
                    height: '16px',
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
                  fontSize: '13px',
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
                marginTop: '6px',
                padding: '14px 20px',
                fontSize: '15px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                borderRadius: '14px',
                border: 'none',
                cursor: isLoading ? 'wait' : 'pointer',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #e91e63 0%, #d81b60 60%, #f59e0b 100%)',
                boxShadow: '0 8px 24px rgba(233, 30, 99, 0.35)',
                transition: 'all 0.25s ease',
                opacity: isLoading ? 0.8 : 1
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isLoading ? (
                <>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#ffffff',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }}
                  />
                  <span>جاري تسجيل الدخول...</span>
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>دخول المنظومة</span>
                </>
              )}
            </button>
          </form>

          {/* Quick 1-Click Demo Login Divider & Button */}
          <div style={{ marginTop: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontWeight: '600' }}>
                أو الدخول السريع
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
            </div>

            <button
              type="button"
              onClick={handleQuickDemoLogin}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px 18px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                background: 'rgba(245, 158, 11, 0.08)',
                color: '#f59e0b',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.16)';
                e.currentTarget.style.borderColor = '#f59e0b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
              }}
            >
              <Zap size={16} />
              <span>دخول تجريبي فوري (مدير الوكالة المعتمد)</span>
            </button>
          </div>

          {/* Security Assurance Badges */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              fontSize: '11px',
              color: 'var(--text-dim)'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              🔒 تشفير 256-Bit SSL
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              ⚡ خوادم سحابية محمية
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              ⭐ معتمد من Bigo Live
            </span>
          </div>
        </div>
      </div>

      {/* Discrete Bottom Copyright */}
      <div
        style={{
          marginTop: '20px',
          fontSize: '12px',
          color: 'var(--text-dim)',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        © 2026 Scoop Agency. جميع الحقوق محفوظة لمنظومة إدارة وتطوير الوكالات.
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
              maxWidth: '420px',
              width: '100%',
              padding: '28px',
              borderRadius: '20px',
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
                top: '16px',
                left: '16px',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <HelpCircle size={40} color="#e91e63" style={{ marginBottom: '8px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '6px' }}>
                استعادة كلمة المرور
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                لأسباب أمنية ولحماية حسابات الوكلاء والمذيعين، يتم إعادة تعيين كلمات المرور حصراً عبر المشرف المسؤول أو إدارة وكالة Scoop.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '13px',
                lineHeight: '1.7',
                marginBottom: '20px'
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
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                background: '#e91e63',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer'
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
