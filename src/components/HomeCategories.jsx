import React from 'react';
import {
  Users,
  Sparkles,
  CreditCard,
  DollarSign,
  Tv,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';

export default function HomeCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'agency-management',
      title: 'إدارة الوكالة',
      subtitle: 'Agency Management',
      desc: 'تسجيل المذيعين الجدد، توقيع العقود، فك حظر الحسابات، وطلب ترند الفعاليات',
      image: '/images/image_30.png',
      icon: Users,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.25)',
      highlights: ['تسجيل مذيعين', 'فك حظر', 'طلب ترند']
    },
    {
      id: 'points-usage',
      title: 'استخدام النقاط',
      subtitle: 'Using Points',
      desc: 'آليات كسب النقاط، دعم المذيعين في الباتلات والفعاليات، واستبدال النقاط بالجوائز',
      image: '/images/image_3.png',
      icon: Sparkles,
      color: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      highlights: ['نقاط التارجت', 'دعم الباتلات', 'استبدال الجوائز']
    },
    {
      id: 'bean-withdrawal',
      title: 'سحب الفاصوليا',
      subtitle: 'Bean Withdrawal',
      desc: 'خدمات وكيل الشحن المعتمد، إجراءات السحب البنكي، ومواعيد ودورة التحويل الرسمية',
      image: '/images/image_10.png',
      icon: CreditCard,
      color: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.25)',
      highlights: ['وكيل شحن', 'طريقة السحب', 'التحويل البنكي']
    },
    {
      id: 'salaries',
      title: 'الرواتب',
      subtitle: 'Salaries System',
      desc: 'نظام الرواتب الجديد، ساعات وأيام البث المعتمدة، واحتساب عمولات الوكالة',
      image: '/images/image_4.png',
      icon: DollarSign,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.25)',
      highlights: ['الجدول الجديد', 'حاسبة الأرباح', 'عمولات الوكالة']
    },
    {
      id: 'live-quality',
      title: 'كواليتي اللايف',
      subtitle: 'Live Quality',
      desc: 'معايير جودة البث، ضبط الإضاءة والصوت، قواعد السلامة الصارمة، وفنون التفاعل',
      image: null, // Custom dynamic graphic badge
      icon: Tv,
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.25)',
      highlights: ['الإضاءة والصوت', 'استقرار الإنترنت', 'سياسة السلامة']
    }
  ];

  return (
    <section style={{ margin: '36px 0' }}>
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px' }}>
          الأقسام والخدمات الرئيسية
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          اختر أحد الأقسام الخمسة للاطلاع على الأدلة الإرشادية والخيارات والإجراءات التفصيلية
        </p>
      </div>

      {/* 5 Main Categories Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="glass-card category-card"
              style={{
                padding: '28px',
                cursor: 'pointer',
                border: `1px solid ${cat.glowColor}`,
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle top background accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`
                }}
              />

              <div>
                {/* Header with image/icon & badge number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px'
                  }}
                >
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.title}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        boxShadow: `0 8px 20px ${cat.glowColor}`
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${cat.color}, #db2777)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 20px ${cat.glowColor}`
                      }}
                    >
                      <Icon size={32} color="#ffffff" />
                    </div>
                  )}

                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: '800',
                      color: cat.color,
                      background: `${cat.color}15`,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      border: `1px solid ${cat.color}30`
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '900',
                    marginBottom: '4px',
                    color: 'var(--text-main)'
                  }}
                >
                  {cat.title}
                </h3>
                <span
                  style={{
                    fontSize: '13px',
                    color: cat.color,
                    fontWeight: '700',
                    display: 'block',
                    marginBottom: '10px'
                  }}
                >
                  {cat.subtitle}
                </span>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    marginBottom: '18px'
                  }}
                >
                  {cat.desc}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {cat.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-dim)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={10} color={cat.color} />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--glass-border)',
                  color: cat.color,
                  fontWeight: '800',
                  fontSize: '14px'
                }}
              >
                <span>دخول القسم وتصفح الخيارات</span>
                <ChevronLeft size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
