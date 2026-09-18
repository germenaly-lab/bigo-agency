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
  Ban
} from 'lucide-react';
import { defaultAgencyManagementItems } from '../data/siteData';
import { resolveIcon } from '../utils/iconHelper';

export default function AgencyManagementSection({ onBackToHome, setActiveTab, items = defaultAgencyManagementItems }) {
  const currentItems = items && items.length > 0 ? items : defaultAgencyManagementItems;
  const [activeSubOption, setActiveSubOption] = useState(currentItems[0]?.id || 'register-hosts');

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
      {/* SUB-SECTION 1: تسجيل مذيعين (Main Primary Option) */}
      {/* ======================================================== */}
      {activeSubOption === 'register-hosts' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(6,182,212,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <UserPlus size={28} color="#06b6d4" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              دليل وإجراءات: تسجيل مذيعين بالوكالة
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            عملية تسجيل وضم المذيعين هي الركيزة الأساسية لنجاح ونمو الوكالة. يتضمن هذا القسم الشرح المعتمد والخطوات الرسمية لإضافة مذيع جديد وضمان توثيق حسابه والتزامه بالسياسات.
          </p>

          {/* Step-by-Step Registration Workflow */}
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#06b6d4', marginBottom: '16px' }}>
            خطوات إضافة وتوقيع عقد المذيع داخل التطبيق:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            <div
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '16px',
                  flexShrink: 0
                }}
              >
                1
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>
                  الدخول إلى مركز المبدعين وإدارة الوكالة
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  يقوم صاحب الوكالة أو المشرف المساعد بفتح تطبيق Bigo Live، ثم النقر على قائمة <strong>(أنا)</strong> أسفل يمين الشاشة، واختيار <strong>(مركز المبدعين)</strong>، ثم النقر على تبويب <strong>(الوكالة)</strong>.
                </p>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '16px',
                  flexShrink: 0
                }}
              >
                2
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>
                  إرسال دعوة الانضمام للمذيع
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  من قائمة إدارة المذيعين داخل مركز الوكالة، اضغط على <strong>"إضافة مذيع جديد"</strong> وأدخل معرف المذيع (Bigo ID) بدقة. تأكد من صحة الحساب والاسم المستعار قبل الإرسال.
                </p>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '16px',
                  flexShrink: 0
                }}
              >
                3
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>
                  موافقة المذيع وتوقيع العقد الرقمي
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  يتلقى المذيع إشعاراً رسمياً في صندوق الرسائل الرسمي داخل تطبيقه. يقوم المذيع بفتح الإشعار، قراءة الشروط والسياسات، ثم النقر على <strong>"الموافقة على الانضمام للوكالة"</strong>.
                </p>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '16px',
                  flexShrink: 0
                }}
              >
                4
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>
                  بدء التوثيق واحتساب الساعات والتارجت
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  بمجرد قبول العقد، يظهر المذيع مباشرة في لوحة تحكم وكالتك. يبدأ النظام تلقائياً باحتساب ساعات البث والأيام المعتمدة وجمع الفاصوليا تحت مظلة وكالتك.
                </p>
              </div>
            </div>
          </div>

          {/* Qualification & Host Requirements */}
          <div
            style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px'
            }}
          >
            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#f59e0b', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileCheck size={20} />
              <span>الشروط والمعايير الأساسية لقبول المذيع:</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>ألا يكون المذيع مرتبطاً بوكالة أخرى مفعلة في نفس الوقت (يمنع الانتقال المزدوج).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>الالتزام بالحد الأدنى للبث: 30 ساعة شهرياً بمعدل ساعة واحدة على الأقل في الجلسة الواحدة.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>توفر تجهيزات بث واضحة (إضاءة مناسبة، كاميرا ثابتة، صوت نقي، وخلفية مرتبة).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>الالتزام الصارم بقواعد السلوك والسلامة (منع البث أثناء القيادة تماماً، ومنع أي محتوى خادش).</span>
              </li>
            </ul>
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
                  مميزات وخدمات الدعم الحصرية من وكالة Scope
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
            الانضمام لوكالة سكوب الرسمية يمنحك ميزة تنافسية لا تتوفر للمذيع المستقل؛ فنحن نوفر لك مظلة حماية متكاملة، ودعم إداري ولوجستي مباشر من إدارة Bigo Live لضمان نجاحك واستمرار تصاعد أرباحك.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <FileCheck size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  عقود رسمية وبونص شهري
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                عقد قانوني رسمي يضمن راتبك الشهري وأرباحك كاملة دون أي اقتطاعات مجحفة، مع مكافآت وبونص إضافي يصرف دورياً للمذيعين الملتزمين بالتارجت.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <ShieldCheck size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  دعم فني وحل مشكلات 24/7
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                خط ساخن مع مديري الحسابات في إدارة Bigo لفك القيود، متابعة الحظر المؤقت، وتوثيق الحسابات بالعلامة الرسمية وحمايتها من البلاغات الكيدية.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <TrendingUp size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  تصعيد للترند وبانرات الواجهة
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                أولوية ترشيح مذيعي الوكالة للظهور في واجهة التطبيق وقوائم الإكسبلور والترند للفعاليات، مما يجلب آلاف المشاهدين الجدد لبثك.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Coins size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  صرف فوري للفاصوليا بأفضل سعر
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                خدمة شحن وسحب فورية بدون تأخير عبر الوكلاء المعتمدين والمحافظ الإلكترونية والتحويلات البنكية بأعلى سعر صرف متوفر في السوق.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Users size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  تدريب وتوجيه صناع المحتوى
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                إشراف مدربين خبراء لمساعدتك في ضبط تجهيزات البث، تحسين الصوت والإضاءة، واختيار أفكار بث جذابة تضمن جذب كبار الداعمين وثباتهم.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Zap size={20} color="#f59e0b" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                  دعم نقاط الوكالة في الباتلات
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                مشاركة الوكالة بنقاط دعم في التحديات والباتلات الكبرى والنهائيات الرسمية لمساندة مذيعي الفريق وحسم الجولات لصالحهم.
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
    </section>
  );
}
