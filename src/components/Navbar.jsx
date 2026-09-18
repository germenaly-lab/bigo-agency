import React, { useState, useEffect } from 'react';
import {
  Home,
  Users,
  Sparkles,
  CreditCard,
  DollarSign,
  Tv,
  Search,
  User,
  LogOut,
  Sun,
  Moon,
  Languages
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';
import { getSavedLanguage, toggleLanguage } from '../utils/translator';

const iconMap = {
  Home: Home,
  Users: Users,
  Sparkles: Sparkles,
  CreditCard: CreditCard,
  DollarSign: DollarSign,
  Tv: Tv
};

export default function Navbar({
  navItems,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  user,
  onLogout,
  themeMode,
  onToggleThemeMode
}) {
  const [currentLang, setCurrentLang] = useState(getSavedLanguage());

  useEffect(() => {
    const handleLangChange = (e) => {
      setCurrentLang(e.detail || getSavedLanguage());
    };
    window.addEventListener('scope_language_changed', handleLangChange);
    return () => window.removeEventListener('scope_language_changed', handleLangChange);
  }, []);
  return (
    <header className="main-header">
      <nav className="nav-bar">
        {/* Brand Logo */}
        <div
          className="logo-area"
          onClick={() => {
            if (user) {
              setActiveTab('home');
            } else {
              setActiveTab('login');
            }
          }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <ScopeLogo size="md" showText={true} />
        </div>

        {/* Navigation Links: Rendered ONLY when user is logged in */}
        {user && (
          <ul className="nav-links">
            {navItems.map((item) => {
              if (item.id === 'login' || item.id === 'admin') return null;
              const Icon = iconMap[item.icon] || Home;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-tab ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.location.hash === '#admin') {
                        window.history.pushState(null, '', window.location.pathname);
                      }
                    }}
                  >
                    <Icon size={14} />
                    <span style={{ fontSize: '12.5px' }}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Controls: Theme toggle, Language toggle, Search, and Account Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Small Language Toggle Icon Button */}
          <button
            type="button"
            className="action-btn-secondary"
            onClick={() => {
              const next = toggleLanguage();
              setCurrentLang(next);
            }}
            style={{
              padding: '6px 10px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: '800',
              cursor: 'pointer',
              color: currentLang === 'en' ? '#22d3ee' : '#f59e0b',
              borderColor: currentLang === 'en' ? 'rgba(6,182,212,0.45)' : 'rgba(245,158,11,0.3)'
            }}
            title={currentLang === 'en' ? 'التحويل إلى اللغة العربية' : 'Translate entire site to English'}
          >
            <Languages size={14} color={currentLang === 'en' ? '#22d3ee' : '#f59e0b'} />
            <span style={{ fontSize: '11.5px' }}>{currentLang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          <button
            type="button"
            className="action-btn-secondary"
            onClick={onToggleThemeMode}
            style={{ padding: '6px 10px', borderRadius: '9999px' }}
            title={themeMode === 'light' ? 'الوضع الليلي' : 'الوضع الساطع'}
          >
            {themeMode === 'light' ? <Moon size={15} color="#8b5cf6" /> : <Sun size={15} color="#f59e0b" />}
          </button>

          {user && (
            <>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search
                  size={14}
                  style={{ position: 'absolute', right: '10px', color: '#94a3b8', pointerEvents: 'none' }}
                />
                <input
                  type="text"
                  placeholder="بحث في الأقسام..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '6px 30px 6px 12px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(15,23,42,0.6)',
                    color: '#fff',
                    fontSize: '12px',
                    outline: 'none',
                    width: '130px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#06b6d4',
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              >
                <User size={13} />
                <span>{user.name.split(' ')[0]}</span>
              </div>

              <button
                className="action-btn-secondary"
                onClick={onLogout}
                style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', padding: '6px 12px' }}
                title="تسجيل الخروج"
              >
                <LogOut size={14} />
                <span style={{ fontSize: '12px' }}>خروج</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
