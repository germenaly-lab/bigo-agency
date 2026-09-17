import React from 'react';
import {
  Tv,
  Sun,
  Mic,
  Video,
  Wifi,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HeartHandshake
} from 'lucide-react';
import { defaultLiveQualityItems } from '../data/siteData';
import { resolveIcon } from '../utils/iconHelper';

export default function LiveQualitySection({ onBackToHome, setActiveTab, pillars = defaultLiveQualityItems }) {
  const currentPillars = pillars && pillars.length > 0 ? pillars : defaultLiveQualityItems;

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
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>كواليتي اللايف</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(22,30,49,0.85))',
          border: '1px solid rgba(236,72,153,0.3)',
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
              background: 'linear-gradient(135deg, #ec4899, #db2777)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(236,72,153,0.35)',
              flexShrink: 0
            }}
          >
            <Tv size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '21px', fontWeight: '900', marginBottom: '3px' }}>
              كواليتي اللايف (Live Quality Standards)
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              المعايير المعتمدة لجودة البث، تقنيات الصوت والإضاءة، وسياسات البث الآمن
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

      {/* Pillars Grid */}
      <h2 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '16px' }}>
        ركائز الجودة المعتمدة للبث المباشر:
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        {currentPillars.map((p, idx) => {
          const Icon = resolveIcon(p.icon, Tv);
          return (
            <div key={p.id || idx} className="glass-card" style={{ padding: '24px', border: `1px solid ${p.color || '#ec4899'}33` }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${p.color || '#ec4899'}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Icon size={24} color={p.color || '#ec4899'} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Strict Safety Rules & Restrictions Box */}
      <div
        className="glass-card"
        style={{
          padding: '28px',
          border: '1px solid rgba(239,68,68,0.3)',
          background: 'linear-gradient(135deg, rgba(239,68,68,0.08), transparent)',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <ShieldAlert size={26} color="#ef4444" />
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ef4444' }}>
            المخالفات والتحذيرات الصارمة (سياسة السلامة الرسمية):
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              <strong>حظر البث أثناء القيادة:</strong> يمنع منعاً باتاً فتح البث المباشر أثناء قيادة أي مركبة، ويؤدي للمخالفة الفورية وحظر الحساب.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              <strong>منع الشاشات الفارغة والبث الصامت:</strong> ترك الكاميرا موجهة نحو سقف أو جدار دون ظهور المذيع يعتبر مخالفة لشروط الساعات المعتمدة.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '3px' }} />
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              <strong>الالتزام بالآداب والأخلاقيات:</strong> منع أي محتوى يحرض على العنف أو الكراهية أو يخرق السياسات العامة المنظمة للمنصة.
            </span>
          </div>
        </div>
      </div>

      {/* Host Evaluation Checklist */}
      <div className="glass-card" style={{ padding: '28px', border: '1px solid rgba(245,158,11,0.3)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '14px' }}>
          قائمة الفحص السريعة قبل بدء البث اليومي (Checklist):
        </h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <span>شحن الهاتف بالكامل أو توصيله بمصدر طاقة ثابت ومروحة تبريد لمنع السخونة.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <span>تفعيل وضع عدم الإزعاج (Do Not Disturb) لمنع توقف البث بسبب الاتصالات الواردة.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <span>اختيار عنوان جذاب وصورة غلاف بجودة عالية تعبر عن محتوى البث بدقة.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
