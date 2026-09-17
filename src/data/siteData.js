// Site Data - Scope Agency Management Platform

export const siteInfo = {
  title: "Scoop",
  subtitle: "المنصة المتكاملة لإدارة وتطوير وكالات البث المباشر",
  description: "منصة Scoop المتقدمة لإدارة المذيعين، احتساب الرواتب، متابعة النقاط، وسحب الأرباح بأعلى معايير الاحترافية.",
  heroBanner: "/images/image_1.png",
  logoAsset: "/assets/scope-logo.png",
  contactLinks: {
    whatsapp: "https://wa.me/",
    telegram: "https://t.me/",
    cibus: "https://sites.google.com/view/cibusjo/about-us"
  }
};

export const navItems = [
  { id: "home", label: "الرئيسية", icon: "Home" },
  { id: "agency-management", label: "إدارة الوكالة", icon: "Users" },
  { id: "points-usage", label: "استخدام النقاط", icon: "Sparkles" },
  { id: "bean-withdrawal", label: "سحب الفاصوليا", icon: "CreditCard" },
  { id: "salaries", label: "الرواتب", icon: "DollarSign" },
  { id: "live-quality", label: "كواليتي اللايف", icon: "Tv" },
];

export const badgesData = [
  {
    id: "gold",
    title: "قلادة الوكالة الذهبية",
    badgeType: "الأساسية",
    color: "gold",
    description: "هي القلادة الأساسية للوكالة والتي تعني أن هذا الحساب هو حساب وكالة معتمدة، وتكون فقط للحساب الأساسي صاحب الترخيص.",
    features: [
      "تثبيت شعار الوكالة الذهبي على الملف الشخصي",
      "صلاحية كاملة لإدارة المذيعين والمشرفين",
      "أولوية الحصول على الدعم الفني الخاص بالوكالات",
      "دخول اجتماعات الوكالات الرسمية مع إدارة المنصة"
    ],
    image: "/images/image_7.png"
  },
  {
    id: "silver",
    title: "قلادة الوكالة الفضية",
    badgeType: "المشرف المساعد",
    color: "silver",
    description: "هي قلادة مشرف الوكالة أو المساعد، وتمنح لحساب واحد فقط مختلف عن حساب الوكالة الأساسي لتفويض ومتابعة المهام.",
    features: [
      "تثبيت الشعار الفضي المعتمد للمشرف",
      "مساعدة رئيس الوكالة في متابعة المذيعين والتارجت",
      "إمكانية الانضمام لقروبات الوكلاء المساعدين"
    ],
    image: "/images/image_8.png"
  },
  {
    id: "celebrity",
    title: "قلادة المشاهير والداعمين",
    badgeType: "تكريم خاص",
    color: "bronze",
    description: "قلادة مميزة تُمنح لكبار المذيعين والداعمين والمشاركين البارزين داخل الوكالة تقديراً لجهودهم وإنجازاتهم الاستثنائية.",
    features: [
      "مظهر فريد ورتبة خاصة في رومات الوكالة",
      "أولوية المشاركة في الفعاليات والتكريمات السنوية"
    ],
    image: "/images/image_9.png"
  }
];

