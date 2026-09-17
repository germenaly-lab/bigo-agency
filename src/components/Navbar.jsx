import React from 'react';
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
  Sliders,
  Sun,
  Moon
} from 'lucide-react';
import ScopeLogo from './ScopeLogo';

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
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}

            {/* Admin Dashboard Tab */}
            <li>
              <button
                className={`nav-tab ${activeTab === 'admin' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('admin');
                  window.location.hash = '#admin';
                }}
                style={{
                  background:
                    activeTab === 'admin'
                      ? 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(236,72,153,0.3))'
                      : 'rgba(245,158,11,0.08)',
                  borderColor: '#f59e0b',
                  color: '#f59e0b',
                  fontWeight: '800'
                }}
              >
                <Sliders size={16} color="#f59e0b" />
                <span>لوحة التحكم</span>
              </button>
            </li>
          </ul>
        )}

        {/* Controls: Theme toggle, Search, and Account Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            className="action-btn-secondary"
            onClick={onToggleThemeMode}
            style={{ padding: '8px 12px', borderRadius: '9999px' }}
            title={themeMode === 'light' ? 'الوضع الليلي' : 'الوضع الساطع'}
          >
            {themeMode === 'light' ? <Moon size={18} color="#8b5cf6" /> : <Sun size={18} color="#f59e0b" />}
          </button>

          {user && (
            <>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search
                  size={16}
                  style={{ position: 'absolute', right: '12px', color: '#94a3b8', pointerEvents: 'none' }}
                />
                <input
                  type="text"
                  placeholder="بحث في الأقسام..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '8px 36px 8px 14px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(15,23,42,0.6)',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none',
                    width: '140px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#06b6d4',
                  fontSize: '13px',
                  fontWeight: '700'
                }}
              >
                <User size={15} />
                <span>{user.name.split(' ')[0]}</span>
              </div>

              <button
                className="action-btn-secondary"
                onClick={onLogout}
                style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', padding: '8px 14px' }}
                title="تسجيل الخروج"
              >
                <LogOut size={16} />
                <span style={{ fontSize: '13px' }}>خروج</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
