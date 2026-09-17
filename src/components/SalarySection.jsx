import React, { useState } from 'react';
import {
  DollarSign,
  Calculator,
  ArrowRight,
  Clock,
  Calendar,
  AlertCircle,
  Sparkles,
  Info,
  CheckCircle2,
  TableProperties
} from 'lucide-react';

export default function SalarySection({ onBackToHome, setActiveTab, newSalaryData = null }) {
  const [inputBeans, setInputBeans] = useState('');

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
        <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>الرواتب</span>
      </div>

      {/* Header Banner */}
      <div
        className="glass-card"
        style={{
          padding: '32px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(22,30,49,0.85))',
          border: '1px solid rgba(16,185,129,0.3)',
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(16,185,129,0.35)',
              flexShrink: 0
            }}
          >
            <DollarSign size={32} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '4px' }}>
              نظام الرواتب والعمولات (Salaries System)
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              جدول الرواتب المعتمد، احتساب عمولات الوكالة، وشروط استحقاق التارجت
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

      {/* Status Alert Banner: Table Updating */}
      <div
        className="glass-card"
        style={{
          padding: '24px',
          marginBottom: '28px',
          border: '1px solid rgba(245,158,11,0.4)',
          background: 'linear-gradient(135deg, rgba(245,158,11,0.08), transparent)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(245,158,11,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Info size={24} color="#f59e0b" />
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '6px' }}>
            تحديث جدول الرواتب الجديد
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            تمت إزالة مستويات الرواتب والقيم القديمة بالكامل. هذا القسم مهيأ بالكامل لاستقبال وتطبيق جدول الرواتب الجديد وقواعد الاحتساب الخاصة به فور اعتمادها وتزويدها.
          </p>
        </div>
      </div>

      {/* Salary Core Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(6,182,212,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Clock size={20} color="#06b6d4" />
            <h3 style={{ fontSize: '16px', fontWeight: '800' }}>ساعات البث المعتمدة</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            يتم احتساب جلسات البث التي لا تقل مدتها عن 60 دقيقة متواصلة كجلسة معتمدة لحساب التارجت.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(245,158,11,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Calendar size={20} color="#f59e0b" />
            <h3 style={{ fontSize: '16px', fontWeight: '800' }}>الأيام الفعالة شهرياً</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            يشترط استيفاء الحد الأدنى من أيام البث خلال الشهر الميلادي لاكتمال استحقاق الراتب.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '22px', border: '1px solid rgba(139,92,246,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Sparkles size={20} color="#8b5cf6" />
            <h3 style={{ fontSize: '16px', fontWeight: '800' }}>عمولة الوكالة (Bonus)</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            تُصرف عمولة الوكالة الشهرية بناءً على نسبة الإنجاز والشرائح المعتمدة في الجدول الجديد.
          </p>
        </div>
      </div>

      {/* Salary Table Section: Ready for New Table */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TableProperties size={24} color="#10b981" />
            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>
              جدول شرائح الرواتب والعمولات
            </h3>
          </div>
          <span
            style={{
              fontSize: '12px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(245,158,11,0.15)',
              color: '#f59e0b',
              fontWeight: '800',
              border: '1px solid rgba(245,158,11,0.3)'
            }}
          >
            بانتظار إدراج القيم الجديدة
          </span>
        </div>

        {newSalaryData && newSalaryData.length > 0 ? (
          /* Render dynamic table if new data is provided */
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>المستوى / الشريحة</th>
                  <th>التارجت (فاصوليا)</th>
                  <th>ساعات البث</th>
                  <th>أيام البث</th>
                  <th>راتب المذيع (USD)</th>
                  <th>عمولة الوكالة</th>
                </tr>
              </thead>
              <tbody>
                {newSalaryData.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '800', color: '#f59e0b' }}>{row.level}</td>
                    <td>{row.beans?.toLocaleString()}</td>
                    <td>{row.hours} ساعة</td>
                    <td>{row.days} يوم</td>
                    <td style={{ fontWeight: '700' }}>${row.salary} USD</td>
                    <td style={{ color: '#06b6d4', fontWeight: '700' }}>${row.agencyBonus} USD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Clean Structured Placeholder for New Table */
          <div
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.15)'
            }}
          >
            <TableProperties size={48} color="#94a3b8" style={{ margin: '0 auto 16px auto', opacity: 0.6 }} />
            <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
              الجدول الجديد جاهز للاستقبال
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>
              تم إعداد هيكل البيانات والواجهة البرمجية لتفعيل جدول الرواتب الجديد وقواعد الحساب فور تزويدها في المرحلة القادمة.
            </p>
          </div>
        )}
      </div>

      {/* Calculator Container: Prepared for New Logic */}
      <div className="glass-card" style={{ padding: '32px', border: '1px solid rgba(16,185,129,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Calculator size={24} color="#10b981" />
          <h3 style={{ fontSize: '20px', fontWeight: '800' }}>
            حاسبة الرواتب والعمولات المباشرة
          </h3>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
          أدخل كمية الفاصوليا لمعاينة محاكاة الاحتساب عند تفعيل الجدول الجديد:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label className="form-label">كمية الفاصوليا المحققة:</label>
            <input
              type="number"
              className="form-input"
              placeholder="مثال: 100000"
              value={inputBeans}
              onChange={(e) => setInputBeans(e.target.value)}
            />
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '6px' }}>
              سيتم ربط المعادلة آلياً مع قيم وحدود الشرائح فور إدخال الجدول الجديد.
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '20px',
              background: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              حالة المحاكاة الحالية
            </span>
            <span style={{ fontSize: '18px', fontWeight: '800', color: '#10b981' }}>
              بانتظار معادلات الجدول الجديد
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
