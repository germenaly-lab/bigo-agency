import React from 'react';
import {
  ShieldCheck,
  Users,
  Sparkles,
  CreditCard,
  DollarSign,
  Tv,
  ArrowLeft,
  TrendingUp,
  Activity,
  Award,
  Zap
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';
import { siteInfo as defaultSiteInfo } from '../data/siteData';

export default function Hero({ setActiveTab, siteInfo: propSiteInfo }) {
  const currentSiteInfo = propSiteInfo || defaultSiteInfo;

  return (
    <section
      className="hero-card"
      style={{
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '28px',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        background: 'linear-gradient(135deg, rgba(22, 30, 52, 0.95) 0%, rgba(13, 19, 36, 0.98) 100%)',
        boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 0 30px rgba(233, 30, 99, 0.1)',
        marginBottom: '36px'
      }}
    >
      {/* Dynamic Ambient Mesh Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        {/* Right / Main Content Area */}
        <div>
          {/* Top Verified Agency Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#f59e0b',
              fontSize: '11.5px',
              fontWeight: '800',
              marginBottom: '14px'
            }}
          >
            <ShieldCheck size={13} />
            <span>وكالة سكوب SCOOP الرسمية | BIGO LIVE 2026</span>
          </div>

          {/* Agency Logo Row */}
          <div style={{ marginBottom: '14px' }}>
            <ScopeLogo size="md" layout="row" />
          </div>

          {/* Main Hero Headline */}
          <h1
            className="hero-title"
            style={{
              fontSize: '26px',
              fontWeight: '900',
              lineHeight: '1.3',
              marginBottom: '10px',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffffff 40%, #f59e0b 80%, #e91e63 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {currentSiteInfo.subtitle || 'المنصة الشاملة لإدارة وتطوير وكالات البث المباشر'}
          </h1>

          {/* Executive Subtitle */}
          <p
            className="hero-desc"
            style={{
              fontSize: '13.5px',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              marginBottom: '20px',
              maxWidth: '600px'
            }}
          >
            {currentSiteInfo.description ||
              'المنصة الرقمية الرائدة لإدارة المذيعين، رصد ساعات وأيام البث المعتمدة، احتساب العمولات والرواتب بدقة متناهية، ومتابعة سحب الفاصوليا بأعلى معايير الشفافية.'}
          </p>

          {/* Interactive Action Buttons */}
          <div
            className="hero-actions"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '24px'
            }}
          >
            <button
              className="action-btn-primary"
              onClick={() => setActiveTab('agency-management')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #e91e63 0%, #d81b60 60%, #f59e0b 100%)',
                boxShadow: '0 6px 20px rgba(233, 30, 99, 0.35)'
              }}
            >
              <Users size={15} />
              <span>إدارة الوكالة والمذيعين</span>
              <ArrowLeft size={14} />
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('salaries')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 15px',
                borderRadius: '12px',
                fontSize: '12.5px',
                fontWeight: '700',
                borderColor: 'rgba(16, 185, 129, 0.4)',
                color: '#10b981'
              }}
            >
              <DollarSign size={15} />
              <span>الرواتب والأرباح</span>
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('bean-withdrawal')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 15px',
                borderRadius: '12px',
                fontSize: '12.5px',
                fontWeight: '700',
                borderColor: 'rgba(139, 92, 246, 0.4)',
                color: '#a78bfa'
              }}
            >
              <CreditCard size={15} />
              <span>سحب الفاصوليا</span>
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('points-usage')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 15px',
                borderRadius: '12px',
                fontSize: '12.5px',
                fontWeight: '700',
                borderColor: 'rgba(245, 158, 11, 0.4)',
                color: '#f59e0b'
              }}
            >
              <Sparkles size={15} />
              <span>استخدام النقاط</span>
            </button>
          </div>

          {/* Operational Metrics Strip (عدادات الأداء الاحترافي) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <div style={{ fontSize: '17px', fontWeight: '900', color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Users size={14} />
                <span>+500</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
                مذيع ومذيعة معتمدين
              </div>
            </div>

            <div>
              <div style={{ fontSize: '17px', fontWeight: '900', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Sparkles size={14} />
                <span>+25M</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
                فاصوليا محولة شهرياً
              </div>
            </div>

            <div>
              <div style={{ fontSize: '17px', fontWeight: '900', color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Zap size={14} />
                <span>24/7</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
                سحب فوري ودعم مباشر
              </div>
            </div>

            <div>
              <div style={{ fontSize: '17px', fontWeight: '900', color: '#ec4899', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Award size={14} />
                <span>Top 1%</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px' }}>
                معايير الجودة والشفافية
              </div>
            </div>
          </div>
        </div>

        {/* Left / Visual Showcase Frame */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.4), rgba(245, 158, 11, 0.3))',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
            }}
          >
            <img
              src="/images/image_1.png"
              alt="Scoop Agency Portal"
              className="hero-img-preview"
              style={{
                borderRadius: '18px',
                width: '100%',
                maxHeight: '340px',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Floating Live Status Badge */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '9999px',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6ee7b7',
                fontSize: '12px',
                fontWeight: '700',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              <span>النظام متصل ومحدث 2026</span>
            </div>

            {/* Floating Bottom Agency Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(233, 30, 99, 0.4)',
                borderRadius: '14px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '800',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
              }}
            >
              <ShieldCheck size={16} color="#e91e63" />
              <span>وكالة SCOOP المعتمدة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
