// Utility for site-wide language switching (Arabic <-> English)

export function getSavedLanguage() {
  if (typeof window === 'undefined') return 'ar';
  
  // 1. Check cookie
  const match = document.cookie.match(/googtrans=\/ar\/([a-z]{2})/i);
  if (match && match[1]) {
    return match[1].toLowerCase();
  }
  
  // 2. Check localStorage
  const saved = localStorage.getItem('scope_lang');
  return saved === 'en' ? 'en' : 'ar';
}

export function applyLanguage(targetLang) {
  if (typeof window === 'undefined') return;
  const isEn = targetLang === 'en';
  const cookieVal = isEn ? '/ar/en' : '/ar/ar';

  // Save to localStorage
  localStorage.setItem('scope_lang', targetLang);

  // Set cookies for Google Translate (root, current domain, subdomains)
  const host = window.location.hostname;
  document.cookie = `googtrans=${cookieVal}; path=/;`;
  if (host && host !== 'localhost') {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host};`;
  }

  // Update DOM direction and lang attributes
  document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  document.documentElement.lang = targetLang;
  if (document.body) {
    document.body.style.direction = isEn ? 'ltr' : 'rtl';
  }

  // Dispatch custom event for React components
  window.dispatchEvent(new CustomEvent('scope_language_changed', { detail: targetLang }));

  // Trigger Google Translate engine if initialized
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = targetLang;
    combo.dispatchEvent(new Event('change'));
  } else {
    // If google translate widget is loading or not yet rendered, reload once to apply cookie
    // only if needed
    setTimeout(() => {
      const lateCombo = document.querySelector('.goog-te-combo');
      if (lateCombo) {
        lateCombo.value = targetLang;
        lateCombo.dispatchEvent(new Event('change'));
      }
    }, 500);
  }
}

export function toggleLanguage() {
  const current = getSavedLanguage();
  const next = current === 'en' ? 'ar' : 'en';
  applyLanguage(next);
  return next;
}
