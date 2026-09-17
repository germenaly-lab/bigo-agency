import React, { useState } from 'react';
import {
  CreditCard,
  ArrowDownCircle,
  Building2,
  Wallet,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Coins,
  DollarSign
} from 'lucide-react';

export default function BeanWithdrawalSection({ onBackToHome, setActiveTab }) {
  const [activeTab, setActiveTabLocal] = useState('agent'); // 'agent' (وكيل شحن) or 'withdrawal' (طريقة السحب)

  return (
    <section style={{ maxWidth: '1080px', margin: '0 auto' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '14px' }}>
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
          padding: '32px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(22,30,49,0.85))',
          border: '1px solid rgba(139,92,246,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(139,92,246,0.35)',
              flexShrink: 0
            }}
          >
            <CreditCard size={32} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '4px' }}>
              سحب الفاصوليا (Bean Withdrawal & Cashout)
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              دليل وكيل الشحن المعتمد، إجراءات السحب البنكي، ومواعيد التحويل الرسمية
            </p>
          </div>
        </div>

        <button
          onClick={onBackToHome}
          className="action-btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <ArrowRight size={16} />
          <span>الرجوع للأقسام</span>
        </button>
      </div>

      {/* Main Dual Cards / Sub-section Switcher */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        {/* Option 1: وكيل شحن */}
        <div
          onClick={() => setActiveTabLocal('agent')}
          className="glass-card"
          style={{
            padding: '28px',
            cursor: 'pointer',
            border: activeTab === 'agent' ? '2px solid #8b5cf6' : '1px solid var(--glass-border)',
            background: activeTab === 'agent' ? 'rgba(139,92,246,0.1)' : 'var(--bg-card)',
            transition: 'var(--transition-fast)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(139,92,246,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <RefreshCw size={24} color="#8b5cf6" />
            </div>
            <span
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: activeTab === 'agent' ? '#8b5cf6' : 'rgba(255,255,255,0.06)',
                color: activeTab === 'agent' ? '#fff' : 'var(--text-muted)',
                fontWeight: '800'
              }}
            >
              الخيار الأول
            </span>
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '8px' }}>وكيل شحن</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            شرح كامل لآلية وكيل الشحن، شراء الفاصوليا والماس، أسعار الوكالات، وإعادة التوزيع للمستخدمين والمذيعين.
          </p>
        </div>

        {/* Option 2: طريقة السحب */}
        <div
          onClick={() => setActiveTabLocal('withdrawal')}
          className="glass-card"
          style={{
            padding: '28px',
            cursor: 'pointer',
            border: activeTab === 'withdrawal' ? '2px solid #06b6d4' : '1px solid var(--glass-border)',
            background: activeTab === 'withdrawal' ? 'rgba(6,182,212,0.1)' : 'var(--bg-card)',
            transition: 'var(--transition-fast)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(6,182,212,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowDownCircle size={24} color="#06b6d4" />
            </div>
            <span
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: activeTab === 'withdrawal' ? '#06b6d4' : 'rgba(255,255,255,0.06)',
                color: activeTab === 'withdrawal' ? '#fff' : 'var(--text-muted)',
                fontWeight: '800'
              }}
            >
              الخيار الثاني
            </span>
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '8px' }}>طريقة السحب</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            الخطوات التفصيلية لتحويل الفاصوليا إلى مبالغ نقدية عبر الحساب البنكي، Payoneer، أو المحافظ الرقمية.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION CONTENT 1: وكيل شحن */}
      {/* ======================================================== */}
      {activeTab === 'agent' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(139,92,246,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <RefreshCw size={28} color="#8b5cf6" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              دليل وإجراءات: وكيل الشحن المعتمد (Charging Agent)
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            وكيل الشحن المعتمد هو جهة أو وكالة مرخصة من إدارة Bigo Live لشراء حزم الماس والفاصوليا بأسعار الجملة الرسمية، وإعادة شحنها مباشرة لحسابات المذيعين والمستخدمين بسرعة وأمان.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Coins size={22} color="#8b5cf6" />
                <h3 style={{ fontSize: '17px', fontWeight: '800' }}>أسعار الوكالات الرسمية</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                يحصل وكيل الشحن على خصومات حصرية وهامش ربح مباشر عند شراء الحزم الكبيرة من المنصة، مما يتيح له تقديم أسعار منافسة للمستخدمين والداعمين.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <ShieldCheck size={22} color="#8b5cf6" />
                <h3 style={{ fontSize: '17px', fontWeight: '800' }}>الأمان وحماية الحسابات</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                تتم عمليات الشحن الرسمية حصرياً عبر Bigo ID دون الحاجة إطلاقاً لطلب كلمة المرور أو بيانات الدخول الخاصة بحساب المستخدم، لحماية الخصوصية.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Wallet size={22} color="#8b5cf6" />
                <h3 style={{ fontSize: '17px', fontWeight: '800' }}>شروط اعتماد وكيل الشحن</h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                يشترط وجود سجل وكالة نشط وخالٍ من المخالفات، وتوفير ضمان مالي معتمد، والالتزام بسياسة التسعير الموحدة الصادرة من الإدارة.
              </p>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '14px',
              padding: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            <AlertCircle size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '14px', color: '#fca5a5', lineHeight: '1.6' }}>
              <strong>تحذير أمني هام:</strong> تجنب التعامل مع أي جهات شحن غير معتمدة أو مجهولة المصدر، حيث يؤدي شحن رصيد غير نظامي أو مسروق إلى حظر حساب الوكالة والمذيعين بشكل نهائي.
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SECTION CONTENT 2: طريقة السحب */}
      {/* ======================================================== */}
      {activeTab === 'withdrawal' && (
        <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(6,182,212,0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <ArrowDownCircle size={28} color="#06b6d4" />
            <h2 style={{ fontSize: '22px', fontWeight: '900' }}>
              دليل وإجراءات: طريقة سحب الفاصوليا (Withdrawal Procedure)
            </h2>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
            يوضح هذا القسم الخطوات الرسمية والشروط المعتمدة لسحب الفاصوليا والأرباح الشهرية من التطبيق إلى الحساب البنكي أو الحسابات الإلكترونية المعتمدة.
          </p>

          {/* Steps List */}
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#06b6d4', marginBottom: '16px' }}>
            خطوات سحب الأرباح من محفظة التطبيق:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#06b6d4', color: '#0b0f19', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', flexShrink: 0 }}>
                1
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>
                  الدخول إلى محفظة الفاصوليا
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  افتح قائمة (أنا) داخل التطبيق، ثم اختر (المحفظة)، وانقر على تبويب (الفاصوليا)، ثم اضغط على زر (سحب الأرباح - Cashout).
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#06b6d4', color: '#0b0f19', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', flexShrink: 0 }}>
                2
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>
                  اختيار وسيلة السحب وتأكيد الحساب
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  اختر وسيلة الدفع المناسبة (حساب بنكي محلي عبر IBAN أو حساب Payoneer موثق)، وتأكد من تطابق اسم صاحب الحساب البنكي مع الهوية المسجلة.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#06b6d4', color: '#0b0f19', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', flexShrink: 0 }}>
                3
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>
                  تحديد كمية الفاصوليا وتأكيد الطلب
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  أدخل كمية الفاصوليا المراد سحبها. سيظهر لك النظام المبلغ المقابل بالدولار الأمريكي (USD) بعد احتساب أي رسوم تحويل، ثم أكد العملية برمز التحقق.
                </p>
              </div>
            </div>
          </div>

          {/* Key Guidelines Box */}
          <div
            style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.3)',
              borderRadius: '16px',
              padding: '24px'
            }}
          >
            <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#06b6d4', marginBottom: '14px' }}>
              معلومات وضوابط السحب الأساسية:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>معدل التحويل الأساسي: 210 فاصوليا تعادل 1 دولار أمريكي (Gross).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>دورة تسوية وتحويل الأرباح الرسمية تتم في الأسبوع الأول من كل شهر ميلادي.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>الحد الأدنى لطلب السحب عبر الحساب البنكي هو 6,700 فاصوليا (حوالي $31 USD).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                <span>الحوالات البنكية الدولية تستغرق ما بين 3 إلى 5 أيام عمل للوصول إلى حسابك.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