export const updatesData = [
  {
    id: 1,
    title: "تحديث سياسات التارجت والعمولات",
    date: "أغسطس 2026",
    category: "سياسات جديدة",
    summary: "تحديث شروط الساعات للمذيعين الجدد وبونص الوكالات المحققة للتارجت.",
    details: [
      "الحد الأدنى لساعات البث المباشر المعتمدة هو 30 ساعة شهرياً بمعدل ساعة واحدة يومياً على الأقل.",
      "تم إضافة بونص إضافي للوكالات ذات الأداء المتميز.",
      "التأكيد على منع الانتقال غير القانوني بين الوكالات دون موافقة الإدارة."
    ],
    badge: "مهم جداً"
  },
  {
    id: 2,
    title: "شروط توثيق حسابات الوكالات والمذيعين الرسمية",
    date: "يوليو 2026",
    category: "التوثيق والأمان",
    summary: "إرشادات حماية الحسابات وإكمال هوية الوكالة وتفادي البلاغات الوهمية.",
    details: [
      "ضرورة ربط الحساب برقم هاتف موثق وبريد إلكتروني نشط.",
      "تحديث بيانات الهوية المعتمدة.",
      "عدم مشاركة بيانات تسجيل الدخول مع أي طرف ثالث."
    ],
    badge: "تحديث أمني"
  },
  {
    id: 3,
    title: "انطلاق الاستعدادات لحفل GALA السنوي",
    date: "يونيو 2026",
    category: "فعاليات",
    summary: "فتح باب الترشيح للوكالات المتميزة للمشاركة في حفل الجالا السنوي.",
    details: [
      "الترشح يتم بناءً على مجموع النقاط المحققة خلال الربع الثالث والرابع.",
      "تكريم أفضل الوكالات المتميزة."
    ],
    badge: "حدث عالمي"
  }
];

// Target Tiers are cleared in preparation for the user's new salary table
export const targetTiers = [];

export const newAgenciesGuide = {
  title: "دليل تشغيل الوكالات",
  subtitle: "خارطة الطريق لإدارة وكالة بث مباشر ناجحة",
  sections: [
    {
      step: "01",
      title: "متطلبات إدارة الوكالة المعتمدة",
      content: [
        "الالتزام بسياسات البث المباشر ومعايير الجودة.",
        "توفر صاحب الوكالة على خبرة في إدارة المذيعين أو صناعة المحتوى.",
        "متابعة المذيعين الجدد وتحقيق التارجت في الشهر الأول.",
        "إكمال الهوية الرسمية وتعيين حساب الوكالة الأساسي للحصول على القلادة الذهبية."
      ]
    },
    {
      step: "02",
      title: "قواعد واشتراطات المذيعين",
      content: [
        "يجب أن يكون المذيع ملتزماً بالبث المباشر بجودة عالية وإضاءة مناسبة.",
        "الحد الأدنى للتارجت الشهري المقبول معتمد بحسب جدول الرواتب الرسمي.",
        "ممنوع البث أثناء القيادة أو البث في ظروف غير ملائمة تخرق سياسة السلامة.",
        "الالتزام بالقواعد السلوكية والأخلاقية وعدم مشاركة محتوى يحرض على الكراهية."
      ]
    },
    {
      step: "03",
      title: "إدارة الأرباح وسحب العمولات",
      content: [
        "يتم تحويل الأرباح والعمولات شهرية تلقائياً في الأسبوع الأول من كل شهر ميلادي.",
        "تتوفر خيارات السحب عبر الحساب البنكي، Payoneer، أو المحافظ الإلكترونية المعتمدة.",
        "يحق للوكالة متابعة كشوفات الحسابات والتارجت عبر اللوحة المخصصة للوكلاء."
      ]
    },
    {
      step: "04",
      title: "الدعم والمساندة الفنية",
      content: [
        "توفير مدراء حسابات مخصصين لمساعدة الوكالات المعتمدة.",
        "حل النزاعات وبلاغات المذيعين يتم خلال 24 إلى 48 ساعة كحد أقصى.",
        "تنسيق فعاليات ورومات دعم خاصة لوكالات الشبكة."
      ]
    }
  ]
};

export const galaData = {
  title: "حفل GALA السنوي العالمي",
  description: "احتفال الـGala هو الحدث السنوي الأبرز لتكريم الوكالات وصناع المحتوى المتميزين ودعوتهم لحضور هذا الاحتفال الدولي.",
  events: [
    {
      year: "2025",
      location: "الاحتفال العالمي",
      tag: "GALA 2025",
      description: "حفل تكريم كبار الوكالات وصناع المحتوى بحضور قيادات المنصة وكبار الداعمين من مختلف أنحاء العالم.",
      videoId: "RvIuebO91HY",
      highlights: ["تكريم أفضل الوكالات العالمية", "عروض فنية مباشرة وشغف صناع المحتوى", "جوائز دروع التميز الذهبية"]
    },
    {
      year: "2023",
      location: "الرياض - المملكة العربية السعودية",
      tag: "GALA 2023",
      description: "الحدث الأضخم في المنطقة العربية لتكريم وكالات الشرق الأوسط.",
      videoId: "3QxhhNwN09g",
      highlights: ["حضور كبار الوكلاء والمذيعين", "توزيع جوائز التميز", "تغطية إعلامية وشبكية واسعة"]
    }
  ]
};

