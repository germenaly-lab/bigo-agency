import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  ShieldAlert,
  Flame,
  Award,
  ArrowRight,
  CheckCircle2,
  FileCheck
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
      {/* SUB-SECTION 2: فك حظر الحسابات */}
      {/* ======================================================== */}
      {activeSubOption === 'unban' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(239,68,68,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <ShieldAlert size={28} color="#ef4444" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              إجراءات واستئناف فك حظر الحسابات
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            في حال تعرض أحد مذيعي الوكالة لحظر مؤقت أو تعليق بسبب سوء فهم للسياسات أو تقارير كيدية، تتيح المنصة لوكلاء Scope رفع طلبات استئناف رسمية لإعادة تفعيل الحسابات.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(239,68,68,0.2)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ef4444', marginBottom: '8px' }}>
                1. تحديد نوع وسبب الحظر
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                التحقق من رسالة النظام التي ظهرت للمذيع، وتحديد رمز المخالفة (سلوك، حقوق ملكية، بث أثناء قيادة، بلاغ وهمي).
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(239,68,68,0.2)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ef4444', marginBottom: '8px' }}>
                2. تجهيز الوثائق والإثباتات
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                التقاط لقطة شاشة لرسالة الحظر، وتدوين Bigo ID وتاريخ وتوقيت المخالفة، وتقديم إيضاح موجز يؤكد عدم تعمد المخالفة.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(239,68,68,0.2)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ef4444', marginBottom: '8px' }}>
                3. رفع التذكرة لمدير الحسابات
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                إرسال الطلب عبر القناة الرسمية المخصصة للوكالات المعتمدة. تتم المراجعة والرد خلال 24 إلى 48 ساعة كحد أقصى.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION 3: طلب ترند للفعاليات */}
      {/* ======================================================== */}
      {activeSubOption === 'trend' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(245,158,11,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Flame size={28} color="#f59e0b" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              شروط وآلية طلب ترند للفعاليات والمسابقات
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            الظهور في قوائم الترند وبانرات الصفحة الرئيسية يمنح مذيعي الوكالة آلاف الزوار والداعمين الجدد. تخصص المنصة حصص ترند للوكالات النشطة التي تحقق تارجت مرتفع.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="glass-card" style={{ padding: '18px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#f59e0b', marginBottom: '6px' }}>
                توقيت تقديم طلب الترند:
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                يجب رفع الطلب قبل موعد الفعالية بـ 48 ساعة على الأقل مع تحديد بوستر الفعالية وتوقيتها وعنوان البث.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '18px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#f59e0b', marginBottom: '6px' }}>
                معايير استحقاق الترند:
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                أن يكون المذيع ملتزماً بكواليتي لايف عالي، وبث نشط وتفاعل قوي مع الداعمين، وعدم وجود أي مخالفات خلال الـ 30 يوماً السابقة.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION 4: إدارة المشرفين والقلادات */}
      {/* ======================================================== */}
      {activeSubOption === 'supervisors' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(139,92,246,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Award size={28} color="#8b5cf6" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              إدارة المشرفين والقلادات المعتمدة
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            تنظيم هيكل الوكالة يساعد رئيس الوكالة على تفويض المهام ومتابعة المذيعين عبر المشرف المساعد الحاصل على القلادة الفضية المعتمدة.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(245,158,11,0.4)' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#f59e0b' }}>الحساب الأساسي</span>
              <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '8px 0' }}>القلادة الذهبية (صاحب الوكالة)</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                تمنح حصرياً للحساب الرسمي لصاحب الوكالة، وتتيح التحكم الكامل في العقود، استلام العمولات، والتواصل مع الإدارة.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(148,163,184,0.4)' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#94a3b8' }}>المشرف المساعد</span>
              <h3 style={{ fontSize: '18px', fontWeight: '800', margin: '8px 0' }}>القلادة الفضية (مشرف معتمد)</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                تمنح لحساب واحد فقط مساعد لرئيس الوكالة لمساعدته في متابعة المذيعين وحل المشكلات اليومية وجداول البث.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic view for custom or edited items */}
      {!['register-hosts', 'unban', 'trend', 'supervisors'].includes(activeSubOption) && (
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
