import React from 'react';
import {
  Sparkles,
  Coins,
  ArrowRight,
  Gift,
  Trophy,
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';

export default function PointsUsageSection({ onBackToHome, setActiveTab }) {
  const usageMethods = [
    {
      title: 'دعم المذيعين في الباتلات والتحديات (PK)',
      icon: Trophy,
      color: '#f59e0b',
      desc: 'استخدام نقاط الوكالة لدعم مذيعيك البارزين في مسابقات الـ PK الرسمية لرفع تصنيفهم وجذب كبار الداعمين.'
    },
    {
      title: 'استبدال النقاط بجوائز وبونص إضافي',
      icon: Gift,
      color: '#ec4899',
      desc: 'تحويل النقاط المتراكمة إلى مكافآت مادية وبونص إضافي يضاف إلى أرباح الوكالة الشهرية بناءً على سلم التحفيز.'
    },
    {
      title: 'ترقية رتبة الوكالة والمشاركة في حفل GALA',
      icon: Sparkles,
      color: '#8b5cf6',
      desc: 'تراكم النقاط يحدد ترتيب الوكالة إقليمياً وعالمياً، مما يؤهلها لحضور الحفل السنوي وتكريم كبار الوكلاء.'
    },
    {
      title: 'تمويل فعاليات ورومات الوكالة الخاصة',
      icon: Coins,
      color: '#06b6d4',
      desc: 'تخصيص رصيد النقاط لتنظيم مسابقات حصرية داخل رومات الوكالة وتوزيع جوائز تحفيزية على المذيعين الجدد.'
    }
  ];

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
          background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(22,30,49,0.85))',
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
              دليل إدارة رصيد النقاط، آليات الاستبدال، برامج التحفيز، وطلبات الصرف المعتمدة
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

      {/* Main Points Intro Card */}
      <div className="glass-card" style={{ padding: '24px 26px', marginBottom: '24px', borderRadius: '18px' }}>
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

      {/* Usage Methods Grid */}
      <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '18px' }}>
        أوجه ومجالات استخدام النقاط الرسمية:
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        {usageMethods.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="glass-card" style={{ padding: '24px', border: `1px solid ${m.color}33` }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${m.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <Icon size={24} color={m.color} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '8px' }}>{m.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{m.desc}</p>
            </div>
          );
        })}
      </div>

      {/* How to submit points request */}
      <div
        className="glass-card"
        style={{
          padding: '28px',
          border: '1px solid rgba(139,92,246,0.3)',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <Clock size={24} color="#8b5cf6" />
          <h3 style={{ fontSize: '18px', fontWeight: '800' }}>
            آلية تقديم طلبات نقاط الوكالة (Points Requests):
          </h3>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={18} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>يتم تقديم طلبات صرف أو ترحيل النقاط في الفترة ما بين 1 و 5 من كل شهر ميلادي.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={18} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>يتم تدقيق كشف النقاط ومطابقته مع تقرير الفاصوليا المعتمد من قبل مدير حساب الوكالة.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={18} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>تحويل رصيد الدعم أو البونص يتم مباشرة إلى محفظة الوكالة الرسمية داخل التطبيق.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