export const englishGuide = {
  title: "Scope Agency Operational Guidebook",
  subtitle: "Complete operational rules, target system, and guidelines for sub-agencies and hosts.",
  overview: "This agency manual is designed to ensure strict policy compliance, maximum target achievement, and seamless cooperation with Scope management.",
  keyPoints: [
    {
      title: "Target & Salary Structure",
      desc: "All valid stream hours require a minimum of 60 consecutive minutes per session. Streamer payouts and agency bonuses are calculated according to the official salary policy."
    },
    {
      title: "Live Rules & Regulations",
      desc: "Strictly prohibited: driving while broadcasting, broadcasting in dark or unsafe environments, vulgarity, re-broadcasting pre-recorded content, or illegal host poaching."
    },
    {
      title: "Agency Badges",
      desc: "Gold Badge is assigned strictly to the main verified agency account. Silver Badge is assigned to the authorized co-manager or assistant account."
    },
    {
      title: "Monthly Payouts",
      desc: "Official payouts are calculated on the 1st of every month and disbursed within the official settlement window via direct bank transfer or Payoneer."
    }
  ]
};

export const defaultCustomBlocks = [
  {
    id: "block-1",
    title: "مركز الدعم السريع للوكلاء",
    subtitle: "تواصل مباشر مع مدير الحسابات المعتمد للحصول على الدعم الفني والتوثيق",
    category: "دعم فني",
    icon: "Headphones",
    color: "#f59e0b",
    image: "/images/image_1.png",
    buttonText: "تواصل عبر الواتساب",
    buttonLink: "https://wa.me/",
    enabled: true
  },
  {
    id: "block-2",
    title: "إرشادات الأمان وتوثيق الحسابات",
    subtitle: "تجنب الحظر واحمي بيانات الوكالة عبر التوثيق البيومتري المعتمد",
    category: "تنبيه أمني",
    icon: "ShieldAlert",
    color: "#06b6d4",
    image: "/images/image_7.png",
    buttonText: "قراءة إرشادات الأمان",
    buttonLink: "#guide",
    enabled: true
  },
  {
    id: "block-3",
    title: "مكافآت التميز الشهرية وكبار الداعمين",
    subtitle: "بونص إضافي للوكالات التي تتجاوز التارجت المستهدف",
    category: "جوائز وبونص",
    icon: "Zap",
    color: "#8b5cf6",
    image: "/images/image_9.png",
    buttonText: "استعراض الأقسام",
    buttonLink: "#points",
    enabled: true
  }
];

export const defaultThemeConfig = {
  fontFamily: "'Cairo', sans-serif",
  baseFontSize: 14,
  headingFontSize: 20,
  primaryColor: "#f59e0b",
  glowColor: "rgba(245, 158, 11, 0.3)"
};

