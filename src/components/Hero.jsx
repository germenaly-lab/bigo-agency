import React from 'react';
import { ShieldCheck, Users, Sparkles, CreditCard, DollarSign, ArrowLeft } from 'lucide-react';
import ScopeLogo from './ScopeLogo';
import { siteInfo as defaultSiteInfo } from '../data/siteData';

export default function Hero({ setActiveTab, siteInfo: propSiteInfo }) {
  const currentSiteInfo = propSiteInfo || defaultSiteInfo;

  return (
    <section className="hero-card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-grid">
        <div>
          {/* Badge Tag */}
          <div className="hero-badge-tag" style={{ marginBottom: '14px' }}>
            <ShieldCheck size={16} />
            <span>منصة Scoop الرسمية لإدارة الوكالات</span>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <ScopeLogo size="lg" showText={true} layout="row" />
          </div>

          <h1 className="hero-title" style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px' }}>
            {currentSiteInfo.subtitle || 'المنصة المتكاملة لإدارة وتطوير وكالات البث المباشر'}
          </h1>
          <p className="hero-desc" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
            {currentSiteInfo.description || 'منظومة Scoop المتقدمة لإدارة المذيعين، احتساب الرواتب، متابعة النقاط، وسحب الأرباح بأعلى معايير الاحترافية.'}
          </p>

          <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              className="action-btn-primary"
              onClick={() => setActiveTab('agency-management')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Users size={18} />
              <span>إدارة الوكالة</span>
              <ArrowLeft size={16} />
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('bean-withdrawal')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <CreditCard size={18} />
              <span>سحب الفاصوليا</span>
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('points-usage')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Sparkles size={18} />
              <span>استخدام النقاط</span>
            </button>

            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('salaries')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <DollarSign size={18} />
              <span>الرواتب</span>
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/images/image_1.png"
            alt="Scope Portal Banner"
            className="hero-img-preview"
            style={{ borderRadius: '20px', maxHeight: '280px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
