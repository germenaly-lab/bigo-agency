import React, { useState } from 'react';
import {
  LogIn,
  Lock,
  User,
  Eye,
  EyeOff,
  LogOut,
  ArrowLeft,
  Users,
  BarChart3,
  DollarSign,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';

export default function LoginSection({ user, setUser, setActiveTab }) {
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
    }, 600);
  };

  const handleLogout = () => {
    setUser(null);
    setIdentifier('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  // If user is already logged in, display the User Dashboard Panel
  if (user) {
    return (
      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-title-wrap">
          <h2 className="section-title">
            <User className="section-title-icon" size={28} />
            <span>لوحة تحكم الحساب - {user.name}</span>
          </h2>
          <button
            className="action-btn-secondary"
            onClick={handleLogout}
            style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
          >
            <LogOut size={16} />
            <span>تسجيل الخروج</span>
          </button>
        </div>

        {/* Dashboard Profile Card */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              paddingBottom: '24px',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: '900',
                  color: '#0b0f19',
                  boxShadow: '0 0 20px rgba(245,158,11,0.4)'
                }}
              >
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800' }}>{user.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  الحساب: <span style={{ color: '#06b6d4', fontWeight: '700' }}>{user.identifier}</span> | الصفة: <span style={{ color: '#f59e0b', fontWeight: '700' }}>مدير وكالة</span>
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(245,158,11,0.15)',
                padding: '10px 18px',
                borderRadius: '9999px',
                border: '1px solid #f59e0b'
              }}
            >
              <Award size={20} color="#f59e0b" />
              <span style={{ fontWeight: '800', color: '#f59e0b', fontSize: '14px' }}>
                حساب معتمد - {user.badge}
              </span>
            </div>
          </div>

          {/* Quick Shortcuts to the 5 Categories */}
          <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>
            الوصول السريع للأقسام الرئيسية:
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              marginBottom: '24px'
            }}
          >
            <button
              className="glass-card"
              onClick={() => setActiveTab('agency-management')}
              style={{
                padding: '16px',
                textAlign: 'right',
                border: '1px solid rgba(6,182,212,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'inherit',
                color: 'inherit'
              }}
            >
              <Users size={22} color="#06b6d4" />
              <div>
                <div style={{ fontWeight: '800', fontSize: '15px' }}>إدارة الوكالة</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>تسجيل المذيعين والمهام</div>
              </div>
            </button>

            <button
              className="glass-card"
              onClick={() => setActiveTab('points-usage')}
              style={{
                padding: '16px',
                textAlign: 'right',
                border: '1px solid rgba(245,158,11,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'inherit',
                color: 'inherit'
              }}
            >
              <Sparkles size={22} color="#f59e0b" />
              <div>
                <div style={{ fontWeight: '800', fontSize: '15px' }}>استخدام النقاط</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>تفاصيل وضوابط النقاط</div>
              </div>
            </button>

            <button
              className="glass-card"
              onClick={() => setActiveTab('bean-withdrawal')}
              style={{
                padding: '16px',
                textAlign: 'right',
                border: '1px solid rgba(139,92,246,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'inherit',
                color: 'inherit'
              }}
            >
              <DollarSign size={22} color="#8b5cf6" />
              <div>
                <div style={{ fontWeight: '800', fontSize: '15px' }}>سحب الفاصوليا</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>وكيل الشحن وطريقة السحب</div>
              </div>
            </button>

            <button
              className="glass-card"
              onClick={() => setActiveTab('salaries')}
              style={{
                padding: '16px',
                textAlign: 'right',
                border: '1px solid rgba(16,185,129,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'inherit',
                color: 'inherit'
              }}
            >
              <BarChart3 size={22} color="#10b981" />
              <div>
                <div style={{ fontWeight: '800', fontSize: '15px' }}>الرواتب</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>نظام الاحتساب الجديد</div>
              </div>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button className="action-btn-primary" onClick={() => setActiveTab('home')}>
              <span>العودة للصفحة الرئيسية</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Login Form Screen (Login Only - No Registration, No Bigo ID)
  return (
    <section style={{ maxWidth: '480px', margin: '40px auto' }}>
      <div className="glass-card" style={{ padding: '38px', border: '1px solid rgba(245,158,11,0.35)' }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <ScopeLogo size="lg" showText={true} layout="column" />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '900', marginTop: '10px', marginBottom: '6px' }}>
            تسجيل الدخول
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            أدخل بيانات الدخول للمتابعة إلى لوحة إدارة الوكالة
          </p>
        </div>

        {errorMessage && (
          <div
            style={{
              background: 'rgba(239,68,68,0.15)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '12px 14px',
              borderRadius: '10px',
              fontSize: '13px',
              marginBottom: '18px',
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
              borderRadius: '10px',
              fontSize: '13px',
              marginBottom: '18px',
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
            <label className="form-label" style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>
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
            <label className="form-label" style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>
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
              gap: '8px'
            }}
          >
            <LogIn size={18} />
            <span>تسجيل الدخول</span>
          </button>
        </form>
      </div>
    </section>
  );
}
