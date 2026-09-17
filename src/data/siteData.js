// Site Data - Scope Agency Management Platform

export const siteInfo = {
  title: "Scoop",
  subtitle: "المنصة المتكاملة لإدارة وتطوير وكالات البث المباشر",
  description: "منظومة Scoop المتقدمة لإدارة المذيعين، احتساب الرواتب، متابعة النقاط، وسحب الأرباح بأعلى معايير الاحترافية.",
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
  title: "دليل منظومة Scope لتشغيل الوكالات",
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
  baseFontSize: 16,
  headingFontSize: 24,
  primaryColor: "#f59e0b",
  glowColor: "rgba(245, 158, 11, 0.3)"
};

export const defaultAccountsData = [
  {
    id: "acc-1",
    name: "وكالة الفرسان المعتمدة",
    email: "manager@scope.agency",
    phone: "+966 50 111 2222",
    role: "manager",
    badge: "القلادة الذهبية",
    status: "active",
    joinDate: "أغسطس 2026"
  },
  {
    id: "acc-2",
    name: "المشرف أحمد علي",
    email: "ahmed@scope.agency",
    phone: "+966 50 333 4444",
    role: "supervisor",
    badge: "القلادة الفضية",
    status: "active",
    joinDate: "يونيو 2026"
  },
  {
    id: "acc-3",
    name: "حساب الآدمن الرئيسي (Admin System)",
    email: "admin@scope.agency",
    phone: "+966 50 999 8888",
    role: "admin",
    badge: "مسؤول نظام",
    status: "active",
    joinDate: "يناير 2026"
  }
];
