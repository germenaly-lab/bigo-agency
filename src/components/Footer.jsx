import React from 'react';
import ScopeLogo from './ScopeLogo';

export default function Footer({ setActiveTab, user }) {
  if (!user) {
    return (
      <footer className="main-footer" style={{ marginTop: 'auto', padding: '24px 0' }}>
        <div className="footer-content" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            © 2026 Scope. جميع الحقوق محفوظة لمنظومة إدارة وتطوير الوكالات.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
          <ScopeLogo size="md" showText={true} />
        </div>

        <p style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '13px', color: 'var(--text-muted)', margin: '0 auto 16px auto', textAlign: 'center' }}>
          المنظومة الاحترافية لإدارة وتطوير وكالات البث المباشر، متابعة المذيعين، احتساب الرواتب، وسحب الفاصوليا.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '14px', marginBottom: '16px' }}>
          <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>الرئيسية</button>
          <button onClick={() => setActiveTab('agency-management')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>إدارة الوكالة</button>
          <button onClick={() => setActiveTab('points-usage')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>استخدام النقاط</button>
          <button onClick={() => setActiveTab('bean-withdrawal')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>سحب الفاصوليا</button>
          <button onClick={() => setActiveTab('salaries')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>الرواتب</button>
          <button onClick={() => setActiveTab('live-quality')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>كواليتي اللايف</button>
          <button onClick={() => { setActiveTab('admin'); window.location.hash = '#admin'; }} style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '700' }}>لوحة التحكم (Admin)</button>
        </div>

        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--glass-border)', width: '100%', fontSize: '12px', color: 'var(--text-dim)', textAlign: 'center' }}>
          © 2026 Scope. جميع الحقوق محفوظة لمنظومة إدارة وتطوير الوكالات.
        </div>
      </div>
    </footer>
  );
}
