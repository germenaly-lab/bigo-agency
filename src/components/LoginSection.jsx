import React, { useState } from 'react';
import {
  LogIn,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';

export default function LoginSection({ user: _user, setUser, setActiveTab }) {
  const [showPassword, setShowPassword] = useState(false);

  // Login Form State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setErrorMessage('يرجى إدخال البريد الإلكتروني أو رقم الهاتف وكلمة المرور');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('تم تسجيل الدخول بنجاح! جاري التوجيه...');

    // Determine if email or phone
    const isEmail = identifier.includes('@');
    const displayName = isEmail ? identifier.split('@')[0] : 'وكيل معتمد';

    // Simulate Login Success
    setTimeout(() => {
      setUser({
        name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
        identifier: identifier,
        role: 'manager',
        email: isEmail ? identifier : `${identifier}@scope.agency`,
        phone: !isEmail ? identifier : '+966 50 000 0000',
        badge: 'القلادة الذهبية',
        status: 'نشط',
        joinDate: 'سبتمبر 2026'
      });
      if (setActiveTab) setActiveTab('home');
    }, 500);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        padding: '20px 16px'
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: '40px 32px',
          border: '1px solid rgba(245,158,11,0.35)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          borderRadius: '24px'
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <ScopeLogo size="lg" showText={true} layout="column" />
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '900', marginTop: '8px', marginBottom: '6px' }}>
            تسجيل الدخول
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            أدخل البريد الإلكتروني أو رقم الهاتف وكلمة المرور للمتابعة
          </p>
        </div>

        {errorMessage && (
          <div
            style={{
              background: 'rgba(239,68,68,0.15)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '12px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div
            style={{
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid #10b981',
              color: '#6ee7b7',
              padding: '12px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* ---------------- LOGIN FORM ONLY ---------------- */}
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label className="form-label" style={{ fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
              البريد الإلكتروني أو رقم الهاتف:
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
              <input
                type="text"
                required
                className="form-input"
                style={{ paddingRight: '44px' }}
                placeholder="name@example.com أو 0500000000"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="form-label" style={{ fontWeight: '700', fontSize: '13px', marginBottom: '8px' }}>
              كلمة المرور:
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="form-input"
                style={{ paddingRight: '44px', paddingLeft: '44px' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
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
                  color: '#94a3b8',
                  cursor: 'pointer'
                }}
                aria-label="إظهار/إخفاء كلمة المرور"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                style={{ accentColor: '#f59e0b' }}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>تذكر بيانات الدخول</span>
            </label>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('يرجى التواصل مع مدير النظام أو الدعم الفني لاستعادة كلمة المرور.');
              }}
              style={{ color: '#06b6d4', textDecoration: 'none' }}
            >
              نسيت كلمة المرور؟
            </a>
          </div>

          <button
            type="submit"
            className="action-btn-primary"
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '14px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              borderRadius: '12px'
            }}
          >
            <LogIn size={18} />
            <span>تسجيل الدخول</span>
          </button>
        </form>
      </div>
    </div>
  );
}
