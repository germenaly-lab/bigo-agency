import React, { useState } from 'react';
import {
  DollarSign,
  Calculator,
  ArrowRight,
  Clock,
  CheckCircle2,
  TableProperties,
  Award,
  Zap,
  TrendingUp,
  Image as ImageIcon,
  ExternalLink,
  X,
  Sparkles,
  Info
} from 'lucide-react';

export const officialSalaryTiers = [
  {
    tier: 'T1',
    name: 'المستوى الأول (T1)',
    targetDisplay: '6,000,000 +',
    minBeans: 6000000,
    maxBeans: Infinity,
    baseRatio: 125,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 130,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.25)',
    badge: 'الماسة الملكية',
    desc: 'أعلى شريحة ربحية في منظومة البيجو'
  },
  {
    tier: 'T2',
    name: 'المستوى الثاني (T2)',
    targetDisplay: '1,000,000 - 5,999,999',
    minBeans: 1000000,
    maxBeans: 5999999,
    baseRatio: 123,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 128,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
    badge: 'كبار النجوم',
    desc: 'تارجت المليون فاصوليا فأكثر'
  },
  {
    tier: 'T3',
    name: 'المستوى الثالث (T3)',
    targetDisplay: '100,000 - 999,999',
    minBeans: 100000,
    maxBeans: 999999,
    baseRatio: 120,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 125,
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.25)',
    badge: 'الفئة الذهبية',
    desc: 'تارجت 100 ألف حتى مليون إلا واحد'
  },
  {
    tier: 'T4',
    name: 'المستوى الرابع (T4)',
    targetDisplay: '10,000 - 99,999',
    minBeans: 10000,
    maxBeans: 99999,
    baseRatio: 118,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 123,
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)',
    badge: 'الفئة الفضية',
    desc: 'تارجت 10 آلاف حتى 100 ألف'
  },
  {
    tier: 'T5',
    name: 'المستوى الخامس (T5)',
    targetDisplay: '2,000 - 9,999',
    minBeans: 2000,
    maxBeans: 9999,
    baseRatio: 113,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 118,
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    badge: 'فئة الانطلاقة',
    desc: 'الحد الأدنى لاستحقاق المرتبات (2,000 فاصوليا)'
  }
];

