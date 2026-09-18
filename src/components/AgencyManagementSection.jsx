import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Award,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Smartphone,
  Coins,
  Globe,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Zap,
  Lock,
  Sliders,
  Ban,
  UserCheck,
  Inbox,
  Flame,
  Trophy,
  Send,
  FileText,
  ZoomIn,
  X,
  Eye
} from 'lucide-react';
import { defaultAgencyManagementItems } from '../data/siteData';
import { resolveIcon } from '../utils/iconHelper';

export default function AgencyManagementSection({ onBackToHome, setActiveTab, items = defaultAgencyManagementItems }) {
  const currentItems = items && items.length > 0 ? items : defaultAgencyManagementItems;
  const [activeSubOption, setActiveSubOption] = useState(currentItems[0]?.id || 'register-hosts');
  const [modalImage, setModalImage] = useState(null);

  const registrationSteps = [
    {
      id: 1,
      badge: 'الخطوة 1',
      title: 'مركز صناع المحتوى',
      text: '1- الضغط على خيار: مركز صناع المحتوى',
      desc: 'الدخول إلى الصفحة الشخصية في تطبيق بيجو لايف ثم النقر على "مركز صناع المحتوى".',
      image: '/images/steps/step1.png',
      alt: 'صورة توضيحية - مركز صناع المحتوى',
      icon: Users
    },
    {
      id: 2,
      badge: 'الخطوة 2',
      title: 'توظيف صناع المحتوى',
      text: '2- الضغط على خيار: توظيف صناع المحتوى.',
      desc: 'من قائمة مركز صناع المحتوى، الضغط على خيار "توظيف صناع المحتوى".',
      image: '/images/steps/step2.png',
      alt: 'صورة توضيحية - توظيف صناع المحتوى',
      icon: UserPlus
    },
    {
      id: 3,
      badge: 'الخطوة 3',
      title: 'قدم بدعوة صناع المحتوى',
      text: '3- الضغط على خيار: قدم بدعوة صناع المحتوى.',
      desc: 'الضغط على زر "قدم بدعوة صناع محتوى" لفتح خيارات إرسال الدعوات.',
      image: '/images/steps/step3.png',
      alt: 'صورة توضيحية - قدم بدعوة صناع المحتوى',
      icon: Send
    },
    {
      id: 4,
      badge: 'الخطوة 4',
      title: 'اختيار طريقة الدعوة',
      text: '4- وأخيراً بإمكانك إختيار الطريقة المناسبة لك لدعوة صناع المحتوى.',
      desc: 'بإمكانك إرسال الدعوة عبر 3 طرق: الاقتراحات التلقائية، أو من قائمة الأصدقاء، أو نسخ رمز ورابط الدعوة المباشر للمذيع.',
      image: '/images/steps/step4.png',
      alt: 'صورة توضيحية - طرق دعوة صناع المحتوى (اقتراحات، الأصدقاء، أو دعوة مباشرة)',
      isWide: true,
      icon: Sliders
    },
    {
      id: 5,
      badge: 'الخطوة 5',
      title: 'قبول الدعوة',
      text: '5- عند قيام صانع المحتوى بقبول الدعوة يتم إرسال رسالة للوكيل بأن صانع المحتوى قد قبل الدعوة.',
      desc: 'يقوم صانع المحتوى بقبول الدعوة من خلال إشعارات التطبيق، ويصل إشعار تأكيد للوكيل مباشرة.',
      image: '/images/steps/step5.png',
      alt: 'صورة توضيحية - قبول صانع المحتوى للدعوة',
      icon: Inbox
    },
    {
      id: 6,
      badge: 'الخطوة 6',
      title: 'استكمال المعلومات والمقابلة',
      text: '6- وبذلك يقوم الوكيل بالضغط على الرسالة والسحب لليسار لتظهر كلمة "استكمال المعلومات" ليحدد الوكيل معلومات العقد المناسبة للطرفين، وإرفاق فيديو مقابلة المذيع.',
      desc: 'يقوم الوكيل بالسحب لليسار على الرسالة والضغط على "استكمال المعلومات" لتسجيل بنود العقد وإرفاق فيديو المقابلة.',
      image: '/images/steps/step6.png',
      alt: 'صورة توضيحية - استكمال المعلومات وتوثيق العقد',
      icon: FileText
    },
    {
      id: 7,
      badge: 'الخطوة 7',
      title: 'رسالة تسجيل ناجح',
      text: '7- عند استكمال الخطوات السابقة، تظهر رسالة "تسجيل ناجح" وبذلك يكون الحساب قد تم تسجيله بشكل أكيد.',
      desc: 'ظهور رسالة "تسجيل ناجح" تؤكد اكتمال التوثيق وانضمام صانع المحتوى رسمياً للوكالة.',
      image: '/images/steps/step7.png',
      alt: 'صورة توضيحية - تسجيل ناجح',
      icon: CheckCircle2
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
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>إدارة الوكالة</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(22,30,49,0.85))',
          border: '1px solid rgba(6,182,212,0.3)',
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
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(6,182,212,0.35)',
              flexShrink: 0
            }}
          >
            <Users size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '21px', fontWeight: '900', marginBottom: '3px' }}>
              إدارة الوكالة (Agency Management)
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              الدليل الشامل للعمليات التشغيلية، تسجيل المذيعين، فك الحظر، وإدارة الطاقم
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

      {/* Options Navigation Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '28px'
        }}
      >
        {currentItems.map((opt) => {
          const Icon = resolveIcon(opt.icon);
          const isSelected = activeSubOption === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveSubOption(opt.id)}
              className="glass-card"
              style={{
                padding: '18px',
                textAlign: 'right',
                cursor: 'pointer',
                border: isSelected ? `2px solid ${opt.color}` : '1px solid var(--glass-border)',
                background: isSelected ? `rgba(6,182,212,0.08)` : 'var(--bg-card)',
                transition: 'var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontFamily: 'inherit',
                color: 'inherit'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: `${opt.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={20} color={opt.color} />
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: `${opt.color}15`,
                    color: opt.color,
                    fontWeight: '800'
                  }}
                >
                  {opt.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', marginTop: '4px' }}>{opt.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {opt.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* SUB-SECTION 1: تسجيل صناع المحتوى (Main Primary Option) */}
      {/* ======================================================== */}
      {activeSubOption === 'register-hosts' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(6,182,212,0.35)' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(6,182,212,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <UserPlus size={26} color="#06b6d4" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '900', margin: 0 }}>
                  تسجيل صناع المحتوى
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(6,182,212,0.2)',
                    color: '#06b6d4',
                    fontWeight: '800'
                  }}
                >
                  الأساسي والأهم
                </span>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                يمكنك تسجيل صناع المحتوى من خلال النظام باتباع الخطوات الموضحة بالصور من داخل التطبيق:
              </p>
            </div>
          </div>

          {/* Workflow Quick Banner */}
          <div
            className="glass-card"
            style={{
              padding: '18px 22px',
              marginBottom: '26px',
              border: '1px solid rgba(6,182,212,0.25)',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(6,182,212,0.2)',
                    color: '#22d3ee'
                  }}
                >
                  مخطط التوظيف الرسمي
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: '800', margin: 0 }}>
                  طريقة توظيف صناع المحتوى خطوة بخطوة
                </h3>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                دورة التوظيف: دعوة صناع المحتوى ⟵ قبول الدعوة ⟵ إكمال معلومات التوظيف ⟵ توظيف بنجاح
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setModalImage({
                  src: '/images/steps/step_workflow.png',
                  title: 'المخطط الرسمي لتوظيف صناع المحتوى',
                  desc: 'طريقة توظيف صناع المحتوى المعتمدة من بيجو لايف'
                })
              }
              className="btn-primary"
              style={{
                padding: '9px 16px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
            >
              <Eye size={15} />
              <span>عرض مخطط التوظيف الكامل</span>
            </button>
          </div>

          {/* 7 Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {registrationSteps.map((st) => {
              const IconComp = st.icon;
              return (
                <div
                  key={st.id}
                  className="glass-card"
                  style={{
                    padding: '22px',
                    border: '1px solid rgba(6,182,212,0.22)',
                    background: 'rgba(15,23,42,0.45)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '22px',
                    alignItems: 'center',
                    borderRadius: '16px'
                  }}
                >
                  {/* Text Details Side */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          background: 'rgba(6,182,212,0.15)',
                          color: '#22d3ee',
                          border: '1px solid rgba(6,182,212,0.3)'
                        }}
                      >
                        {st.badge}
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(6,182,212,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComp size={18} color="#06b6d4" />
                      </div>
                      <h4 style={{ fontSize: '17px', fontWeight: '800', margin: 0, color: '#f8fafc' }}>
                        {st.title}
                      </h4>
                    </div>

                    <div
                      style={{
                        background: 'rgba(6,182,212,0.07)',
                        borderRight: '3px solid #06b6d4',
                        padding: '12px 14px',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '14.5px',
                        fontWeight: '700',
                        color: '#f1f5f9',
                        lineHeight: '1.6'
                      }}
                    >
                      {st.text}
                    </div>

                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                      {st.desc}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setModalImage({
                          src: st.image,
                          title: st.title,
                          desc: st.text
                        })
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#22d3ee',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        padding: '4px 0',
                        fontFamily: 'inherit'
                      }}
                    >
                      <ZoomIn size={14} />
                      <span>تكبير الصورة ومعاينتها بالتفصيل</span>
                    </button>
                  </div>

                  {/* Image Preview Side */}
                  <div
                    onClick={() =>
                      setModalImage({
                        src: st.image,
                        title: st.title,
                        desc: st.text
                      })
                    }
                    style={{
                      cursor: 'pointer',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: '1px solid rgba(6,182,212,0.28)',
                      background: 'rgba(11,18,34,0.7)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: st.isWide ? '10px' : '14px',
                      boxShadow: '0 8px 24px -4px rgba(0,0,0,0.5)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#22d3ee';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.28)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <img
                      src={st.image}
                      alt={st.alt}
                      loading="lazy"
                      style={{
                        maxHeight: st.isWide ? '260px' : '340px',
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        background: 'rgba(2,6,23,0.82)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(6,182,212,0.3)',
                        borderRadius: '6px',
                        padding: '3px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        color: '#22d3ee',
                        fontWeight: '700'
                      }}
                    >
                      <ZoomIn size={12} />
                      <span>تكبير</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION 2: مميزات الابلكيشن */}
      {/* ======================================================== */}
      {activeSubOption === 'app-features' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(139,92,246,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
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
              <Smartphone size={26} color="#8b5cf6" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
                  مميزات الابلكيشن بقا الي بنقدمو ليك 💸📱
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(139,92,246,0.2)',
                    color: '#8b5cf6',
                    fontWeight: '800'
                  }}
                >
                  بيجو لايف الرسمي
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                أبرز المميزات والفرص الحقيقية اللي بيوفرها لك تطبيق البث المباشر
              </p>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            تطبيق Bigo Live بيوفرلك تجربة لايف استريم متكاملة واحترافية؛ بنقدملك كل المميزات والفرص الحقيقية اللي تساعدك تبدأ وتكبر أرباحك وتتحكم في كل تفاصيل شغلك بكل سهولة وأمان.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle2 size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  1 - موثوق ومضمون 100% 💯
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                ابلكيشن من أقدم برامج اللايف استريم، يعني موثوق ومضمون 100%.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Coins size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  2 - استفادة مضاعفة من الدعم 💸
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                أي دعم بينزلك بتستفيد منه مرتين؛ مرة سحب فوري، ومرة نسبة عالتارجت شهري أو أسبوعي.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Lock size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  3 - خصوصية تامة وأمان مالي 💰
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                خصوصية تامة ع الأبلكيشن لو مش حابب حد يعرف بتعمل فلوس منين.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Users size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  4 - شبكة مذيعين وصداقات واسعة 🥰
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                الابلكيشن عليه مذيعين من جميع أنحاء الشرق الأوسط، يعني تقدر تزود دايرة صحابك.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Sparkles size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  5 - فلاتر ذكية وكواليتي لايف عالي 💫
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                الابلكيشن فيه فلاتر لذيذة بتساعدك إن كواليتي اللايف يبقى أعلى.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Sliders size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  6 - تحكم كامل وحرية تامة ✌🏻
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                الإعدادات بتاعت البرنامج بتخليك تقدر تتحكم في كل حاجة، يعني مفيش أي حاجة مفروضة عليك.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Ban size={20} color="#8b5cf6" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#c084fc' }}>
                  7 - بيئة محترمة وسياسات واضحة ❌
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                من سياسات التطبيق ممنوع الكلام في السياسة & وفالدين & والجنس.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION 3: مميزات الوكاله */}
      {/* ======================================================== */}
      {activeSubOption === 'agency-features' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(245,158,11,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(245,158,11,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Award size={26} color="#f59e0b" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
                  الوكاله بتساعدك كتير و من مميزتها ✨
                </h2>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(245,158,11,0.2)',
                    color: '#f59e0b',
                    fontWeight: '800'
                  }}
                >
                  وكالة سكوب المعتمدة
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                المزايا الحصرية والخدمات الإدارية والدعم المالي المخصص لمذيعي وكالة سكوب
              </p>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            الانضمام لوكالة سكوب بيوفرلك دعم حقيقي ومستمر؛ فريقنا موجود خطوة بخطوة عشان يساعدك تكبر حسابك وتزود مشاهداتك وتضاعف أرباحك بأعلى احترافية.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <UserCheck size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  1 - مسئول متابعة يومي معاك 🙋🏻‍♂️
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                مسئول متابعه معاك بشكل يومي بيساعدك في اي حاجه تخص لايفك.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Inbox size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  2 - جروب مخصص للتحديثات 📥
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                جروب مخصص ليك انتا بيتبعتلك عليه كل التحديثات.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Coins size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  3 - سحب فاصوليا بأعلى سعر 💸💰
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                سحب الفاصوليا بأعلي سعر موجود فالسوق ( علي حسب سعر الدولار يوم السحب ).
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Globe size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  4 - ترند شرق أوسط مرتين شهرياً 🥳
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                الوكاله بتطلعك ترند شرق اوسط مرتين في الشهر عشان تساعدك تتشاف اكتر.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Flame size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  5 - تريند شعلة لزيادة المشاهدات 🔥
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                وتريند شعله يزودلك مشاهدات اللايف كل مره تفتح فيها.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Users size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  6 - شبكة معارف وتحديات لايف 👥
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                بنعرفك علي المذيعين الي معانا ونطلعك تحديات معاهم عشان يبقي ليك معارف وصحاب عالابلكيشن.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Trophy size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  7 - مسابقات شهرية لزيادة الأرباح 🎉
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                مسابقات علي مدار الشهر بتساعدك تزود ارباحك اكثر واكثر.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic view for custom or edited items */}
      {!['register-hosts', 'app-features', 'agency-features'].includes(activeSubOption) && (
        (() => {
          const activeItem = currentItems.find((it) => it.id === activeSubOption);
          if (!activeItem) return null;
          const ActiveIcon = resolveIcon(activeItem.icon);
          return (
            <div className="glass-card" style={{ padding: '32px', border: `1px solid ${activeItem.color || '#06b6d4'}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${activeItem.color || '#06b6d4'}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ActiveIcon size={24} color={activeItem.color || '#06b6d4'} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900' }}>{activeItem.title}</h2>
                    {activeItem.badge && (
                      <span
                        style={{
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          background: `${activeItem.color || '#06b6d4'}22`,
                          color: activeItem.color || '#06b6d4',
                          fontWeight: '800'
                        }}
                      >
                        {activeItem.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {activeItem.shortDesc}
                  </p>
                </div>
              </div>

              {activeItem.details && activeItem.details.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                  {activeItem.details.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="glass-card"
                      style={{
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        border: `1px solid ${activeItem.color || '#06b6d4'}22`
                      }}
                    >
                      <CheckCircle2 size={18} color={activeItem.color || '#06b6d4'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', lineHeight: '1.6' }}>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()
      )}

      {/* ======================================================== */}
      {/* Lightbox Modal for Full-Resolution Image Preview */}
      {/* ======================================================== */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3, 7, 18, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'zoom-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: '20px',
              padding: '18px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
              cursor: 'default'
            }}
          >
            <button
              type="button"
              onClick={() => setModalImage(null)}
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(239, 68, 68, 0.18)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: '#f87171',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              title="إغلاق"
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '14px', padding: '0 45px' }}>
              <h4 style={{ margin: 0, fontSize: '18px', color: '#22d3ee', fontWeight: '800' }}>
                {modalImage.title}
              </h4>
              {modalImage.desc && (
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                  {modalImage.desc}
                </p>
              )}
            </div>

            <img
              src={modalImage.src}
              alt={modalImage.title}
              style={{
                maxHeight: '72vh',
                maxWidth: '86vw',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
