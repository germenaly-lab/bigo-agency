import React from 'react';
import {
  Sparkles,
  Coins,
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { defaultPointsUsageItems } from '../data/siteData';
import { resolveIcon } from '../utils/iconHelper';

export default function PointsUsageSection({ onBackToHome, setActiveTab, items = defaultPointsUsageItems }) {
  const currentItems = items && items.length > 0 ? items : defaultPointsUsageItems;

  return (
    <section style={{ maxWidth: '1080px', margin: '0 auto' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', fontSize: '12.5px' }}>
        <button
          onClick={onBackToHome}
          style={{
            background: 'none',
            border: 'none',
            color: '#f59e0b',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span>الرئيسية</span>
        </button>
        <span style={{ color: 'var(--text-dim)' }}>/</span>
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>استخدام النقاط</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.14), rgba(22,30,49,0.88))',
          border: '1px solid rgba(245,158,11,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          borderRadius: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(245,158,11,0.35)',
              flexShrink: 0
            }}
          >
            <Sparkles size={24} color="#0b0f19" />
          </div>
          <div>
            <h1 style={{ fontSize: '21px', fontWeight: '900', marginBottom: '3px' }}>
              استخدام النقاط (Points Usage)
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              دليل إدارة رصيد نقاط الوكالة، خصائص الدعم، الترويج، والخدمات الرسمية
            </p>
          </div>
        </div>

        <button
          onClick={onBackToHome}
          className="action-btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '10px', fontSize: '12.5px' }}
        >
          <ArrowRight size={14} />
          <span>الرجوع للأقسام</span>
        </button>
      </div>

      {/* Main Points Intro Card: 2 Cards (تحقيق التارجت الشهري & مكافأة الاستقطاب والنمو) */}
      <div className="glass-card" style={{ padding: '24px 26px', marginBottom: '28px', borderRadius: '18px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#f59e0b', marginBottom: '10px' }}>
          ما هي نقاط الوكالة وكيف يتم اكتسابها؟
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
          نقاط الوكالة هي رصيد تحفيزي وتراكمي يُمنح للوكالات المعتمدة بناءً على نشاط المذيعين ومجموع الفاصوليا المحققة شهرياً. تُعد هذه النقاط بمثابة مقياس قوة الوكالة وأداة أساسية لدعم صناع المحتوى وتنمية الشبكة.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <div className="glass-card" style={{ padding: '18px', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <TrendingUp size={20} color="#f59e0b" />
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>تحقيق التارجت الشهري</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              تكتسب الوكالة نقاطاً إضافية كلما تجاوز مذيعوها مستويات التارجت المحددة وساعات البث المطلوبة.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '18px', border: '1px solid rgba(6,182,212,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Coins size={20} color="#06b6d4" />
              <h3 style={{ fontSize: '16px', fontWeight: '800' }}>مكافأة الاستقطاب والنمو</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              حوافز نقاط خاصة عند ضم مذيعين متميزين جدد وتحقيقهم لأول تارجت ناجح في شهرهم الأول.
            </p>
          </div>
        </div>
      </div>

      {/* New Section: نقاط الوكالة - الخصائص والخدمات المتاحة */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0, color: 'var(--text-main)' }}>
              نقاط الوكالة
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
              يمكنك طلب الخصائص التالية من خلال نقاط الوكالة:
            </p>
          </div>

          <span
            style={{
              fontSize: '12px',
              fontWeight: '800',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fbbf24'
            }}
          >
            {currentItems.length} خاصية وخدمة متاحة
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}
        >
          {currentItems.map((m, idx) => {
            const Icon = resolveIcon(m.icon, Sparkles);
            const badgeText = m.pointsCost || (m.points ? `${m.points} نقطة` : '');
            return (
              <div
                key={m.id || idx}
                className="glass-card"
                style={{
                  padding: '22px',
                  border: `1px solid ${m.color || '#f59e0b'}33`,
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '14px',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '8px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: `${m.color || '#f59e0b'}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={22} color={m.color || '#f59e0b'} />
                    </div>

                    {badgeText && (
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '800',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: `${m.color || '#f59e0b'}18`,
                          border: `1px solid ${m.color || '#f59e0b'}44`,
                          color: m.color || '#f59e0b',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {badgeText}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px', lineHeight: '1.5' }}>
                    {m.title}
                  </h3>

                  {m.desc && (
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                      {m.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
