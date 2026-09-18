import React, { useState, useMemo } from 'react';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  FileText,
  Grid,
  Sliders,
  Palette,
  Award,
  Database,
  LogOut,
  ExternalLink,
  Plus,
  Edit2,
  Trash2,
  X,
  Search,
  Download,
  Upload,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  CreditCard,
  DollarSign,
  Tv,
  Eye,
  EyeOff,
  Lock,
  Layers
} from 'lucide-react';
import { resolveIcon, AVAILABLE_ICON_NAMES } from '../utils/iconHelper';

export default function AdminDashboard({
  siteInfo,
  setSiteInfo,
  themeConfig,
  setThemeConfig,
  updatesData,
  setUpdatesData,
  badgesData,
  setBadgesData,
  customBlocks,
  setCustomBlocks,
  accountsData = [],
  setAccountsData = () => {},
  agencyManagementItems = [],
  setAgencyManagementItems = () => {},
  pointsUsageItems = [],
  setPointsUsageItems = () => {},
  beanWithdrawalItems = [],
  setBeanWithdrawalItems = () => {},
  salaryTiers = [],
  setSalaryTiers = () => {},
  liveQualityItems = [],
  setLiveQualityItems = () => {},
  onResetDefaults,
  onCloseAdmin
}) {
  // Authentication State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem('scope_admin_auth') === 'true' || sessionStorage.getItem('bigo_admin_auth') === 'true';
  });
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Main Active Admin Tab
  const [activeTab, setActiveTab] = useState('overview'); 
  // 'overview', 'crm', 'sections', 'articles', 'blocks', 'settings', 'appearance', 'badges', 'backup'

  // Sub-tab for Core 5 Sections
  const [coreSectionTab, setCoreSectionTab] = useState('agency');
  // 'agency', 'points', 'beans', 'salaries', 'quality'

  // Success / Feedback Toast
  const [toastMessage, setToastMessage] = useState('');
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // ==========================================
  // AUTHENTICATION HANDLERS
  // ==========================================
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUsername.trim() === 'admin' && adminPassword === 'admin') {
      sessionStorage.setItem('scope_admin_auth', 'true');
      setIsAdminLoggedIn(true);
      setLoginError('');
      showToast('Welcome to Scope Admin Portal!');
    } else {
      setLoginError('Invalid username or password. Default is admin / admin');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('scope_admin_auth');
    sessionStorage.removeItem('bigo_admin_auth');
    setIsAdminLoggedIn(false);
  };

  // ==========================================
  // MODAL MANAGEMENT STATES
  // ==========================================
  // CRM Host/Client Modal
  const [crmModalOpen, setCrmModalOpen] = useState(false);
  const [editingCrmItem, setEditingCrmItem] = useState(null);
  const [crmFormData, setCrmFormData] = useState({
    name: '',
    bigoId: '',
    email: '',
    phone: '',
    role: 'host',
    badge: 'الفئة الفضية',
    tier: 'T3',
    targetBeans: '100,000',
    streamHours: '20',
    status: 'active',
    joinDate: 'September 2026',
    notes: ''
  });

  // Core Section Item Modal
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [editingSectionItem, setEditingSectionItem] = useState(null);
  const [sectionFormData, setSectionFormData] = useState({
    id: '',
    title: '',
    badge: '',
    category: '',
    icon: 'Sparkles',
    color: '#06b6d4',
    shortDesc: '',
    desc: '',
    detailsText: '',
    featuresText: '',
    // For Salary Tiers
    tier: 'T1',
    targetDisplay: '100,000 - 999,999',
    minBeans: 100000,
    maxBeans: 999999,
    baseRatio: 120,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 125
  });

  // Article Modal
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleFormData, setArticleFormData] = useState({
    title: '',
    summary: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    category: 'Agency News',
    link: '#',
    pinned: false
  });

  // Custom Block Modal
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [editingBlock, setEditingBlock] = useState(null);
  const [blockFormData, setBlockFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Feature',
    icon: 'Sparkles',
    color: '#f59e0b',
    buttonText: 'Learn More',
    buttonLink: '#',
    enabled: true
  });

  // Search & Filters
  const [crmSearch, setCrmSearch] = useState('');
  const [crmRoleFilter, setCrmRoleFilter] = useState('all');

  // ==========================================
  // CRM HANDLERS
  // ==========================================
  const filteredAccounts = useMemo(() => {
    return accountsData.filter((acc) => {
      const matchRole = crmRoleFilter === 'all' || acc.role === crmRoleFilter;
      const q = crmSearch.toLowerCase();
      const matchSearch =
        !q ||
        (acc.name && acc.name.toLowerCase().includes(q)) ||
        (acc.bigoId && acc.bigoId.toLowerCase().includes(q)) ||
        (acc.phone && acc.phone.includes(q)) ||
        (acc.email && acc.email.toLowerCase().includes(q));
      return matchRole && matchSearch;
    });
  }, [accountsData, crmRoleFilter, crmSearch]);

  const openNewCrmModal = () => {
    setEditingCrmItem(null);
    setCrmFormData({
      name: '',
      bigoId: '',
      email: '',
      phone: '',
      role: 'host',
      badge: 'الفئة الفضية',
      tier: 'T3',
      targetBeans: '100,000',
      streamHours: '20',
      status: 'active',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      notes: ''
    });
    setCrmModalOpen(true);
  };

  const openEditCrmModal = (acc) => {
    setEditingCrmItem(acc);
    setCrmFormData({
      name: acc.name || '',
      bigoId: acc.bigoId || '',
      email: acc.email || '',
      phone: acc.phone || '',
      role: acc.role || 'host',
      badge: acc.badge || 'الفئة الفضية',
      tier: acc.tier || 'T3',
      targetBeans: acc.targetBeans || '100,000',
      streamHours: acc.streamHours || '20',
      status: acc.status || 'active',
      joinDate: acc.joinDate || 'September 2026',
      notes: acc.notes || ''
    });
    setCrmModalOpen(true);
  };

  const handleSaveCrm = (e) => {
    e.preventDefault();
    if (!crmFormData.name.trim() || !crmFormData.bigoId.trim()) {
      alert('Please provide Full Name and Bigo ID.');
      return;
    }

    if (editingCrmItem) {
      setAccountsData((prev) =>
        prev.map((acc) => (acc.id === editingCrmItem.id ? { ...acc, ...crmFormData } : acc))
      );
      showToast(`Updated profile for ${crmFormData.name}`);
    } else {
      const newAcc = {
        id: 'acc-' + Date.now(),
        ...crmFormData
      };
      setAccountsData((prev) => [newAcc, ...prev]);
      showToast(`Registered new broadcaster/client: ${crmFormData.name}`);
    }
    setCrmModalOpen(false);
  };

  const handleDeleteCrm = (id, name) => {
    if (window.confirm(`Are you sure you want to delete profile "${name}"?`)) {
      setAccountsData((prev) => prev.filter((acc) => acc.id !== id));
      showToast(`Removed profile: ${name}`);
    }
  };

  const toggleCrmStatus = (id) => {
    setAccountsData((prev) =>
      prev.map((acc) => {
        if (acc.id !== id) return acc;
        const newStatus = acc.status === 'active' ? 'suspended' : 'active';
        return { ...acc, status: newStatus };
      })
    );
    showToast('Account status updated');
  };

  const exportCrmCsv = () => {
    const headers = ['Name', 'Bigo ID', 'Role', 'Status', 'Phone', 'Email', 'Tier', 'Target Beans', 'Hours', 'Joined', 'Notes'];
    const rows = accountsData.map((a) => [
      `"${a.name || ''}"`,
      `"${a.bigoId || ''}"`,
      `"${a.role || ''}"`,
      `"${a.status || ''}"`,
      `"${a.phone || ''}"`,
      `"${a.email || ''}"`,
      `"${a.tier || ''}"`,
      `"${a.targetBeans || ''}"`,
      `"${a.streamHours || ''}"`,
      `"${a.joinDate || ''}"`,
      `"${(a.notes || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `scope_agency_crm_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported CRM data to CSV');
  };

  // ==========================================
  // CORE 5 SECTIONS CRUD HANDLERS
  // ==========================================
  const openNewSectionItemModal = () => {
    setEditingSectionItem(null);
    setSectionFormData({
      id: 'item-' + Date.now(),
      title: '',
      badge: '',
      category: '',
      icon: 'Sparkles',
      color: '#06b6d4',
      shortDesc: '',
      desc: '',
      detailsText: '',
      featuresText: '',
      tier: 'T' + (salaryTiers.length + 1),
      targetDisplay: '100,000 - 500,000',
      minBeans: 100000,
      maxBeans: 500000,
      baseRatio: 120,
      requiredHours: 20,
      bonusRatio: 5,
      totalRatio: 125
    });
    setSectionModalOpen(true);
  };

  const openEditSectionItemModal = (item) => {
    setEditingSectionItem(item);
    setSectionFormData({
      id: item.id || '',
      title: item.title || item.name || '',
      badge: item.badge || '',
      category: item.category || '',
      icon: typeof item.icon === 'string' ? item.icon : 'Sparkles',
      color: item.color || '#06b6d4',
      shortDesc: item.shortDesc || '',
      desc: item.desc || '',
      detailsText: Array.isArray(item.details) ? item.details.join('\n') : '',
      featuresText: Array.isArray(item.features) ? item.features.join('\n') : '',
      tier: item.tier || 'T1',
      targetDisplay: item.targetDisplay || '',
      minBeans: item.minBeans || 0,
      maxBeans: item.maxBeans || 9999999,
      baseRatio: item.baseRatio || 120,
      requiredHours: item.requiredHours || 20,
      bonusRatio: item.bonusRatio || 5,
      totalRatio: item.totalRatio || 125
    });
    setSectionModalOpen(true);
  };

  const handleSaveSectionItem = (e) => {
    e.preventDefault();
    const cleanDetails = sectionFormData.detailsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const cleanFeatures = sectionFormData.featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (coreSectionTab === 'agency') {
      const payload = {
        id: editingSectionItem ? editingSectionItem.id : 'agency-' + Date.now(),
        title: sectionFormData.title,
        badge: sectionFormData.badge || 'Operation',
        icon: sectionFormData.icon,
        color: sectionFormData.color,
        shortDesc: sectionFormData.shortDesc || sectionFormData.desc,
        details: cleanDetails.length > 0 ? cleanDetails : ['Operational protocol step']
      };
      setAgencyManagementItems((prev) =>
        editingSectionItem
          ? prev.map((it) => (it.id === editingSectionItem.id ? { ...it, ...payload } : it))
          : [...prev, payload]
      );
      showToast(`Saved Agency Management Item`);
    } else if (coreSectionTab === 'points') {
      const payload = {
        id: editingSectionItem ? editingSectionItem.id : 'points-' + Date.now(),
        title: sectionFormData.title,
        icon: sectionFormData.icon,
        color: sectionFormData.color,
        desc: sectionFormData.desc || sectionFormData.shortDesc
      };
      setPointsUsageItems((prev) =>
        editingSectionItem
          ? prev.map((it) => (it.id === editingSectionItem.id ? { ...it, ...payload } : it))
          : [...prev, payload]
      );
      showToast(`Saved Points Usage Item`);
    } else if (coreSectionTab === 'beans') {
      const payload = {
        id: editingSectionItem ? editingSectionItem.id : 'beans-' + Date.now(),
        title: sectionFormData.title,
        category: sectionFormData.category || 'Official Option',
        icon: sectionFormData.icon,
        color: sectionFormData.color,
        features: cleanFeatures.length > 0 ? cleanFeatures : ['Quick payout execution']
      };
      setBeanWithdrawalItems((prev) =>
        editingSectionItem
          ? prev.map((it) => (it.id === editingSectionItem.id ? { ...it, ...payload } : it))
          : [...prev, payload]
      );
      showToast(`Saved Bean Withdrawal Item`);
    } else if (coreSectionTab === 'salaries') {
      const base = Number(sectionFormData.baseRatio) || 120;
      const bonus = Number(sectionFormData.bonusRatio) || 5;
      const payload = {
        id: editingSectionItem ? editingSectionItem.id : 'tier-' + Date.now(),
        tier: sectionFormData.tier,
        name: sectionFormData.title || `Tier ${sectionFormData.tier}`,
        targetDisplay: sectionFormData.targetDisplay,
        minBeans: Number(sectionFormData.minBeans) || 0,
        maxBeans: Number(sectionFormData.maxBeans) || 999999999,
        baseRatio: base,
        requiredHours: Number(sectionFormData.requiredHours) || 20,
        bonusRatio: bonus,
        totalRatio: base + bonus,
        color: sectionFormData.color,
        badge: sectionFormData.badge || 'Official Tier',
        desc: sectionFormData.desc || sectionFormData.shortDesc
      };
      setSalaryTiers((prev) =>
        editingSectionItem
          ? prev.map((it) => (it.id === editingSectionItem.id || it.tier === editingSectionItem.tier ? { ...it, ...payload } : it))
          : [...prev, payload]
      );
      showToast(`Saved Salary Tier: ${sectionFormData.tier}`);
    } else if (coreSectionTab === 'quality') {
      const payload = {
        id: editingSectionItem ? editingSectionItem.id : 'quality-' + Date.now(),
        title: sectionFormData.title,
        icon: sectionFormData.icon,
        color: sectionFormData.color,
        desc: sectionFormData.desc || sectionFormData.shortDesc
      };
      setLiveQualityItems((prev) =>
        editingSectionItem
          ? prev.map((it) => (it.id === editingSectionItem.id ? { ...it, ...payload } : it))
          : [...prev, payload]
      );
      showToast(`Saved Live Quality Pillar`);
    }

    setSectionModalOpen(false);
  };

  const handleDeleteSectionItem = (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    if (coreSectionTab === 'agency') {
      setAgencyManagementItems((prev) => prev.filter((it) => it.id !== id));
    } else if (coreSectionTab === 'points') {
      setPointsUsageItems((prev) => prev.filter((it) => it.id !== id));
    } else if (coreSectionTab === 'beans') {
      setBeanWithdrawalItems((prev) => prev.filter((it) => it.id !== id));
    } else if (coreSectionTab === 'salaries') {
      setSalaryTiers((prev) => prev.filter((it) => it.id !== id && it.tier !== id));
    } else if (coreSectionTab === 'quality') {
      setLiveQualityItems((prev) => prev.filter((it) => it.id !== id));
    }
    showToast('Item deleted successfully');
  };

  // ==========================================
  // ARTICLES HANDLERS
  // ==========================================
  const openNewArticleModal = () => {
    setEditingArticle(null);
    setArticleFormData({
      title: '',
      summary: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: 'Agency Updates',
      link: '#',
      pinned: false
    });
    setArticleModalOpen(true);
  };

  const openEditArticleModal = (art) => {
    setEditingArticle(art);
    setArticleFormData({
      title: art.title || '',
      summary: art.summary || '',
      date: art.date || '',
      category: art.category || 'Agency Updates',
      link: art.link || '#',
      pinned: art.pinned || false
    });
    setArticleModalOpen(true);
  };

  const handleSaveArticle = (e) => {
    e.preventDefault();
    if (!articleFormData.title.trim()) {
      alert('Article title is required.');
      return;
    }
    if (editingArticle) {
      setUpdatesData((prev) =>
        prev.map((a) => (a.id === editingArticle.id ? { ...a, ...articleFormData } : a))
      );
      showToast(`Updated article: "${articleFormData.title}"`);
    } else {
      const newArticle = {
        id: 'art-' + Date.now(),
        ...articleFormData
      };
      setUpdatesData((prev) => [newArticle, ...prev]);
      showToast(`Published article: "${articleFormData.title}"`);
    }
    setArticleModalOpen(false);
  };

  const handleDeleteArticle = (id, title) => {
    if (window.confirm(`Delete article "${title}"?`)) {
      setUpdatesData((prev) => prev.filter((a) => a.id !== id));
      showToast('Article deleted');
    }
  };

  // ==========================================
  // CUSTOM BLOCKS HANDLERS
  // ==========================================
  const openNewBlockModal = () => {
    setEditingBlock(null);
    setBlockFormData({
      title: '',
      subtitle: '',
      category: 'Featured Highlight',
      icon: 'Zap',
      color: '#f59e0b',
      buttonText: 'Explore',
      buttonLink: '#',
      enabled: true
    });
    setBlockModalOpen(true);
  };

  const openEditBlockModal = (block) => {
    setEditingBlock(block);
    setBlockFormData({
      title: block.title || '',
      subtitle: block.subtitle || '',
      category: block.category || 'Featured Highlight',
      icon: block.icon || 'Zap',
      color: block.color || '#f59e0b',
      buttonText: block.buttonText || 'Explore',
      buttonLink: block.buttonLink || '#',
      enabled: block.enabled !== false
    });
    setBlockModalOpen(true);
  };

  const handleSaveBlock = (e) => {
    e.preventDefault();
    if (!blockFormData.title.trim()) {
      alert('Block title is required.');
      return;
    }
    if (editingBlock) {
      setCustomBlocks((prev) =>
        prev.map((b) => (b.id === editingBlock.id ? { ...b, ...blockFormData } : b))
      );
      showToast(`Updated custom block: "${blockFormData.title}"`);
    } else {
      const newBlock = {
        id: 'block-' + Date.now(),
        ...blockFormData
      };
      setCustomBlocks((prev) => [...prev, newBlock]);
      showToast(`Added custom block: "${blockFormData.title}"`);
    }
    setBlockModalOpen(false);
  };

  const handleDeleteBlock = (id, title) => {
    if (window.confirm(`Delete custom block "${title}"?`)) {
      setCustomBlocks((prev) => prev.filter((b) => b.id !== id));
      showToast('Custom block deleted');
    }
  };

  const toggleBlockEnabled = (id) => {
    setCustomBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, enabled: !b.enabled } : b))
    );
    showToast('Block visibility toggled');
  };

  // ==========================================
  // BACKUP & RESTORE
  // ==========================================
  const exportFullBackup = () => {
    const fullState = {
      exportedAt: new Date().toISOString(),
      platform: 'Scope Agency Platform',
      version: '2.5',
      siteInfo,
      themeConfig,
      accountsData,
      agencyManagementItems,
      pointsUsageItems,
      beanWithdrawalItems,
      salaryTiers,
      liveQualityItems,
      updatesData,
      customBlocks,
      badgesData
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fullState, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `scope_full_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('Full JSON backup downloaded successfully');
  };

  const handleImportBackupFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.siteInfo) setSiteInfo(parsed.siteInfo);
        if (parsed.themeConfig) setThemeConfig(parsed.themeConfig);
        if (parsed.accountsData) setAccountsData(parsed.accountsData);
        if (parsed.agencyManagementItems) setAgencyManagementItems(parsed.agencyManagementItems);
        if (parsed.pointsUsageItems) setPointsUsageItems(parsed.pointsUsageItems);
        if (parsed.beanWithdrawalItems) setBeanWithdrawalItems(parsed.beanWithdrawalItems);
        if (parsed.salaryTiers) setSalaryTiers(parsed.salaryTiers);
        if (parsed.liveQualityItems) setLiveQualityItems(parsed.liveQualityItems);
        if (parsed.updatesData) setUpdatesData(parsed.updatesData);
        if (parsed.customBlocks) setCustomBlocks(parsed.customBlocks);
        if (parsed.badgesData) setBadgesData(parsed.badgesData);
        showToast('Backup restored successfully! All data updated.');
      } catch (err) {
        alert('Failed to parse JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // ==========================================
  // UN-AUTHENTICATED ADMIN LOGIN SCREEN (ENGLISH)
  // ==========================================
  if (!isAdminLoggedIn) {
    return (
      <div
        dir="ltr"
        style={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, rgba(11,15,25,0.95) 100%)'
        }}
      >
        <div
          className="glass-card"
          style={{
            width: '100%',
            maxWidth: '440px',
            padding: '36px 32px',
            borderRadius: '24px',
            border: '1px solid rgba(6,182,212,0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(6,182,212,0.4)',
                marginBottom: '16px'
              }}
            >
              <Lock size={28} color="#ffffff" />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#f8fafc', marginBottom: '6px' }}>
              Admin Console
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              Scope Agency Management Platform Control Center
            </p>
          </div>

          {loginError && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                fontSize: '13px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <AlertTriangle size={16} />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                Admin Username
              </label>
              <input
                type="text"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                placeholder="Enter admin username (admin)"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)',
                  color: '#f8fafc',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                Master Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter master password (admin)"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 42px 12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="action-btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '14.5px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                marginTop: '6px',
                boxShadow: '0 8px 20px rgba(6,182,212,0.3)'
              }}
            >
              Sign In to Admin Portal
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <button
              onClick={onCloseAdmin}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '13px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              ← Back to Public Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // AUTHENTICATED DASHBOARD (ENGLISH LTR)
  // ==========================================
  return (
    <div
      dir="ltr"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px 40px 16px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      {/* Toast Feedback */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '24px',
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid #06b6d4',
            color: '#38bdf8',
            padding: '12px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '700',
            fontSize: '14px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <CheckCircle2 size={18} color="#06b6d4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <div
        className="glass-card"
        style={{
          padding: '18px 24px',
          marginBottom: '20px',
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.8))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(6,182,212,0.35)'
            }}
          >
            <Sliders size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '19px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                Scope Management Console
              </h1>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: 'rgba(6,182,212,0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(6,182,212,0.3)'
                }}
              >
                PRO v2.5
              </span>
            </div>
            <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '2px 0 0 0' }}>
              Full Control CMS • CRM Broadcasters & Clients • 5 Core Sections • Live Sync
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onCloseAdmin}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#e2e8f0',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <ExternalLink size={15} />
            <span>Public Site</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm('Reset ALL website content and settings back to factory defaults?')) {
                onResetDefaults();
                showToast('Reset to default configurations');
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '10px',
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fbbf24',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={15} />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => {
              handleAdminLogout();
              if (onCloseAdmin) onCloseAdmin();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '10px',
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.3)',
              color: '#f87171',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Tab Navigation Bar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '20px'
        }}
      >
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
          { id: 'crm', label: `Hosts & Clients CRM (${accountsData.length})`, icon: Users },
          { id: 'sections', label: '5 Core Sections', icon: Layers },
          { id: 'articles', label: `Articles & News (${updatesData.length})`, icon: FileText },
          { id: 'blocks', label: `Custom Blocks (${customBlocks.length})`, icon: Grid },
          { id: 'settings', label: 'Site Settings & Contacts', icon: Sliders },
          { id: 'appearance', label: 'Appearance & Themes', icon: Palette },
          { id: 'badges', label: 'Badges & Honors', icon: Award },
          { id: 'backup', label: 'Backup & Restore', icon: Database }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '12px',
                border: isActive ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)',
                background: isActive ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.03)',
                color: isActive ? '#38bdf8' : '#94a3b8',
                fontSize: '13.5px',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={16} color={isActive ? '#38bdf8' : '#64748b'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* TAB 1: DASHBOARD OVERVIEW */}
      {/* ======================================================== */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Top Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>Registered Broadcasters</span>
                <Users size={20} color="#06b6d4" />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                {accountsData.filter((a) => a.role === 'host' || a.role === 'vip_host').length}
              </h2>
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>
                Active in Agency Roster
              </span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>Clients & Supervisors</span>
                <Award size={20} color="#f59e0b" />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                {accountsData.filter((a) => a.role !== 'host' && a.role !== 'vip_host').length}
              </h2>
              <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '700', marginTop: '4px', display: 'block' }}>
                Assigned Key Roles
              </span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>Active Articles</span>
                <FileText size={20} color="#8b5cf6" />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                {updatesData.length}
              </h2>
              <span style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: '700', marginTop: '4px', display: 'block' }}>
                Live on News Feed
              </span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(16,185,129,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>Custom Blocks</span>
                <Grid size={20} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                {customBlocks.filter((b) => b.enabled !== false).length}
              </h2>
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700', marginTop: '4px', display: 'block' }}>
                Displayed on Homepage
              </span>
            </div>
          </div>

          {/* Quick Actions & Short Cuts */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '16px' }}>
              Quick Management Shortcuts
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <button
                onClick={() => {
                  setActiveTab('crm');
                  openNewCrmModal();
                }}
                className="action-btn-primary"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              >
                <UserPlus size={18} />
                <span>Register Broadcaster</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('sections');
                  setCoreSectionTab('agency');
                }}
                className="action-btn-secondary"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              >
                <Layers size={18} />
                <span>Edit 5 Core Sections</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('articles');
                  openNewArticleModal();
                }}
                className="action-btn-secondary"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              >
                <Plus size={18} />
                <span>Post New Article</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('blocks');
                  openNewBlockModal();
                }}
                className="action-btn-secondary"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              >
                <Grid size={18} />
                <span>Add Custom Block</span>
              </button>
            </div>
          </div>

          {/* Core Sections Summary Widget */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '14px' }}>
              Active Modules in 5 Primary Categories
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>
                <span style={{ fontSize: '12px', color: '#06b6d4', fontWeight: '700' }}>1. Agency Ops</span>
                <h4 style={{ fontSize: '18px', fontWeight: '900', margin: '6px 0 2px 0' }}>{agencyManagementItems.length} Items</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Hosts, App & Agency Features</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '700' }}>2. Points Usage</span>
                <h4 style={{ fontSize: '18px', fontWeight: '900', margin: '6px 0 2px 0' }}>{pointsUsageItems.length} Items</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>PK Support, Gala, Bonus</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
                <span style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: '700' }}>3. Bean Cashout</span>
                <h4 style={{ fontSize: '18px', fontWeight: '900', margin: '6px 0 2px 0' }}>{beanWithdrawalItems.length} Methods</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Agent recharge / Distributor channel</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700' }}>4. Salary Tiers</span>
                <h4 style={{ fontSize: '18px', fontWeight: '900', margin: '6px 0 2px 0' }}>{salaryTiers.length} Tiers</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>T1 through T5 official scale</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}>
                <span style={{ fontSize: '12px', color: '#ec4899', fontWeight: '700' }}>5. Live Quality</span>
                <h4 style={{ fontSize: '18px', fontWeight: '900', margin: '6px 0 2px 0' }}>{liveQualityItems.length} Pillars</h4>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Lighting, Mic, Camera, Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: HOSTS & CLIENTS CRM */}
      {/* ======================================================== */}
      {activeTab === 'crm' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* CRM Controls & Filter Header */}
          <div
            className="glass-card"
            style={{
              padding: '20px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '280px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  value={crmSearch}
                  onChange={(e) => setCrmSearch(e.target.value)}
                  placeholder="Search by Name, Bigo ID, Phone, or Email..."
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13.5px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <select
                value={crmRoleFilter}
                onChange={(e) => setCrmRoleFilter(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)',
                  color: '#f8fafc',
                  fontSize: '13.5px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Roles ({accountsData.length})</option>
                <option value="host">Broadcasters (Hosts)</option>
                <option value="vip_host">VIP Stars</option>
                <option value="client">Clients / Supporters</option>
                <option value="supervisor">Supervisors</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={exportCrmCsv}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#e2e8f0',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                <Download size={15} />
                <span>Export CSV</span>
              </button>

              <button
                onClick={openNewCrmModal}
                className="action-btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '13.5px',
                  fontWeight: '700'
                }}
              >
                <UserPlus size={16} />
                <span>Register Broadcaster / Client</span>
              </button>
            </div>
          </div>

          {/* CRM Table */}
          <div className="glass-card" style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--glass-border)' }}>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Profile & Name</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Bigo Live ID</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Role</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Tier & Target</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Stream Hours</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Status</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8' }}>Contact</th>
                    <th style={{ padding: '14px 16px', fontWeight: '800', color: '#94a3b8', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccounts.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ padding: '36px', textAlign: 'center', color: '#64748b' }}>
                        No profiles found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredAccounts.map((acc, idx) => (
                      <tr
                        key={acc.id || idx}
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                          background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)'
                        }}
                      >
                        {/* Name */}
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '14px' }}>{acc.name}</div>
                          {acc.notes && (
                            <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: '2px' }}>{acc.notes}</div>
                          )}
                        </td>

                        {/* Bigo ID */}
                        <td style={{ padding: '14px 16px' }}>
                          <span
                            style={{
                              fontFamily: 'monospace',
                              fontWeight: '700',
                              color: '#38bdf8',
                              background: 'rgba(6,182,212,0.1)',
                              padding: '2px 8px',
                              borderRadius: '6px'
                            }}
                          >
                            {acc.bigoId}
                          </span>
                        </td>

                        {/* Role */}
                        <td style={{ padding: '14px 16px' }}>
                          <span
                            style={{
                              fontSize: '11.5px',
                              fontWeight: '700',
                              padding: '3px 8px',
                              borderRadius: '9999px',
                              background:
                                acc.role === 'vip_host'
                                  ? 'rgba(245,158,11,0.15)'
                                  : acc.role === 'supervisor'
                                  ? 'rgba(139,92,246,0.15)'
                                  : 'rgba(6,182,212,0.15)',
                              color:
                                acc.role === 'vip_host'
                                  ? '#fbbf24'
                                  : acc.role === 'supervisor'
                                  ? '#a78bfa'
                                  : '#38bdf8'
                            }}
                          >
                            {acc.role === 'vip_host'
                              ? 'VIP Host'
                              : acc.role === 'supervisor'
                              ? 'Supervisor'
                              : acc.role === 'client'
                              ? 'Client'
                              : 'Broadcaster'}
                          </span>
                        </td>

                        {/* Tier & Target */}
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ fontWeight: '700', color: '#f8fafc' }}>{acc.tier || 'T3'}</div>
                          <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>{acc.targetBeans} beans</div>
                        </td>

                        {/* Hours */}
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ fontWeight: '700', color: '#e2e8f0' }}>{acc.streamHours || 0} hrs</span>
                        </td>

                        {/* Status */}
                        <td style={{ padding: '14px 16px' }}>
                          <button
                            onClick={() => toggleCrmStatus(acc.id)}
                            title="Click to toggle status"
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <span
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: acc.status === 'active' ? '#10b981' : '#ef4444'
                              }}
                            />
                            <span
                              style={{
                                fontSize: '12px',
                                fontWeight: '700',
                                color: acc.status === 'active' ? '#34d399' : '#f87171'
                              }}
                            >
                              {acc.status === 'active' ? 'Active' : 'Suspended'}
                            </span>
                          </button>
                        </td>

                        {/* Contact */}
                        <td style={{ padding: '14px 16px' }}>
                          {acc.phone && <div style={{ fontSize: '12px', color: '#cbd5e1' }}>{acc.phone}</div>}
                          {acc.email && <div style={{ fontSize: '11.5px', color: '#64748b' }}>{acc.email}</div>}
                        </td>

                        {/* Actions */}
                        <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                            <button
                              onClick={() => openEditCrmModal(acc)}
                              style={{
                                padding: '6px',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#38bdf8',
                                cursor: 'pointer'
                              }}
                              title="Edit Profile"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteCrm(acc.id, acc.name)}
                              style={{
                                padding: '6px',
                                borderRadius: '8px',
                                background: 'rgba(239,68,68,0.1)',
                                border: '1px solid rgba(239,68,68,0.2)',
                                color: '#f87171',
                                cursor: 'pointer'
                              }}
                              title="Delete Profile"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: 5 CORE SECTIONS DYNAMIC MANAGER */}
      {/* ======================================================== */}
      {activeTab === 'sections' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Sub-Tabs for the 5 Categories */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              borderBottom: '1px solid var(--glass-border)',
              paddingBottom: '12px',
              overflowX: 'auto'
            }}
          >
            {[
              { id: 'agency', label: `1. Agency Management (${agencyManagementItems.length})`, icon: Users },
              { id: 'points', label: `2. Points Usage (${pointsUsageItems.length})`, icon: Sparkles },
              { id: 'beans', label: `3. Bean Cashout (${beanWithdrawalItems.length})`, icon: CreditCard },
              { id: 'salaries', label: `4. Salary Tiers (${salaryTiers.length})`, icon: DollarSign },
              { id: 'quality', label: `5. Live Quality (${liveQualityItems.length})`, icon: Tv }
            ].map((sub) => {
              const Icon = sub.icon;
              const isSelected = coreSectionTab === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setCoreSectionTab(sub.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(6,182,212,0.15)' : 'transparent',
                    border: isSelected ? '1px solid #06b6d4' : '1px solid transparent',
                    color: isSelected ? '#38bdf8' : '#94a3b8',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={16} />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* Section Action Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                {coreSectionTab === 'agency' && 'Agency Management Operations'}
                {coreSectionTab === 'points' && 'Points Usage & Exchange Methods'}
                {coreSectionTab === 'beans' && 'Bean Cashout & Withdrawal Channels'}
                {coreSectionTab === 'salaries' && 'Salary Tiers & Commission Scale'}
                {coreSectionTab === 'quality' && 'Live Quality Standards & Pillars'}
              </h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
                Add, customize, reorder, or delete cards appearing in this primary section.
              </p>
            </div>

            <button
              onClick={openNewSectionItemModal}
              className="action-btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '10px',
                fontSize: '13.5px',
                fontWeight: '700'
              }}
            >
              <Plus size={16} />
              <span>Add New Card</span>
            </button>
          </div>

          {/* Current Section Items Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {/* 1. Agency Items */}
            {coreSectionTab === 'agency' &&
              agencyManagementItems.map((item) => {
                const Icon = resolveIcon(item.icon, Users);
                return (
                  <div
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '20px', border: `1px solid ${item.color || '#06b6d4'}44`, display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: `${item.color || '#06b6d4'}22`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={20} color={item.color || '#06b6d4'} />
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          background: `${item.color || '#06b6d4'}18`,
                          color: item.color || '#06b6d4'
                        }}
                      >
                        {item.badge || 'Operation'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#f8fafc', marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flex: 1 }}>{item.shortDesc}</p>
                    {item.details && item.details.length > 0 && (
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '10px' }}>
                        ✓ {item.details.length} procedural steps configured
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      <button
                        onClick={() => openEditSectionItemModal(item)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#38bdf8',
                          fontSize: '12.5px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSectionItem(item.id)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(239,68,68,0.1)',
                          border: '1px solid rgba(239,68,68,0.2)',
                          color: '#f87171',
                          fontSize: '12.5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}

            {/* 2. Points Items */}
            {coreSectionTab === 'points' &&
              pointsUsageItems.map((item) => {
                const Icon = resolveIcon(item.icon, Sparkles);
                return (
                  <div
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '20px', border: `1px solid ${item.color || '#f59e0b'}44`, display: 'flex', flexDirection: 'column' }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: `${item.color || '#f59e0b'}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px'
                      }}
                    >
                      <Icon size={20} color={item.color || '#f59e0b'} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#f8fafc', marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flex: 1 }}>{item.desc}</p>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      <button
                        onClick={() => openEditSectionItemModal(item)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#38bdf8',
                          fontSize: '12.5px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSectionItem(item.id)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(239,68,68,0.1)',
                          border: '1px solid rgba(239,68,68,0.2)',
                          color: '#f87171',
                          fontSize: '12.5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}

            {/* 3. Beans Items */}
            {coreSectionTab === 'beans' &&
              beanWithdrawalItems.map((item) => {
                const Icon = resolveIcon(item.icon, CreditCard);
                return (
                  <div
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '20px', border: `1px solid ${item.color || '#8b5cf6'}44`, display: 'flex', flexDirection: 'column' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: `${item.color || '#8b5cf6'}22`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={20} color={item.color || '#8b5cf6'} />
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          background: `${item.color || '#8b5cf6'}18`,
                          color: item.color || '#8b5cf6'
                        }}
                      >
                        {item.category || 'Option'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#f8fafc', marginBottom: '6px' }}>{item.title}</h3>
                    {item.features && item.features.length > 0 && (
                      <ul style={{ paddingLeft: '18px', margin: '8px 0 0 0', flex: 1, fontSize: '12.5px', color: '#94a3b8' }}>
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ marginBottom: '4px' }}>{feat}</li>
                        ))}
                      </ul>
                    )}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      <button
                        onClick={() => openEditSectionItemModal(item)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#38bdf8',
                          fontSize: '12.5px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSectionItem(item.id)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(239,68,68,0.1)',
                          border: '1px solid rgba(239,68,68,0.2)',
                          color: '#f87171',
                          fontSize: '12.5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}

            {/* 4. Salaries Tiers */}
            {coreSectionTab === 'salaries' &&
              salaryTiers.map((item) => (
                <div
                  key={item.id || item.tier}
                  className="glass-card"
                  style={{ padding: '20px', border: `1px solid ${item.color || '#10b981'}44`, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: '900',
                        padding: '3px 10px',
                        borderRadius: '8px',
                        background: `${item.color || '#10b981'}22`,
                        color: item.color || '#10b981'
                      }}
                    >
                      {item.tier}
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>{item.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#f8fafc', marginBottom: '4px' }}>{item.name}</h3>
                  <div style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '700', marginBottom: '10px' }}>
                    Target: {item.targetDisplay}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                    <div>Base Ratio: <strong>{item.baseRatio}%</strong></div>
                    <div>Required Hours: <strong>{item.requiredHours}h</strong></div>
                    <div>Bonus Ratio: <strong>+{item.bonusRatio}%</strong></div>
                    <div>Total Ratio: <strong>{item.totalRatio || (item.baseRatio + item.bonusRatio)}%</strong></div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                    <button
                      onClick={() => openEditSectionItemModal(item)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#38bdf8',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Edit Tier
                    </button>
                    <button
                      onClick={() => handleDeleteSectionItem(item.id || item.tier)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.2)',
                        color: '#f87171',
                        fontSize: '12.5px',
                        cursor: 'pointer'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}

            {/* 5. Live Quality Items */}
            {coreSectionTab === 'quality' &&
              liveQualityItems.map((item) => {
                const Icon = resolveIcon(item.icon, Tv);
                return (
                  <div
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '20px', border: `1px solid ${item.color || '#ec4899'}44`, display: 'flex', flexDirection: 'column' }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: `${item.color || '#ec4899'}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px'
                      }}
                    >
                      <Icon size={20} color={item.color || '#ec4899'} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#f8fafc', marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flex: 1 }}>{item.desc}</p>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      <button
                        onClick={() => openEditSectionItemModal(item)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#38bdf8',
                          fontSize: '12.5px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteSectionItem(item.id)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(239,68,68,0.1)',
                          border: '1px solid rgba(239,68,68,0.2)',
                          color: '#f87171',
                          fontSize: '12.5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: ARTICLES & NEWS MANAGER */}
      {/* ======================================================== */}
      {activeTab === 'articles' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                Articles, Announcements & Policy News
              </h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
                Publish new articles, edit existing content, or remove outdated news.
              </p>
            </div>
            <button
              onClick={openNewArticleModal}
              className="action-btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '10px',
                fontSize: '13.5px',
                fontWeight: '700'
              }}
            >
              <Plus size={16} />
              <span>Write Article</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {updatesData.map((art) => (
              <div
                key={art.id}
                className="glass-card"
                style={{ padding: '22px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(6,182,212,0.15)',
                      color: '#38bdf8'
                    }}
                  >
                    {art.category || 'News'}
                  </span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{art.date}</span>
                </div>
                <h3 style={{ fontSize: '16.5px', fontWeight: '800', color: '#f8fafc', marginBottom: '8px', lineHeight: '1.4' }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', flex: 1 }}>{art.summary}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <button
                    onClick={() => openEditArticleModal(art)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#38bdf8',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteArticle(art.id, art.title)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      color: '#f87171',
                      fontSize: '12.5px',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 5: CUSTOM BLOCKS & CARDS */}
      {/* ======================================================== */}
      {activeTab === 'blocks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                Homepage Custom Blocks & Boxes
              </h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
                Add, toggle, or edit feature boxes, call-to-actions, and promotion blocks.
              </p>
            </div>
            <button
              onClick={openNewBlockModal}
              className="action-btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '10px',
                fontSize: '13.5px',
                fontWeight: '700'
              }}
            >
              <Plus size={16} />
              <span>Add Block</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {customBlocks.map((block) => {
              const Icon = resolveIcon(block.icon, Sparkles);
              const isEnabled = block.enabled !== false;
              return (
                <div
                  key={block.id}
                  className="glass-card"
                  style={{
                    padding: '22px',
                    borderRadius: '16px',
                    border: `1px solid ${isEnabled ? (block.color || '#f59e0b') + '44' : 'rgba(255,255,255,0.06)'}`,
                    opacity: isEnabled ? 1 : 0.6,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: `${block.color || '#f59e0b'}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} color={block.color || '#f59e0b'} />
                    </div>
                    <span
                      onClick={() => toggleBlockEnabled(block.id)}
                      title="Click to toggle enabled/disabled"
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        background: isEnabled ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
                        color: isEnabled ? '#34d399' : '#f87171',
                        cursor: 'pointer'
                      }}
                    >
                      {isEnabled ? 'Live on Site' : 'Hidden'}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#f8fafc', marginBottom: '6px' }}>{block.title}</h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', flex: 1 }}>{block.subtitle}</p>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                    Button: <strong>{block.buttonText || 'Click'}</strong> → {block.buttonLink || '#'}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                    <button
                      onClick={() => openEditBlockModal(block)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#38bdf8',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlock(block.id, block.title)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.2)',
                        color: '#f87171',
                        fontSize: '12.5px',
                        cursor: 'pointer'
                      }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 6: SITE SETTINGS & CONTACTS */}
      {/* ======================================================== */}
      {activeTab === 'settings' && (
        <div className="glass-card" style={{ padding: '28px', borderRadius: '18px', maxWidth: '780px' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '900', color: '#f8fafc', marginBottom: '8px' }}>
            General Site Settings & Contact Links
          </h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
            Configure agency name, brand subtitles, support numbers, WhatsApp, and Telegram links.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              showToast('Site settings updated successfully');
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                Agency Brand Title
              </label>
              <input
                type="text"
                value={siteInfo.title || ''}
                onChange={(e) => setSiteInfo({ ...siteInfo, title: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)',
                  color: '#f8fafc',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                Site Subtitle & Tagline
              </label>
              <input
                type="text"
                value={siteInfo.subtitle || ''}
                onChange={(e) => setSiteInfo({ ...siteInfo, subtitle: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)',
                  color: '#f8fafc',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                Hero Description
              </label>
              <textarea
                rows={3}
                value={siteInfo.description || ''}
                onChange={(e) => setSiteInfo({ ...siteInfo, description: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)',
                  color: '#f8fafc',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  lineHeight: '1.5'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  WhatsApp Direct URL
                </label>
                <input
                  type="text"
                  value={siteInfo.contactLinks?.whatsapp || ''}
                  onChange={(e) =>
                    setSiteInfo({
                      ...siteInfo,
                      contactLinks: { ...siteInfo.contactLinks, whatsapp: e.target.value }
                    })
                  }
                  placeholder="https://wa.me/..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  Telegram Support URL
                </label>
                <input
                  type="text"
                  value={siteInfo.contactLinks?.telegram || ''}
                  onChange={(e) =>
                    setSiteInfo({
                      ...siteInfo,
                      contactLinks: { ...siteInfo.contactLinks, telegram: e.target.value }
                    })
                  }
                  placeholder="https://t.me/..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  Agency Official Portal Link
                </label>
                <input
                  type="text"
                  value={siteInfo.contactLinks?.cibus || ''}
                  onChange={(e) =>
                    setSiteInfo({
                      ...siteInfo,
                      contactLinks: { ...siteInfo.contactLinks, cibus: e.target.value }
                    })
                  }
                  placeholder="https://www.scoopagency.online/"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  Logo Asset Path
                </label>
                <input
                  type="text"
                  value={siteInfo.logoAsset || ''}
                  onChange={(e) => setSiteInfo({ ...siteInfo, logoAsset: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13.5px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="action-btn-primary"
              style={{
                alignSelf: 'flex-start',
                padding: '12px 24px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '800',
                marginTop: '8px'
              }}
            >
              Save Settings
            </button>
          </form>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 7: APPEARANCE & THEMES */}
      {/* ======================================================== */}
      {activeTab === 'appearance' && (
        <div className="glass-card" style={{ padding: '28px', borderRadius: '18px', maxWidth: '780px' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '900', color: '#f8fafc', marginBottom: '8px' }}>
            Appearance, Typography & Color Accents
          </h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
            Customize system font family, base font sizes, and primary glowing accent colors.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px' }}>
                Primary Font Family
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                {[
                  { name: 'Cairo (Default)', val: "'Cairo', sans-serif" },
                  { name: 'Tajawal', val: "'Tajawal', sans-serif" },
                  { name: 'IBM Plex Arabic', val: "'IBM Plex Sans Arabic', sans-serif" },
                  { name: 'Inter (Modern)', val: "'Inter', sans-serif" }
                ].map((f) => (
                  <button
                    key={f.val}
                    type="button"
                    onClick={() => setThemeConfig({ ...themeConfig, fontFamily: f.val })}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      background: themeConfig.fontFamily === f.val ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.03)',
                      border: themeConfig.fontFamily === f.val ? '1px solid #06b6d4' : '1px solid var(--glass-border)',
                      color: themeConfig.fontFamily === f.val ? '#38bdf8' : '#e2e8f0',
                      fontFamily: f.val,
                      fontSize: '13.5px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px' }}>
                Primary Theme Accent Color
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {['#06b6d4', '#f59e0b', '#8b5cf6', '#10b981', '#ec4899', '#3b82f6'].map((col) => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setThemeConfig({ ...themeConfig, primaryColor: col, glowColor: `${col}44` })}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: col,
                      border: themeConfig.primaryColor === col ? '3px solid #ffffff' : 'none',
                      cursor: 'pointer',
                      boxShadow: themeConfig.primaryColor === col ? `0 0 16px ${col}` : 'none'
                    }}
                  />
                ))}
                <input
                  type="color"
                  value={themeConfig.primaryColor || '#06b6d4'}
                  onChange={(e) => setThemeConfig({ ...themeConfig, primaryColor: e.target.value, glowColor: `${e.target.value}44` })}
                  style={{ width: '40px', height: '40px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px' }}>
                  Base Text Size: {themeConfig.baseFontSize || 14}px
                </label>
                <input
                  type="range"
                  min="11"
                  max="18"
                  value={themeConfig.baseFontSize || 14}
                  onChange={(e) => setThemeConfig({ ...themeConfig, baseFontSize: Number(e.target.value) })}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px' }}>
                  Heading Text Size: {themeConfig.headingFontSize || 20}px
                </label>
                <input
                  type="range"
                  min="16"
                  max="28"
                  value={themeConfig.headingFontSize || 20}
                  onChange={(e) => setThemeConfig({ ...themeConfig, headingFontSize: Number(e.target.value) })}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', marginTop: '8px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                Live Typography Preview
              </div>
              <h3 style={{ fontSize: `${themeConfig.headingFontSize || 20}px`, fontWeight: '900', color: themeConfig.primaryColor, margin: '0 0 6px 0' }}>
                وكالة Scope الرسمية لإدارة المذيعين
              </h3>
              <p style={{ fontSize: `${themeConfig.baseFontSize || 14}px`, color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
                تجربة بصرية متميزة مع دعم كامل للخطوط المعتمدة وتناسق الأحجام عبر كافة الأجهزة.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 8: BADGES & HONORS */}
      {/* ======================================================== */}
      {activeTab === 'badges' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
              Official Agency Badges & Accreditation Honors
            </h2>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
              Manage Gold, Silver, and Celebrity Badges awarded to agency members.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {badgesData.map((b) => (
              <div
                key={b.id}
                className="glass-card"
                style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <Award size={26} color={b.color === 'gold' ? '#f59e0b' : b.color === 'silver' ? '#94a3b8' : '#cd7f32'} />
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#e2e8f0'
                    }}
                  >
                    {b.badgeType}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#f8fafc', marginBottom: '8px' }}>{b.title}</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', flex: 1 }}>{b.description}</p>
                {b.features && (
                  <ul style={{ paddingLeft: '18px', margin: '12px 0 0 0', fontSize: '12.5px', color: '#cbd5e1' }}>
                    {b.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ marginBottom: '4px' }}>{feat}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 9: BACKUP & RESTORE */}
      {/* ======================================================== */}
      {activeTab === 'backup' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '28px', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Download size={22} color="#06b6d4" />
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f8fafc', margin: 0 }}>
                Export Complete Platform Backup
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
              Download a complete JSON snapshot containing all broadcaster profiles, 5 section cards, articles, custom blocks, and site configurations.
            </p>
            <button
              onClick={exportFullBackup}
              className="action-btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '10px',
                fontSize: '13.5px',
                fontWeight: '700'
              }}
            >
              <Download size={16} />
              <span>Download JSON Backup</span>
            </button>
          </div>

          <div className="glass-card" style={{ padding: '28px', borderRadius: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Upload size={22} color="#10b981" />
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f8fafc', margin: 0 }}>
                Restore from JSON Backup
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
              Upload a previously exported Scope Agency JSON backup file to instantly restore all data.
            </p>
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '10px',
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#34d399',
                fontSize: '13.5px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              <Upload size={16} />
              <span>Select Backup File (.json)</span>
              <input type="file" accept=".json" onChange={handleImportBackupFile} style={{ display: 'none' }} />
            </label>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 1: CRM HOST / CLIENT REGISTRATION & EDIT */}
      {/* ======================================================== */}
      {crmModalOpen && (
        <div
          dir="ltr"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '28px',
              borderRadius: '20px',
              border: '1px solid rgba(6,182,212,0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <UserPlus size={22} color="#06b6d4" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                  {editingCrmItem ? 'Edit Broadcaster / Client Profile' : 'Register New Broadcaster / Client'}
                </h3>
              </div>
              <button
                onClick={() => setCrmModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveCrm} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={crmFormData.name}
                    onChange={(e) => setCrmFormData({ ...crmFormData, name: e.target.value })}
                    placeholder="e.g. Sara Al-Mansoor (Sara Live)"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Bigo Live ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={crmFormData.bigoId}
                    onChange={(e) => setCrmFormData({ ...crmFormData, bigoId: e.target.value })}
                    placeholder="e.g. sara_vip_99"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Role
                  </label>
                  <select
                    value={crmFormData.role}
                    onChange={(e) => setCrmFormData({ ...crmFormData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="host">Broadcaster (Host)</option>
                    <option value="vip_host">VIP Star Host</option>
                    <option value="client">Client / VIP Supporter</option>
                    <option value="supervisor">Sub-Agent / Supervisor</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Account Status
                  </label>
                  <select
                    value={crmFormData.status}
                    onChange={(e) => setCrmFormData({ ...crmFormData, status: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="active">Active (Contract Valid)</option>
                    <option value="pending">Pending Approval</option>
                    <option value="suspended">Suspended / Paused</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Assigned Salary Tier
                  </label>
                  <input
                    type="text"
                    value={crmFormData.tier}
                    onChange={(e) => setCrmFormData({ ...crmFormData, tier: e.target.value })}
                    placeholder="e.g. T1, T2, T3"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Monthly Target Beans
                  </label>
                  <input
                    type="text"
                    value={crmFormData.targetBeans}
                    onChange={(e) => setCrmFormData({ ...crmFormData, targetBeans: e.target.value })}
                    placeholder="e.g. 1,000,000"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={crmFormData.phone}
                    onChange={(e) => setCrmFormData({ ...crmFormData, phone: e.target.value })}
                    placeholder="+966 50 000 0000"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={crmFormData.email}
                    onChange={(e) => setCrmFormData({ ...crmFormData, email: e.target.value })}
                    placeholder="host@scoopagency.online"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Performance Notes & Remarks
                </label>
                <textarea
                  rows={2}
                  value={crmFormData.notes}
                  onChange={(e) => setCrmFormData({ ...crmFormData, notes: e.target.value })}
                  placeholder="Special achievements, PK battle rankings, contract details..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="action-btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '10px', fontWeight: '800' }}
                >
                  Save Profile
                </button>
                <button
                  type="button"
                  onClick={() => setCrmModalOpen(false)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: 5 CORE SECTIONS ITEM ADD / EDIT */}
      {/* ======================================================== */}
      {sectionModalOpen && (
        <div
          dir="ltr"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '28px',
              borderRadius: '20px',
              border: '1px solid rgba(6,182,212,0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={22} color="#06b6d4" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                  {editingSectionItem ? 'Edit Section Item' : 'Add New Section Item'}
                </h3>
              </div>
              <button
                onClick={() => setSectionModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveSectionItem} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Item Title *
                </label>
                <input
                  type="text"
                  required
                  value={sectionFormData.title}
                  onChange={(e) => setSectionFormData({ ...sectionFormData, title: e.target.value })}
                  placeholder="e.g. تسجيل مذيعين or Fast Cashout Service"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Icon & Color Selector */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Select Icon
                  </label>
                  <select
                    value={sectionFormData.icon}
                    onChange={(e) => setSectionFormData({ ...sectionFormData, icon: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  >
                    {AVAILABLE_ICON_NAMES.map((ic) => (
                      <option key={ic} value={ic}>{ic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Accent Color
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="color"
                      value={sectionFormData.color}
                      onChange={(e) => setSectionFormData({ ...sectionFormData, color: e.target.value })}
                      style={{ width: '36px', height: '36px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'none' }}
                    />
                    <input
                      type="text"
                      value={sectionFormData.color}
                      onChange={(e) => setSectionFormData({ ...sectionFormData, color: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '8px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--glass-border)',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Specific fields for Salaries */}
              {coreSectionTab === 'salaries' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '14px', borderRadius: '10px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#10b981', marginBottom: '4px' }}>
                        Tier Code (e.g. T1)
                      </label>
                      <input
                        type="text"
                        value={sectionFormData.tier}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, tier: e.target.value })}
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#10b981', marginBottom: '4px' }}>
                        Target Display Text
                      </label>
                      <input
                        type="text"
                        value={sectionFormData.targetDisplay}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, targetDisplay: e.target.value })}
                        placeholder="e.g. 100,000 - 999,999"
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                        Min Beans
                      </label>
                      <input
                        type="number"
                        value={sectionFormData.minBeans}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, minBeans: Number(e.target.value) })}
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                        Max Beans
                      </label>
                      <input
                        type="number"
                        value={sectionFormData.maxBeans}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, maxBeans: Number(e.target.value) })}
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                        Base Ratio (%)
                      </label>
                      <input
                        type="number"
                        value={sectionFormData.baseRatio}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, baseRatio: Number(e.target.value) })}
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '11.5px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                        Bonus (%)
                      </label>
                      <input
                        type="number"
                        value={sectionFormData.bonusRatio}
                        onChange={(e) => setSectionFormData({ ...sectionFormData, bonusRatio: Number(e.target.value) })}
                        style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', fontSize: '12px', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Description / Subtitle
                </label>
                <textarea
                  rows={2}
                  value={sectionFormData.desc || sectionFormData.shortDesc}
                  onChange={(e) =>
                    setSectionFormData({ ...sectionFormData, desc: e.target.value, shortDesc: e.target.value })
                  }
                  placeholder="Short description for this card..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Details / Features bullet lines */}
              {(coreSectionTab === 'agency' || coreSectionTab === 'beans') && (
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Bullet Points / Features (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={coreSectionTab === 'agency' ? sectionFormData.detailsText : sectionFormData.featuresText}
                    onChange={(e) =>
                      setSectionFormData({
                        ...sectionFormData,
                        detailsText: e.target.value,
                        featuresText: e.target.value
                      })
                    }
                    placeholder="Step 1 or Feature point&#10;Step 2 or Feature point&#10;Step 3..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box',
                      lineHeight: '1.5'
                    }}
                  />
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="action-btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '10px', fontWeight: '800' }}
                >
                  Save Item
                </button>
                <button
                  type="button"
                  onClick={() => setSectionModalOpen(false)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: ARTICLE ADD / EDIT */}
      {/* ======================================================== */}
      {articleModalOpen && (
        <div
          dir="ltr"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '28px',
              borderRadius: '20px',
              border: '1px solid rgba(6,182,212,0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={22} color="#06b6d4" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                  {editingArticle ? 'Edit Article' : 'Compose New Article'}
                </h3>
              </div>
              <button
                onClick={() => setArticleModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveArticle} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Article Headline *
                </label>
                <input
                  type="text"
                  required
                  value={articleFormData.title}
                  onChange={(e) => setArticleFormData({ ...articleFormData, title: e.target.value })}
                  placeholder="e.g. Bigo Live Official Commission Update for September"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={articleFormData.category}
                    onChange={(e) => setArticleFormData({ ...articleFormData, category: e.target.value })}
                    placeholder="e.g. Policy Update, Event, Announcement"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Publish Date
                  </label>
                  <input
                    type="text"
                    value={articleFormData.date}
                    onChange={(e) => setArticleFormData({ ...articleFormData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Article Content / Summary *
                </label>
                <textarea
                  rows={4}
                  required
                  value={articleFormData.summary}
                  onChange={(e) => setArticleFormData({ ...articleFormData, summary: e.target.value })}
                  placeholder="Full text summary or instructions for broadcasters..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                    lineHeight: '1.5'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Action / Source Link (Optional)
                </label>
                <input
                  type="text"
                  value={articleFormData.link}
                  onChange={(e) => setArticleFormData({ ...articleFormData, link: e.target.value })}
                  placeholder="# or https://..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="action-btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '10px', fontWeight: '800' }}
                >
                  Publish Article
                </button>
                <button
                  type="button"
                  onClick={() => setArticleModalOpen(false)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: CUSTOM BLOCK ADD / EDIT */}
      {/* ======================================================== */}
      {blockModalOpen && (
        <div
          dir="ltr"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '28px',
              borderRadius: '20px',
              border: '1px solid rgba(6,182,212,0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Grid size={22} color="#06b6d4" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#f8fafc', margin: 0 }}>
                  {editingBlock ? 'Edit Custom Block' : 'Add Custom Block'}
                </h3>
              </div>
              <button
                onClick={() => setBlockModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveBlock} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Block Headline *
                </label>
                <input
                  type="text"
                  required
                  value={blockFormData.title}
                  onChange={(e) => setBlockFormData({ ...blockFormData, title: e.target.value })}
                  placeholder="e.g. VIP Support Channel"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                  Subtitle / Description
                </label>
                <input
                  type="text"
                  value={blockFormData.subtitle}
                  onChange={(e) => setBlockFormData({ ...blockFormData, subtitle: e.target.value })}
                  placeholder="Direct assistance and agency onboarding..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    color: '#f8fafc',
                    fontSize: '13px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Select Icon
                  </label>
                  <select
                    value={blockFormData.icon}
                    onChange={(e) => setBlockFormData({ ...blockFormData, icon: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  >
                    {AVAILABLE_ICON_NAMES.map((ic) => (
                      <option key={ic} value={ic}>{ic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Color Accent
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="color"
                      value={blockFormData.color}
                      onChange={(e) => setBlockFormData({ ...blockFormData, color: e.target.value })}
                      style={{ width: '36px', height: '36px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'none' }}
                    />
                    <input
                      type="text"
                      value={blockFormData.color}
                      onChange={(e) => setBlockFormData({ ...blockFormData, color: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '8px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--glass-border)',
                        color: '#f8fafc',
                        fontSize: '12px'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Button Label
                  </label>
                  <input
                    type="text"
                    value={blockFormData.buttonText}
                    onChange={(e) => setBlockFormData({ ...blockFormData, buttonText: e.target.value })}
                    placeholder="e.g. Contact Now"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginBottom: '4px' }}>
                    Button Link / URL
                  </label>
                  <input
                    type="text"
                    value={blockFormData.buttonLink}
                    onChange={(e) => setBlockFormData({ ...blockFormData, buttonLink: e.target.value })}
                    placeholder="e.g. https://wa.me/..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      color: '#f8fafc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="action-btn-primary"
                  style={{ flex: 1, padding: '12px', borderRadius: '10px', fontWeight: '800' }}
                >
                  Save Block
                </button>
                <button
                  type="button"
                  onClick={() => setBlockModalOpen(false)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