export const defaultAccountsData = [
  {
    id: "acc-1",
    name: "سارة المنصور (Sara Star)",
    bigoId: "sara_vip_99",
    email: "sara@scoopagency.online",
    phone: "+966 50 111 2222",
    role: "host",
    badge: "كبار النجوم",
    tier: "T2",
    targetBeans: "1,500,000",
    streamHours: "24",
    status: "active",
    joinDate: "أغسطس 2026",
    notes: "مذيعة متميزة في بث الألعاب والتفاعل اليومي"
  },
  {
    id: "acc-2",
    name: "عمر خالد (Omar Live)",
    bigoId: "omar_king_77",
    email: "omar@scoopagency.online",
    phone: "+966 50 333 4444",
    role: "vip_host",
    badge: "الماسة الملكية",
    tier: "T1",
    targetBeans: "6,200,000",
    streamHours: "28",
    status: "active",
    joinDate: "يونيو 2026",
    notes: "توب 1 في بطولات الـ PK على مستوى الوكالة"
  },
  {
    id: "acc-3",
    name: "المشرف أحمد علي",
    bigoId: "ahmed_mod_01",
    email: "ahmed@scoopagency.online",
    phone: "+966 50 555 6666",
    role: "supervisor",
    badge: "القلادة الفضية",
    tier: "T3",
    targetBeans: "500,000",
    streamHours: "20",
    status: "active",
    joinDate: "يناير 2026",
    notes: "مشرف رومات الدعم والتنسيق الفني"
  },
  {
    id: "acc-4",
    name: "ياسمين فهد (Yasmin TV)",
    bigoId: "yasmin_live_55",
    email: "yasmin@scoopagency.online",
    phone: "+971 50 777 8888",
    role: "host",
    badge: "الفئة الفضية",
    tier: "T4",
    targetBeans: "50,000",
    streamHours: "18",
    status: "pending",
    joinDate: "سبتمبر 2026",
    notes: "بانتظار مراجعة عقد الوكالة الرسمي"
  }
];

// Core Section 1: Agency Management Default Topics
export const defaultAgencyManagementItems = [
  {
    id: 'register-hosts',
    title: 'تسجيل مذيعين',
    badge: 'الأساسي والأهم',
    icon: 'UserPlus',
    color: '#06b6d4',
    shortDesc: 'خطوات وإجراءات تسجيل المذيعين الجدد وتوقيع العقود الرسمية بالوكالة',
    details: [
      'تجهيز بيانات المذيع: الاسم الكامل، رقم الهاتف، والـ Bigo ID المعتمد.',
      'التأكد من خلو سجل المذيع من أي ارتباط بوكالة أخرى في آخر 30 يوماً.',
      'توقيع العقد الرسمي وتفعيل صلاحيات البث المباشر عبر سيستم الوكالة.',
      'متابعة انطلاقة أول بث تجريبي للتأكد من إتمام شروط الجودة وساعات البث.'
    ]
  },
  {
    id: 'unban',
    title: 'فك حظر الحسابات',
    badge: 'دعم فني',
    icon: 'ShieldAlert',
    color: '#ef4444',
    shortDesc: 'آلية تقديم طلبات استئناف فك الحظر ومراجعة المخالفات لدى إدارة المنصة',
    details: [
      'حصر نوع المخالفة المسجلة (مخالفة بصرية، صوتية، أو اشتباه احتيال).',
      'إرفاق سكرين شوت يوضح رسالة الحظر ورقم المعرف (ID) للمذيع.',
      'رفع تذكرة دعم فني عاجلة عبر المشرف الإقليمي المخصص لوكالة سكوب.',
      'متابعة حالة الطلب والرد خلال 24 إلى 48 ساعة عمل كحد أقصى.'
    ]
  },
  {
    id: 'trend',
    title: 'طلب ترند للفعاليات',
    badge: 'تسويق وترويج',
    icon: 'Flame',
    color: '#f59e0b',
    shortDesc: 'شروط وضوابط ترشيح مذيعي الوكالة للظهور في قوائم الترند والفعاليات الكبرى',
    details: [
      'تحقيق المذيع لتفاعل ملحوظ وتجاوز 50,000 فاصوليا خلال الأسبوع.',
      'تقديم خطة محتوى متميزة للروم ومواعيد البث المجدولة مسبقاً.',
      'توفير معايير الكواليتي الكاملة: إضاءة 4K أو 1080p ومايك نقي دون تشويش.',
      'حصول الروم على دعم ترويجي رسمي في الصفحة الأولى للتطبيق أثناء البث.'
    ]
  },
  {
    id: 'supervisors',
    title: 'إدارة المشرفين والقلادات',
    badge: 'هيكل الوكالة',
    icon: 'Award',
    color: '#8b5cf6',
    shortDesc: 'صلاحيات المشرف المساعد والقلادة الفضية وتنظيم فريق العمل الداخلي',
    details: [
      'تعيين حتى 3 مشرفين مساعدين لإدارة رومات الوكالة ومتابعة المذيعين.',
      'منح القلادة الفضية للحساب الإداري المساعد مع صلاحيات التنسيق.',
      'إمكانية حظر المزعجين وتثبيت الرسائل الإرشادية داخل البث.',
      'عقد اجتماعات دورية أسبوعية مع فريق إدارة وكالة سكوب.'
    ]
  }
];

