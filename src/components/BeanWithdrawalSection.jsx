import React, { useState } from 'react';
import {
  CreditCard,
  Wallet,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Coins,
  DollarSign,
  User,
  PlusCircle,
  Send,
  Award,
  Camera,
  History,
  Sparkles,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { defaultBeanWithdrawalItems } from '../data/siteData';
import { resolveIcon } from '../utils/iconHelper';

export default function BeanWithdrawalSection({ onBackToHome, setActiveTab, items = defaultBeanWithdrawalItems }) {
  const currentItems = items && items.length > 0 ? items : defaultBeanWithdrawalItems;
  // Filter out any bank wire items
  const validItems = currentItems.filter((it) => it.id !== 'bank-wire' && !it.title?.includes('البنكي'));
  const activeItems = validItems.length > 0 ? validItems : defaultBeanWithdrawalItems;
  const [activeTab, setActiveTabLocal] = useState(activeItems[0]?.id || 'agent-recharge');

  // The 11 withdrawal steps requested by user
  const withdrawalSteps = [
    {
      step: 1,
      title: 'فتح الملف الشخصي',
      instruction: '1. نفتح ابلكيشن البيجو ونضغط على me / انا',
      desc: 'الدخول إلى تطبيق بيجو لايف ثم النقر على تبويب الملف الشخصي (Me / أنا) بالأسفل.',
      icon: User,
      color: '#8b5cf6'
    },
    {
      step: 2,
      title: 'الدخول إلى المحفظة',
      instruction: '2. نروح علي ال wallet / المحفظه',
      desc: 'من شاشة الملف الشخصي، اضغط على خيار المحفظة (Wallet).',
      icon: Wallet,
      color: '#8b5cf6'
    },
    {
      step: 3,
      title: 'اختيار الفاصوليا',
      instruction: '3. ندوس علي ال beans / الفاصوليا',
      desc: 'داخل المحفظة، اضغط على تبويب الفاصوليا (Beans) لعرض رصيدك الحالي القابل للصرف.',
      icon: Coins,
      color: '#8b5cf6'
    },
    {
      step: 4,
      title: 'استبدال المكافآت',
      instruction: '4. ندوس علي exchange rewards / استبدال المكافآت',
      desc: 'الضغط على زر استبدال المكافآت (Exchange Rewards) لبدء إعداد طلب السحب.',
      icon: RefreshCw,
      color: '#8b5cf6'
    },
    {
      step: 5,
      title: 'إضافة طريقة السحب',
      instruction: '5. ندوس علي اضافه طريقه سحب / Add a withdrawal method',
      desc: 'الضغط على إضافة طريقة سحب (Add a withdrawal method) وإدخال كل المعلومات والبيانات المطلوبة.',
      icon: PlusCircle,
      color: '#8b5cf6'
    },
    {
      step: 6,
      title: 'السحب عبر قناة الموزع',
      instruction: '6. بعد كده بنحط السحب عبر قناه الموزع / Withdrawal via a distributor channel',
      desc: 'من قائمة وسائل السحب، اختيار خيار: السحب عبر قناة الموزع (Withdrawal via a distributor channel).',
      icon: Send,
      color: '#8b5cf6'
    },
    {
      step: 7,
      title: 'اختيار وكالة سكوب الرسمية',
      instruction: '7. بنختار scoop agency',
      desc: 'تحديد واختيار الوكالة المعتمدة: scoop agency لتكون هي قناة الموزع لتنفيذ السحب.',
      icon: Award,
      color: '#f59e0b',
      highlight: true
    },
    {
      step: 8,
      title: 'تحديد كمية السحب',
      instruction: '8. بعد كده بنختار كل / all أو اكتب المبلغ المراد سحبه',
      desc: 'اضغط على (All / كل) لسحب كامل رصيد الفاصوليا، أو اكتب يدويًا عدد الفاصوليا المراد سحبه.',
      icon: DollarSign,
      color: '#8b5cf6'
    },
    {
      step: 9,
      title: 'تأكيد السحب وأخذ لقطة شاشة',
      instruction: '9. بعد كده ندوس تأكيد وكونفيرم وناخد اسكرين',
      desc: 'اضغط على زر تأكيد (Confirm)، والتقط لقطة شاشة (Screenshot) لصفحة التأكيد فوراً.',
      icon: Camera,
      color: '#ec4899',
      isScreenshot: true
    },
    {
      step: 10,
      title: 'سجل عمليات السحب',
      instruction: '10. ندخل علي withdrawal history / سجل عمليات السحب',
      desc: 'انتقل إلى سجل عمليات السحب (Withdrawal History) لعرض العملية المسجلة وحالتها.',
      icon: History,
      color: '#8b5cf6'
    },
    {
      step: 11,
      title: 'تأكيد السحبة ولقطة الشاشة النهائية',
      instruction: '11. نضغط علي السحبه ونضغط كونفيرم وناخدها اسكرين',
      desc: 'اضغط على تفاصيل السحبة من السجل ثم اضغط كونفيرم والتقط لقطة شاشة ثانية لإرسالها للوكيل.',
      icon: CheckCircle2,
      color: '#10b981',
      isScreenshot: true
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
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>سحب الفاصوليا</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.14), rgba(22,30,49,0.88))',
          border: '1px solid rgba(139,92,246,0.3)',
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
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(139,92,246,0.35)',
              flexShrink: 0
            }}
          >
            <CreditCard size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '21px', fontWeight: '900', marginBottom: '3px' }}>
              سحب الفاصوليا (Bean Withdrawal)
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              دليل وخطوات السحب الرسمية عبر وكيل الشحن المعتمد وقناة الموزع (Scoop Agency)
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

      {/* Top Method Card */}
      <div style={{ marginBottom: '28px' }}>
        {activeItems.map((item, idx) => {
          const Icon = resolveIcon(item.icon, RefreshCw);
          return (
            <div
              key={item.id || idx}
              className="glass-card"
              style={{
                padding: '28px',
                border: '2px solid rgba(139,92,246,0.45)',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(15,23,42,0.6) 100%)',
                borderRadius: '20px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(139,92,246,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={26} color="#8b5cf6" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '21px', fontWeight: '900', margin: 0 }}>{item.title}</h2>
                    <span style={{ fontSize: '12px', color: '#a78bfa', fontWeight: '700' }}>
                      قناة الموزع الرسمية: Scoop Agency
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '12px',
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    background: '#8b5cf6',
                    color: '#fff',
                    fontWeight: '800'
                  }}
                >
                  {item.category || 'الخيار الوحيد والمعتمد'}
                </span>
              </div>

              {item.features && item.features.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '16px' }}>
                  {item.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(139,92,246,0.15)',
                        fontSize: '13px',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <CheckCircle2 size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Content: Steps of Withdrawal */}
      <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(139,92,246,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <RefreshCw size={24} color="#8b5cf6" />
            </div>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>
                خطوات السحب عبر قناة الموزع (Scoop Agency)
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                يرجى اتباع الخطوات الـ 11 التالية بدقة من داخل التطبيق لضمان تنفيذ السحب فوراً:
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fbbf24',
              fontSize: '12px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} />
            <span>11 خطوة مرقمة ومعتمدة</span>
          </div>
        </div>

        {/* 11 Steps Cards Grid/List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
          {withdrawalSteps.map((st) => {
            const StepIcon = st.icon;
            return (
              <div
                key={st.step}
                className="glass-card"
                style={{
                  padding: '18px 22px',
                  border: st.isScreenshot
                    ? '1px solid rgba(236,72,153,0.45)'
                    : st.highlight
                    ? '1px solid rgba(245,158,11,0.45)'
                    : '1px solid rgba(139,92,246,0.22)',
                  background: st.isScreenshot
                    ? 'rgba(236,72,153,0.06)'
                    : st.highlight
                    ? 'rgba(245,158,11,0.06)'
                    : 'rgba(15,23,42,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  borderRadius: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Left side: Badge + Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: st.isScreenshot
                        ? 'rgba(236,72,153,0.2)'
                        : st.highlight
                        ? 'rgba(245,158,11,0.2)'
                        : 'rgba(139,92,246,0.18)',
                      color: st.isScreenshot ? '#f472b6' : st.highlight ? '#fbbf24' : '#a78bfa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      fontSize: '17px',
                      flexShrink: 0
                    }}
                  >
                    {st.step}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <StepIcon size={16} color={st.isScreenshot ? '#ec4899' : st.highlight ? '#f59e0b' : '#8b5cf6'} />
                      <h4 style={{ fontSize: '15.5px', fontWeight: '800', margin: 0, color: '#f1f5f9' }}>
                        {st.title}
                      </h4>
                      {st.isScreenshot && (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '800',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            background: 'rgba(236,72,153,0.2)',
                            color: '#f472b6',
                            border: '1px solid rgba(236,72,153,0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Camera size={11} />
                          <span>التقط لقطة شاشة (اسكرين)</span>
                        </span>
                      )}
                      {st.highlight && (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '800',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            background: 'rgba(245,158,11,0.2)',
                            color: '#fbbf24',
                            border: '1px solid rgba(245,158,11,0.4)'
                          }}
                        >
                          الموزع المعتمد
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: '700',
                        color: st.highlight ? '#fef08a' : '#e2e8f0',
                        lineHeight: '1.5'
                      }}
                    >
                      {st.instruction}
                    </div>

                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Screenshot Alert Callout */}
        <div
          style={{
            background: 'rgba(236,72,153,0.09)',
            border: '1px solid rgba(236,72,153,0.35)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            marginBottom: '24px'
          }}
        >
          <Camera size={24} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#f472b6', margin: '0 0 4px 0' }}>
              تنبيه فوري بشأن لقطات الشاشة (Screenshots):
            </h4>
            <p style={{ fontSize: '13.5px', color: '#fce7f3', lineHeight: '1.6', margin: 0 }}>
              يجب التقاط <strong>لقطة شاشة (اسكرين) في الخطوة 9</strong> (صفحة تأكيد الطلب) و<strong>لقطة شاشة في الخطوة 11</strong> (سجل عمليات السحب بعد تأكيد السحبة)، ثم إرسالهما مباشرة إلى مسؤول الوكالة لتأكيد التحويل الفوري لحسابك بأعلى سعر للدولار.
            </p>
          </div>
        </div>

        {/* Official Scoop Rules & Benefits */}
        <div
          style={{
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: '16px',
            padding: '24px'
          }}
        >
          <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#a78bfa', marginBottom: '14px' }}>
            مميزات وضوابط السحب عبر وكالة سكوب:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', padding: 0, margin: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
              <span>سحب الفاصوليا بأعلى سعر صرف موجود في السوق (على حسب سعر الدولار يوم السحب).</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
              <span>تحويل فوري وسريع لمستحقاتك فور إرسال لقطات الشاشة والتأكيد.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
              <span>طرق دفع محلية مرنة: فودافون كاش، إنستاباي، STC Pay، أورانج كاش، أو نقدًا.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
              <span>متابعة شخصية ودعم فني على مدار 24 ساعة من فريق إدارة الوكالة.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
