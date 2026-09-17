import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCategories from './components/HomeCategories';
import AgencyManagementSection from './components/AgencyManagementSection';
import PointsUsageSection from './components/PointsUsageSection';
import BeanWithdrawalSection from './components/BeanWithdrawalSection';
import SalarySection from './components/SalarySection';
import LiveQualitySection from './components/LiveQualitySection';
import BadgesSection from './components/BadgesSection';
import UpdatesSection from './components/UpdatesSection';
import GalaSection from './components/GalaSection';
import EnglishGuide from './components/EnglishGuide';
import LoginSection from './components/LoginSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import CustomBlocksSection from './components/CustomBlocksSection';

import {
  navItems,
  siteInfo as defaultSiteInfo,
  badgesData as defaultBadgesData,
  updatesData as defaultUpdatesData,
  defaultCustomBlocks,
  defaultThemeConfig,
  defaultAccountsData,
  defaultAgencyManagementItems,
  defaultPointsUsageItems,
  defaultBeanWithdrawalItems,
  defaultSalaryTiers,
  defaultLiveQualityItems
} from './data/siteData';

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('scope_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState(() => {
    if (
      window.location.hash === '#admin' ||
      window.location.pathname.includes('admin') ||
      window.location.search.includes('admin')
    ) {
      return 'admin';
    }
    const savedUser = localStorage.getItem('scope_user');
    return savedUser ? 'home' : 'login';
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Persist user session in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('scope_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('scope_user');
    }
  }, [user]);

  // Dynamic Site State with localStorage persistence
  const [siteInfo, setSiteInfo] = useState(() => {
    const saved = localStorage.getItem('scope_siteInfo') || localStorage.getItem('bigo_siteInfo') || localStorage.getItem('gogo_siteInfo');
    return saved ? JSON.parse(saved) : defaultSiteInfo;
  });

  const [themeConfig, setThemeConfig] = useState(() => {
    const saved = localStorage.getItem('scope_themeConfig') || localStorage.getItem('bigo_themeConfig') || localStorage.getItem('gogo_themeConfig');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.baseFontSize && parsed.baseFontSize >= 16) {
          parsed.baseFontSize = 14;
        }
        if (parsed.headingFontSize && parsed.headingFontSize >= 24) {
          parsed.headingFontSize = 20;
        }
        return parsed;
      } catch {
        return defaultThemeConfig;
      }
    }
    return defaultThemeConfig;
  });

  const [updatesData, setUpdatesData] = useState(() => {
    const saved = localStorage.getItem('scope_updatesData') || localStorage.getItem('bigo_updatesData') || localStorage.getItem('gogo_updatesData');
    return saved ? JSON.parse(saved) : defaultUpdatesData;
  });

  const [badgesData, setBadgesData] = useState(() => {
    const saved = localStorage.getItem('scope_badgesData') || localStorage.getItem('bigo_badgesData') || localStorage.getItem('gogo_badgesData');
    return saved ? JSON.parse(saved) : defaultBadgesData;
  });

  const [customBlocks, setCustomBlocks] = useState(() => {
    const saved = localStorage.getItem('scope_customBlocks') || localStorage.getItem('bigo_customBlocks') || localStorage.getItem('gogo_customBlocks');
    return saved ? JSON.parse(saved) : defaultCustomBlocks;
  });

  const [accountsData, setAccountsData] = useState(() => {
    const saved = localStorage.getItem('scope_accountsData') || localStorage.getItem('bigo_accountsData') || localStorage.getItem('gogo_accountsData');
    return saved ? JSON.parse(saved) : defaultAccountsData;
  });

  // 5 Core Sections State Management
  const [agencyManagementItems, setAgencyManagementItems] = useState(() => {
    const saved = localStorage.getItem('scope_agencyManagementItems');
    return saved ? JSON.parse(saved) : defaultAgencyManagementItems;
  });

  const [pointsUsageItems, setPointsUsageItems] = useState(() => {
    const saved = localStorage.getItem('scope_pointsUsageItems');
    return saved ? JSON.parse(saved) : defaultPointsUsageItems;
  });

  const [beanWithdrawalItems, setBeanWithdrawalItems] = useState(() => {
    const saved = localStorage.getItem('scope_beanWithdrawalItems');
    return saved ? JSON.parse(saved) : defaultBeanWithdrawalItems;
  });

  const [salaryTiers, setSalaryTiers] = useState(() => {
    const saved = localStorage.getItem('scope_salaryTiers');
    return saved ? JSON.parse(saved) : defaultSalaryTiers;
  });

  const [liveQualityItems, setLiveQualityItems] = useState(() => {
    const saved = localStorage.getItem('scope_liveQualityItems');
    return saved ? JSON.parse(saved) : defaultLiveQualityItems;
  });

  // URL listener for #admin or /admin
  useEffect(() => {
    const handleUrlChange = () => {
      if (
        window.location.hash === '#admin' ||
        window.location.pathname.includes('admin') ||
        window.location.search.includes('admin')
      ) {
        setActiveTab('admin');
      }
    };
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('scope_siteInfo', JSON.stringify(siteInfo));
  }, [siteInfo]);

  useEffect(() => {
    localStorage.setItem('scope_themeConfig', JSON.stringify(themeConfig));
  }, [themeConfig]);

  useEffect(() => {
    localStorage.setItem('scope_updatesData', JSON.stringify(updatesData));
  }, [updatesData]);

  useEffect(() => {
    localStorage.setItem('scope_badgesData', JSON.stringify(badgesData));
  }, [badgesData]);

  useEffect(() => {
    localStorage.setItem('scope_customBlocks', JSON.stringify(customBlocks));
  }, [customBlocks]);

  useEffect(() => {
    localStorage.setItem('scope_accountsData', JSON.stringify(accountsData));
  }, [accountsData]);

  useEffect(() => {
    localStorage.setItem('scope_agencyManagementItems', JSON.stringify(agencyManagementItems));
  }, [agencyManagementItems]);

  useEffect(() => {
    localStorage.setItem('scope_pointsUsageItems', JSON.stringify(pointsUsageItems));
  }, [pointsUsageItems]);

  useEffect(() => {
    localStorage.setItem('scope_beanWithdrawalItems', JSON.stringify(beanWithdrawalItems));
  }, [beanWithdrawalItems]);

  useEffect(() => {
    localStorage.setItem('scope_salaryTiers', JSON.stringify(salaryTiers));
  }, [salaryTiers]);

  useEffect(() => {
    localStorage.setItem('scope_liveQualityItems', JSON.stringify(liveQualityItems));
  }, [liveQualityItems]);

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('scope_themeMode') || localStorage.getItem('bigo_themeMode') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('scope_themeMode', themeMode);
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  const handleToggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Dynamically apply Theme & Font changes to document
  useEffect(() => {
    const root = document.documentElement;
    if (themeConfig.fontFamily) {
      root.style.setProperty('--font-family', themeConfig.fontFamily);
    }
    if (themeConfig.primaryColor) {
      root.style.setProperty('--primary-gold', themeConfig.primaryColor);
    }
    if (themeConfig.glowColor) {
      root.style.setProperty('--primary-gold-glow', themeConfig.glowColor);
    }
    if (themeConfig.baseFontSize) {
      root.style.fontSize = `${themeConfig.baseFontSize}px`;
    }
  }, [themeConfig]);

  const handleLogout = () => {
    setUser(null);
    setActiveTab('login');
  };

  const handleResetDefaults = () => {
    localStorage.removeItem('scope_siteInfo');
    localStorage.removeItem('scope_themeConfig');
    localStorage.removeItem('scope_updatesData');
    localStorage.removeItem('scope_badgesData');
    localStorage.removeItem('scope_customBlocks');
    localStorage.removeItem('scope_accountsData');
    localStorage.removeItem('scope_themeMode');
    localStorage.removeItem('scope_agencyManagementItems');
    localStorage.removeItem('scope_pointsUsageItems');
    localStorage.removeItem('scope_beanWithdrawalItems');
    localStorage.removeItem('scope_salaryTiers');
    localStorage.removeItem('scope_liveQualityItems');

    setSiteInfo(defaultSiteInfo);
    setThemeConfig(defaultThemeConfig);
    setUpdatesData(defaultUpdatesData);
    setBadgesData(defaultBadgesData);
    setCustomBlocks(defaultCustomBlocks);
    setAccountsData(defaultAccountsData);
    setAgencyManagementItems(defaultAgencyManagementItems);
    setPointsUsageItems(defaultPointsUsageItems);
    setBeanWithdrawalItems(defaultBeanWithdrawalItems);
    setSalaryTiers(defaultSalaryTiers);
    setLiveQualityItems(defaultLiveQualityItems);
    setThemeMode('dark');
  };

  // Search filter logic
  const filteredUpdates = updatesData.filter(
    (u) =>
      u.title.includes(searchQuery) ||
      u.summary.includes(searchQuery) ||
      u.category.includes(searchQuery)
  );

  const filteredBadges = badgesData.filter(
    (b) =>
      b.title.includes(searchQuery) ||
      b.description.includes(searchQuery) ||
      b.badgeType.includes(searchQuery)
  );

  return (
    <div
      className={`app-container ${!user && activeTab !== 'admin' ? 'login-page-active' : ''}`}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Top Navbar: Rendered ONLY when user is authenticated on public site */}
      {(user && activeTab !== 'admin') && (
        <Navbar
          navItems={navItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          user={user}
          onLogout={handleLogout}
          themeMode={themeMode}
          onToggleThemeMode={handleToggleThemeMode}
        />
      )}

      {/* DEDICATED LOGIN GATE: No top bar, pure luxury professional login experience */}
      {!user && activeTab !== 'admin' ? (
        <LoginSection
          user={user}
          setUser={(newUser) => {
            setUser(newUser);
            setActiveTab('home');
          }}
          setActiveTab={setActiveTab}
          themeMode={themeMode}
          onToggleThemeMode={handleToggleThemeMode}
        />
      ) : (
        /* AUTHENTICATED ACCESS / ADMIN: Full Platform Available */
        <main className="main-content" style={{ flex: 1 }}>
          {/* Search Results Alert if user typed in search bar */}
          {searchQuery.trim() !== '' && activeTab !== 'admin' && (
            <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', border: '1px solid #f59e0b' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '8px' }}>
                نتائج البحث عن: "{searchQuery}"
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                تم تصفية المحتوى بناءً على كلمة البحث الخاصة بك.
              </p>
            </div>
          )}

          {/* Tab: ADMIN DASHBOARD */}
          {activeTab === 'admin' && (
            <AdminDashboard
              siteInfo={siteInfo}
              setSiteInfo={setSiteInfo}
              themeConfig={themeConfig}
              setThemeConfig={setThemeConfig}
              updatesData={updatesData}
              setUpdatesData={setUpdatesData}
              badgesData={badgesData}
              setBadgesData={setBadgesData}
              customBlocks={customBlocks}
              setCustomBlocks={setCustomBlocks}
              accountsData={accountsData}
              setAccountsData={setAccountsData}
              agencyManagementItems={agencyManagementItems}
              setAgencyManagementItems={setAgencyManagementItems}
              pointsUsageItems={pointsUsageItems}
              setPointsUsageItems={setPointsUsageItems}
              beanWithdrawalItems={beanWithdrawalItems}
              setBeanWithdrawalItems={setBeanWithdrawalItems}
              salaryTiers={salaryTiers}
              setSalaryTiers={setSalaryTiers}
              liveQualityItems={liveQualityItems}
              setLiveQualityItems={setLiveQualityItems}
              onResetDefaults={handleResetDefaults}
              onCloseAdmin={() => {
                setActiveTab(user ? 'home' : 'login');
                if (window.location.hash === '#admin' || window.location.pathname.includes('admin')) {
                  window.history.pushState(null, '', '/');
                }
              }}
            />
          )}

          {/* Tab 1: HOME - Shows Scope Hero, the 5 Primary Categories, Custom Blocks, and Updates */}
          {activeTab === 'home' && (
            <>
              <Hero setActiveTab={setActiveTab} siteInfo={siteInfo} />
              <HomeCategories onSelectCategory={(catId) => setActiveTab(catId)} />
              <CustomBlocksSection customBlocks={customBlocks} setActiveTab={setActiveTab} />
              <UpdatesSection updatesData={filteredUpdates} />
            </>
          )}

          {/* Category 1: إدارة الوكالة (Agency Management) */}
          {activeTab === 'agency-management' && (
            <AgencyManagementSection
              onBackToHome={() => setActiveTab('home')}
              setActiveTab={setActiveTab}
              items={agencyManagementItems}
            />
          )}

          {/* Category 2: استخدام النقاط (Points Usage) */}
          {activeTab === 'points-usage' && (
            <PointsUsageSection
              onBackToHome={() => setActiveTab('home')}
              setActiveTab={setActiveTab}
              items={pointsUsageItems}
            />
          )}

          {/* Category 3: سحب الفاصوليا (Bean Withdrawal) */}
          {activeTab === 'bean-withdrawal' && (
            <BeanWithdrawalSection
              onBackToHome={() => setActiveTab('home')}
              setActiveTab={setActiveTab}
              items={beanWithdrawalItems}
            />
          )}

          {/* Category 4: الرواتب (Salaries) */}
          {activeTab === 'salaries' && (
            <SalarySection
              onBackToHome={() => setActiveTab('home')}
              setActiveTab={setActiveTab}
              tiers={salaryTiers}
            />
          )}

          {/* Category 5: كواليتي اللايف (Live Quality) */}
          {activeTab === 'live-quality' && (
            <LiveQualitySection
              onBackToHome={() => setActiveTab('home')}
              setActiveTab={setActiveTab}
              pillars={liveQualityItems}
            />
          )}

          {/* Additional Reference Sections */}
          {activeTab === 'badges' && <BadgesSection badgesData={filteredBadges} />}
          {activeTab === 'updates' && <UpdatesSection updatesData={filteredUpdates} />}
          {activeTab === 'gala' && <GalaSection />}
          {activeTab === 'english' && <EnglishGuide />}
        </main>
      )}

      {(user && activeTab !== 'admin') && (
        <Footer setActiveTab={setActiveTab} user={user} />
      )}
      <Analytics />
    </div>
  );
}