// Core Section 2: Points Usage Default Items
export const defaultPointsUsageItems = [
  {
    id: 'pk-battles',
    title: 'دعم المذيعين في الباتلات والتحديات (PK)',
    icon: 'Trophy',
    color: '#f59e0b',
    desc: 'استخدام نقاط الوكالة لدعم مذيعيك البارزين في مسابقات الـ PK الرسمية لرفع تصنيفهم وجذب كبار الداعمين.'
  },
  {
    id: 'bonus-exchange',
    title: 'استبدال النقاط بجوائز وبونص إضافي',
    icon: 'Gift',
    color: '#ec4899',
    desc: 'تحويل النقاط المتراكمة إلى مكافآت مادية وبونص إضافي يضاف إلى أرباح الوكالة الشهرية بناءً على سلم التحفيز.'
  },
  {
    id: 'gala-upgrade',
    title: 'ترقية رتبة الوكالة والمشاركة في حفل GALA',
    icon: 'Sparkles',
    color: '#8b5cf6',
    desc: 'تراكم النقاط يحدد ترتيب الوكالة إقليمياً وعالمياً، مما يؤهلها لحضور الحفل السنوي وتكريم كبار الوكلاء.'
  },
  {
    id: 'agency-rooms',
    title: 'تمويل فعاليات ورومات الوكالة الخاصة',
    icon: 'Coins',
    color: '#06b6d4',
    desc: 'تخصيص رصيد النقاط لتنظيم مسابقات حصرية داخل رومات الوكالة وتوزيع جوائز تحفيزية على المذيعين الجدد.'
  }
];

// Core Section 3: Bean Withdrawal Default Items
export const defaultBeanWithdrawalItems = [
  {
    id: 'agent-recharge',
    title: 'السحب عبر وكيل الشحن المعتمد',
    category: 'الخيار الأسرع',
    icon: 'RefreshCw',
    color: '#8b5cf6',
    features: [
      'تنفيذ فوري للتحويل خلال أقل من 15 دقيقة',
      'عمولة تحويل تفضيلية وحصرية لوكلاء سكوب',
      'استلام نقدي أو عبر المحافظ الإلكترونية المحلية (STC Pay, Vodafone Cash, CliQ)',
      'دعم على مدار 24 ساعة لضمان أمان العمليات'
    ]
  },
  {
    id: 'bank-wire',
    title: 'السحب البنكي المباشر (Wire Transfer)',
    category: 'الخيار الرسمي',
    icon: 'Building2',
    color: '#06b6d4',
    features: [
      'إيداع مباشر في حسابك البنكي الرسمي بالدولار أو العملة المحلية',
      'إشعار تحويل بنكي معتمد رسمي من Bigo Live',
      'مواعيد الصرف من 1 إلى 5 من كل شهر ميلادي',
      'الحد الأدنى للسحب البنكي 1,000 دولار'
    ]
  }
];