export default function SalarySection({ onBackToHome }) {
  const [inputBeans, setInputBeans] = useState('100000');
  const [hoursCompleted, setHoursCompleted] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);

  // Dynamic Calculation Logic
  const numericBeans = parseFloat(inputBeans) || 0;

  // Find matching tier
  const matchedTier = officialSalaryTiers.find(
    (t) => numericBeans >= t.minBeans && numericBeans <= t.maxBeans
  );

  // Conversion: 210 beans = 1 USD
  const baseUsd = numericBeans / 210;
  const appliedRatio = matchedTier
    ? matchedTier.baseRatio + (hoursCompleted ? matchedTier.bonusRatio : 0)
    : 0;
  const estimatedPayoutUsd = matchedTier ? (baseUsd * (appliedRatio / 100)) : 0;

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '36px' }}>
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
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>الرواتب</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(22,30,49,0.85))',
          border: '1px solid rgba(16,185,129,0.3)',
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(16,185,129,0.35)',
              flexShrink: 0
            }}
          >
            <DollarSign size={24} color="#ffffff" />
          </div>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '9999px',
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.35)',
                color: '#10b981',
                fontSize: '11px',
                fontWeight: '800',
                marginBottom: '6px'
              }}
            >
              <Zap size={12} />
              <span>سيستم المرتبات الشهري الرسمي المعتمد 2026</span>
            </div>
            <h1 style={{ fontSize: '21px', fontWeight: '900', marginBottom: '3px' }}>
              سيستم مرتبات البيجو الشهري (Bigo Live Salary System)
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              جدول شرائح نسب أرباح المذيعين، تارجت الفاصوليا، الساعات المطلوبة، وحاسبة العوائد التقديرية
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowImageModal(true)}
            className="action-btn-secondary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              borderColor: 'rgba(245, 158, 11, 0.4)',
              color: '#f59e0b',
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '12.5px',
              fontWeight: '700'
            }}
          >
            <ImageIcon size={14} />
            <span>عرض صورة الجدول الأصلية</span>
          </button>

          <button
            onClick={onBackToHome}
            className="action-btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '10px', fontSize: '12.5px' }}
          >
            <ArrowRight size={14} />
            <span>الرجوع للأقسام</span>
          </button>
        </div>
      </div>

      {/* Core Rules & Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '14px',
          marginBottom: '26px'
        }}
      >
        <div className="glass-card" style={{ padding: '18px', borderRadius: '15px', border: '1px solid rgba(245,158,11,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Award size={18} color="#f59e0b" />
            <h3 style={{ fontSize: '14.5px', fontWeight: '800' }}>نسب المذيعين ($)</h3>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            تبدأ النسبة الأساسية من <strong>113%</strong> وتصل حتى <strong>125%</strong> حسب الشريحة وتارجت الفاصوليا المحققة.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '18px', borderRadius: '15px', border: '1px solid rgba(6,182,212,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Clock size={18} color="#06b6d4" />
            <h3 style={{ fontSize: '14.5px', fontWeight: '800' }}>الساعات المطلوبة شهرياً</h3>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            الحد الأدنى المطلوب لجميع الفئات هو <strong>20 ساعة بث</strong> معتمدة شهرياً لاستحقاق النسبة الإضافية.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '18px', borderRadius: '15px', border: '1px solid rgba(16,185,129,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Sparkles size={18} color="#10b981" />
            <h3 style={{ fontSize: '14.5px', fontWeight: '800' }}>بونص إضافي (+5%)</h3>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            يحصل المذيع على <strong>5% إضافية</strong> فور إتمام الساعات المطلوبة، لتصل أقصى نسبة استحقاق إلى <strong>130%</strong>!
          </p>
        </div>
      </div>

      {/* Main Official Salary Table */}
      <div className="glass-card" style={{ padding: '24px 26px', marginBottom: '28px', borderRadius: '18px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TableProperties size={21} color="#10b981" />
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '900' }}>
                جدول سيستم مرتبات البيجو الشهري الرسمي
              </h2>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                البيانات الرسمية المعتمدة وفقاً للجدول الصادر
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: '11px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(16,185,129,0.15)',
              color: '#10b981',
              fontWeight: '800',
              border: '1px solid rgba(16,185,129,0.3)'
            }}
          >
            نظام الرواتب النشط والمعتمد
          </span>
        </div>

        {/* Responsive Table Component */}
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table
            className="custom-table"
            style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            <thead>
              <tr style={{ background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.85) 0%, rgba(217, 119, 6, 0.85) 100%)', color: '#ffffff' }}>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  المستوى (الفئة)
                </th>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  تارجت الفاصوليا المحققة
                </th>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  نسبة المذيع الأساسية ($)
                </th>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  عدد الساعات المطلوبة شهرياً
                </th>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  نسبة المذيع الإضافية (عند تحقيق الساعات)
                </th>
                <th style={{ padding: '12px 14px', textAlign: 'center', fontSize: '12.5px', fontWeight: '800' }}>
                  إجمالي النسبة المستحقة
                </th>
              </tr>
            </thead>
            <tbody>
              {officialSalaryTiers.map((tier, idx) => (
                <tr
                  key={tier.tier}
                  style={{
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)',
                    borderBottom: '1px solid var(--glass-border)',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${tier.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  {/* المستوى الفئة */}
                  <td style={{ padding: '13px 14px', textAlign: 'center' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: `${tier.color}22`,
                        border: `1px solid ${tier.color}`,
                        color: tier.color,
                        fontWeight: '900',
                        fontSize: '13px'
                      }}
                    >
                      {tier.tier}
                    </span>
                  </td>

                  {/* تارجت الفاصوليا */}
                  <td style={{ padding: '13px 14px', textAlign: 'center', fontWeight: '800', fontSize: '13px', color: 'var(--text-main)' }}>
                    {tier.targetDisplay}
                  </td>

                  {/* نسبة المذيع الأساسية */}
                  <td style={{ padding: '13px 14px', textAlign: 'center', fontSize: '13.5px', fontWeight: '900', color: '#10b981' }}>
                    {tier.baseRatio}%
                  </td>

                  {/* عدد الساعات */}
                  <td style={{ padding: '13px 14px', textAlign: 'center', fontSize: '12px', color: 'var(--text-main)', fontWeight: '700' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={13} color="#06b6d4" />
                      <span>{tier.requiredHours} ساعة</span>
                    </span>
                  </td>

                  {/* النسبة الإضافية */}
                  <td style={{ padding: '13px 14px', textAlign: 'center', fontSize: '13px', fontWeight: '800', color: '#f59e0b' }}>
                    +{tier.bonusRatio}%
                  </td>

                  {/* إجمالي النسبة */}
                  <td style={{ padding: '13px 14px', textAlign: 'center' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 11px',
                        borderRadius: '7px',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))',
                        border: '1px solid #10b981',
                        color: '#6ee7b7',
                        fontWeight: '900',
                        fontSize: '13.5px'
                      }}
                    >
                      {tier.totalRatio}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Salary & Commission Calculator */}
      <div
        className="glass-card"
        style={{
          padding: '26px 28px',
          borderRadius: '20px',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          background: 'linear-gradient(135deg, rgba(22, 30, 49, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(16,185,129,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #10b981'
            }}
          >
            <Calculator size={19} color="#10b981" />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '900' }}>
              الحاسبة التفاعلية لمرتبات البيجو
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              أدخل كمية الفاصوليا لمعرفة المستوى المستحق ونسبة الأرباح والقيمة التقديرية بالدولار
            </p>
          </div>
        </div>

        {/* Preset Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', margin: '14px 0' }}>
          <span style={{ fontSize: '11.5px', color: 'var(--text-dim)', fontWeight: '700' }}>أمثلة سريعة:</span>
          {[
            { label: '5,000 (T5)', val: '5000' },
            { label: '50,000 (T4)', val: '50000' },
            { label: '250,000 (T3)', val: '250000' },
            { label: '1,500,000 (T2)', val: '1500000' },
            { label: '6,000,000 (T1)', val: '6000000' }
          ].map((preset) => (
            <button
              key={preset.val}
              type="button"
              onClick={() => setInputBeans(preset.val)}
              style={{
                padding: '4px 10px',
                borderRadius: '7px',
                border: inputBeans === preset.val ? '1px solid #10b981' : '1px solid var(--glass-border)',
                background: inputBeans === preset.val ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.04)',
                color: inputBeans === preset.val ? '#10b981' : 'var(--text-muted)',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Input & Options Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '14px'
          }}
        >
          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontWeight: '700',
                  fontSize: '12px',
                  marginBottom: '6px',
                  color: 'var(--text-main)'
                }}
              >
                تارجت الفاصوليا المحققة:
              </label>
              <input
                type="number"
                className="form-input"
                placeholder="أدخل عدد الفاصوليا، مثال: 100000"
                value={inputBeans}
                onChange={(e) => setInputBeans(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '10px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              />
            </div>

            {/* Hours Toggle */}
            <div
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={17} color="#06b6d4" />
                <div>
                  <div style={{ fontSize: '12.5px', fontWeight: '800' }}>
                    تحقيق 20 ساعة بث هذا الشهر
                  </div>
                  <div style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                    يمنحك +5% بونص إضافي على الراتب
                  </div>
                </div>
              </div>

              <input
                type="checkbox"
                checked={hoursCompleted}
                onChange={(e) => setHoursCompleted(e.target.checked)}
                style={{
                  width: '17px',
                  height: '17px',
                  accentColor: '#10b981',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>

          {/* Results Display Panel */}
          <div
            className="glass-card"
            style={{
              padding: '18px',
              borderRadius: '15px',
              background: matchedTier
                ? `linear-gradient(135deg, ${matchedTier.color}15, rgba(15,23,42,0.85))`
                : 'rgba(255,255,255,0.03)',
              border: matchedTier ? `1px solid ${matchedTier.color}` : '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px'
            }}
          >
            {matchedTier ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>المستوى المحقق</span>
                    <h4 style={{ fontSize: '17px', fontWeight: '900', color: matchedTier.color }}>
                      {matchedTier.name}
                    </h4>
                  </div>

                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: `${matchedTier.color}22`,
                      border: `1px solid ${matchedTier.color}`,
                      color: matchedTier.color,
                      fontSize: '11px',
                      fontWeight: '800'
                    }}
                  >
                    {matchedTier.badge}
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>النسبة الأساسية</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '900', color: '#10b981' }}>
                      {matchedTier.baseRatio}%
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>بونص الساعات</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '900', color: hoursCompleted ? '#f59e0b' : '#64748b' }}>
                      {hoursCompleted ? `+${matchedTier.bonusRatio}%` : '0%'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>النسبة الإجمالية</div>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#6ee7b7' }}>
                      {appliedRatio}%
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.15))',
                    border: '1px solid #10b981',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                    القيمة التقديرية للأرباح بالدولار ($):
                  </span>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff' }}>
                    ${estimatedPayoutUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#6ee7b7', marginTop: '3px', display: 'block' }}>
                    (بناءً على {numericBeans.toLocaleString()} فاصوليا ÷ 210 × {appliedRatio}%)
                  </span>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '18px 0' }}>
                <Info size={26} color="#f59e0b" style={{ margin: '0 auto 8px auto' }} />
                <h4 style={{ fontSize: '14.5px', fontWeight: '800', marginBottom: '3px' }}>
                  {numericBeans < 2000 ? 'أقل من الحد الأدنى للرواتب' : 'أدخل رقم الفاصوليا'}
                </h4>
                <p style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                  الحد الأدنى للبدء في شرائح الرواتب هو <strong>2,000 فاصوليا</strong> (شريحة T5).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {showImageModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '18px'
          }}
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '850px',
              width: '100%',
              padding: '20px',
              borderRadius: '20px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#f59e0b' }}>
                الصورة الأصلية لسيستم مرتبات البيجو الشهري
              </h3>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <img
              src="/images/salary-table.jpeg"
              alt="سيستم مرتبات البيجو الشهري"
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)'
              }}
            />

            <div style={{ textAlign: 'center', marginTop: '14px' }}>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="action-btn-secondary"
                style={{ padding: '8px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '12.5px' }}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
