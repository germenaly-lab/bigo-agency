import React from 'react';
import {
  Users,
  Sparkles,
  CreditCard,
  DollarSign,
  Tv,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';

export default function HomeCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'agency-management',
      title: 'إدارة الوكالة',
      subtitle: 'Agency Management',
      desc: 'تسجيل المذيعين الجدد، العقود، فك حظر الحسابات، وطلب ترند الفعاليات',
      image: '/images/image_30.png',
      icon: Users,
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      bgLight: 'rgba(6, 182, 212, 0.08)',
      tag: 'إدارة وتشغيل',
      highlights: ['تسجيل المذيعين', 'فك حظر الحساب', 'طلب ترند رسمي']
    },
    {
      id: 'points-usage',
      title: 'استخدام النقاط',
      subtitle: 'Points System',
      desc: 'آليات كسب وتوزيع النقاط، دعم المذيعين في الباتلات، ومكافآت التارجت',
      image: '/images/image_3.png',
      icon: Sparkles,
      color: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      bgLight: 'rgba(245, 158, 11, 0.08)',
      tag: 'تارجت ودعم',
      highlights: ['نقاط التارجت', 'دعم الباتلات', 'استبدال الجوائز']
    },
    {
      id: 'bean-withdrawal',
      title: 'سحب الفاصوليا',
      subtitle: 'Bean Withdrawal',
      desc: 'خدمات وكيل الشحن المعتمد، إجراءات السحب، والتحويل البنكي الآمن',
      image: '/images/image_10.png',
      icon: CreditCard,
      color: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.35)',
      bgLight: 'rgba(139, 92, 246, 0.08)',
      tag: 'عمليات مالية',
      highlights: ['وكيل شحن معتمد', 'طريقة السحب', 'التحويل البنكي']
    },
    {
      id: 'salaries',
      title: 'الرواتب والأرباح',
      subtitle: 'Salaries System',
      desc: 'جدول الرواتب المحدث، ساعات وأيام البث، واحتساب عمولات الوكالة بدقة',
      image: '/images/image_4.png',
      icon: DollarSign,
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      bgLight: 'rgba(16, 185, 129, 0.08)',
      tag: 'عوائد وأرباح',
      highlights: ['الجدول الرسمي', 'حاسبة الأرباح', 'عمولات الوكالة']
    },
    {
      id: 'live-quality',
      title: 'كواليتي اللايف',
      subtitle: 'Live Quality',
      desc: 'معايير جودة البث، ضبط الإضاءة والصوت، سياسات السلامة وفنون التفاعل',
      image: '/images/image_22.png',
      icon: Tv,
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.35)',
      bgLight: 'rgba(236, 72, 153, 0.08)',
      tag: 'معايير وبث',
      highlights: ['الإضاءة والصوت', 'استقرار الإنترنت', 'سياسة السلامة']
    }
  ];

  return (
    <section style={{ margin: '48px 0 40px 0' }}>
      {/* Section Header */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: 'rgba(233, 30, 99, 0.12)',
            border: '1px solid rgba(233, 30, 99, 0.3)',
            color: '#e91e63',
            fontSize: '11.5px',
            fontWeight: '800',
            marginBottom: '10px'
          }}
        >
          <Sparkles size={12} />
          <span>الأقسام التشغيلية الخمسة المعتمدة</span>
        </div>

        <h2
          style={{
            fontSize: '24px',
            fontWeight: '900',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, var(--text-main) 60%, var(--primary-gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          أقسام منظومة وكالة سكوب
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
          اختر أي قسم من الأقسام الخمسة للاطلاع على الأدلة العملية، الآليات الإجرائية، والجداول الرسمية المعتمدة
        </p>
      </div>

      {/* 5 Cards Displayed Proudly in ONE Single Row on Desktop */}
      <div className="home-categories-grid">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="glass-card category-card-5"
              style={{
                '--card-accent': cat.color,
                '--card-glow': cat.glowColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '14px',
                borderRadius: '18px',
                border: `1px solid rgba(255, 255, 255, 0.08)`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'linear-gradient(180deg, rgba(22, 30, 49, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%)',
              }}
            >
              {/* Glowing Top Accent Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`
                }}
              />

              {/* Ambient Background Corner Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: `radial-gradient(circle, ${cat.glowColor} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                  opacity: 0.6
                }}
              />

              <div>
                {/* Visual Cover Header */}
                <div
                  style={{
                    position: 'relative',
                    height: '110px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    marginBottom: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="category-card-img"
                  />
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)`
                    }}
                  />

                  {/* Top Badges: Number & Category Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      left: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        color: '#ffffff',
                        background: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(8px)',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        border: `1px solid ${cat.color}66`
                      }}
                    >
                      {cat.tag}
                    </span>

                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '900',
                        color: cat.color,
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        border: `1px solid ${cat.color}88`
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Floating Glowing Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '10px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${cat.color} 0%, rgba(15,23,42,0.9) 100%)`,
                      border: `1px solid ${cat.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 6px 14px ${cat.glowColor}`,
                      zIndex: 2
                    }}
                  >
                    <Icon size={16} color="#ffffff" />
                  </div>
                </div>

                {/* Card Title & English Subtitle */}
                <div style={{ marginBottom: '8px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '900',
                      color: 'var(--text-main)',
                      marginBottom: '3px',
                      letterSpacing: '-0.01em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{cat.title}</span>
                  </h3>

                  <span
                    style={{
                      fontSize: '10px',
                      color: cat.color,
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      display: 'inline-block',
                      textTransform: 'uppercase'
                    }}
                  >
                    {cat.subtitle}
                  </span>
                </div>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '11.5px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5',
                    marginBottom: '10px',
                    minHeight: '36px'
                  }}
                >
                  {cat.desc}
                </p>

                {/* Highlights Micro-Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    marginBottom: '12px'
                  }}
                >
                  {cat.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '10.5px',
                        padding: '3px 6px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-dim)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <CheckCircle2 size={10} color={cat.color} style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  marginTop: 'auto'
                }}
              >
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: cat.color
                  }}
                >
                  دخول القسم
                </span>

                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cat.color,
                    transition: 'transform 0.25s ease'
                  }}
                  className="category-arrow-btn"
                >
                  <ChevronLeft size={15} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
