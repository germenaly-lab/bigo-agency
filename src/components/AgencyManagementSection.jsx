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
  FileText
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
      {/* ======================================================== */}
      {/* SUB-SECTION 1: تسجيل صناع المحتوى (Main Primary Option) */}
      {/* ======================================================== */}
      {activeSubOption === 'register-hosts' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(6,182,212,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
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
                <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
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
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                يمكنك تسجيل صناع المحتوى من خلال النظام باستخدام الخطوات التالية:
              </p>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            يمكنك تسجيل صناع المحتوى من خلال النظام باستخدام الخطوات التالية:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Users size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  1 - مركز صناع المحتوى
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                1- الضغط على خيار: مركز صناع المحتوى
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <UserPlus size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  2 - توظيف صناع المحتوى
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                2- الضغط على خيار: توظيف صناع المحتوى.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Send size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  3 - دعوة صناع المحتوى
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                3- الضغط على خيار: قدم بدعوة صناع المحتوى.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Sliders size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  4 - اختيار طريقة الدعوة
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                4- وأخيراً بإمكانك إختيار الطريقة المناسبة لك لدعوة صناع المحتوى.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Inbox size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  5 - قبول الدعوة
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                5- عند قيام صانع المحتوى بقبول الدعوة يتم إرسال رسالة للوكيل بأن صانع المحتوى قد قبل الدعوة.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <FileText size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  6 - استكمال المعلومات والمقابلة
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                6- وبذلك يقوم الوكيل بالضغط على الرسالة والسحب لليسار لتظهر كلمة "استكمال المعلومات" ليحدد الوكيل معلومات العقد المناسبة للطرفين، وإرفاق فيديو مقابلة المذيع.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.22)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckCircle2 size={20} color="#06b6d4" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#22d3ee' }}>
                  7 - رسالة تسجيل ناجح
                </h4>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                7- عند استكمال الخطوات السابقة، تظهر رسالة "تسجيل ناجح" وبذلك يكون الحساب قد تم تسجيله بشكل أكيد.
              </p>
            </div>
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
    </section>
  );
}