// Core Section 4: Salary Tiers Default Items
export const defaultSalaryTiers = [
  {
    id: 'tier-t1',
    tier: 'T1',
    name: 'المستوى الأول (T1)',
    targetDisplay: '6,000,000 +',
    minBeans: 6000000,
    maxBeans: 999999999,
    baseRatio: 125,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 130,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.25)',
    badge: 'الماسة الملكية',
    desc: 'أعلى شريحة ربحية في البيجو'
  },
  {
    id: 'tier-t2',
    tier: 'T2',
    name: 'المستوى الثاني (T2)',
    targetDisplay: '1,000,000 - 5,999,999',
    minBeans: 1000000,
    maxBeans: 5999999,
    baseRatio: 123,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 128,
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
    badge: 'كبار النجوم',
    desc: 'تارجت المليون فاصوليا فأكثر'
  },
  {
    id: 'tier-t3',
    tier: 'T3',
    name: 'المستوى الثالث (T3)',
    targetDisplay: '100,000 - 999,999',
    minBeans: 100000,
    maxBeans: 999999,
    baseRatio: 120,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 125,
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.25)',
    badge: 'الفئة الذهبية',
    desc: 'تارجت 100 ألف حتى مليون إلا واحد'
  },
  {
    id: 'tier-t4',
    tier: 'T4',
    name: 'المستوى الرابع (T4)',
    targetDisplay: '10,000 - 99,999',
    minBeans: 10000,
    maxBeans: 99999,
    baseRatio: 118,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 123,
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)',
    badge: 'الفئة الفضية',
    desc: 'تارجت 10 آلاف حتى 100 ألف'
  },
  {
    id: 'tier-t5',
    tier: 'T5',
    name: 'المستوى الخامس (T5)',
    targetDisplay: '2,000 - 9,999',
    minBeans: 2000,
    maxBeans: 9999,
    baseRatio: 113,
    requiredHours: 20,
    bonusRatio: 5,
    totalRatio: 118,
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    badge: 'فئة الانطلاقة',
    desc: 'الحد الأدنى لاستحقاق المرتبات (2,000 فاصوليا)'
  }
];

// Core Section 5: Live Quality Default Pillars
export const defaultLiveQualityItems = [
  {
    id: 'lighting',
    title: 'الإضاءة الاحترافية وتوزيع النور',
    icon: 'Sun',
    color: '#f59e0b',
    desc: 'استخدام إضاءة Ring Light أو Softbox أمامية مع توزيع جانبي متوازن لإبراز ملامح المذيع بوضوح ومنع الظلال الداكنة.'
  },
  {
    id: 'audio-mic',
    title: 'جودة ونقاء الصوت (Audio & Mic)',
    icon: 'Mic',
    color: '#06b6d4',
    desc: 'الاعتماد على ميكروفون احترافي خارجي عازل للضوضاء، والتأكد من هدوء الغرفة وتفادي ارتداد الصدى أثناء الحوار.'
  },
  {
    id: 'camera-tripod',
    title: 'ثبات الكاميرا وزاوية التصوير',
    icon: 'Video',
    color: '#8b5cf6',
    desc: 'تثبيت الهاتف أو الكاميرا على حامل ثابت (Tripod) بمستوى العين وتجنب الاهتزاز وتنظيف عدسة الكاميرا قبل كل بث مباشر.'
  },
  {
    id: 'internet-wifi',
    title: 'استقرار وسرعة الاتصال بالإنترنت',
    icon: 'Wifi',
    color: '#10b981',
    desc: 'سرعة رفع (Upload) لا تقل عن 10 Mbps لضمان بث متواصل بدقة 1080p عالية دون تقطيع أو انخفاض في معدل الإطارات (FPS).'
  },
  {
    id: 'studio-decor',
    title: 'ديكور وخلفية الاستوديو',
    icon: 'Tv',
    color: '#ec4899',
    desc: 'ترتيب الخلفية بأناقة وبساطة، وإضافة لمسات إضاءة جمالية ناعمة لتعزيز الهوية البصرية وجذب المشاهدين للبقاء بالروم.'
  },
  {
    id: 'audience-interaction',
    title: 'فن التفاعل وجذب الداعمين',
    icon: 'HeartHandshake',
    color: '#3b82f6',
    desc: 'الترحيب بالداخلين بالاسم، التواصل البصري المستمر، التفاعل الذكي مع التعليقات والهدايا، وبناء مجتمع متابعين وفيّ.'
  }
];
