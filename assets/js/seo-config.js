// ==================== SEO Configuration for All Pages ====================

// 1. SEO للصفحة الرئيسية (Home Page)
const homeSEO = {
  title: "رأس الخيمة للتنظيفات | أفضل شركة تنظيف منازل في قطر",
  description:
    "شركة راس الخيمة للتنظيفات - أفضل شركة تنظيف منازل في قطر. نقدم خدمات تنظيف الفلل، الشقق، مكافحة الحشرات، جلي وتلميع الرخام في الدوحة والوكرة. اتصل الآن 55659442",
  keywords:
    "شركة تنظيف منازل قطر, تنظيف فلل قطر, مكافحة حشرات قطر, تنظيف سجاد قطر, عاملات نظافة بالساعة قطر, شركة تنظيف الدوحة, تنظيف كنب قطر, جلي وتلميع الرخام قطر, مكافحة النمل الأبيض قطر",
  canonical: "https://rasalkhaima-cleaning.com",
  ogImage:
    "https://rasalkhaima-cleaning.com/assets/images/assets/images/logo.webp",
};

// 2. SEO لصفحة من نحن (About Page)
const aboutSEO = {
  title: "من نحن - راس الخيمة للتنظيفات | خبرة 15 سنة في التنظيف",
  description:
    "تعرف على شركة راس الخيمة للتنظيفات - خبرة أكثر من 15 سنة في تقديم خدمات التنظيف في قطر. فريق محترف، معدات حديثة، وضمان الجودة 100%. نخدم الدوحة والوكرة وجميع مناطق قطر",
  keywords:
    "راس الخيمة للتنظيفات, شركة تنظيف موثوقة قطر, أفضل شركة تنظيف, فريق تنظيف محترف قطر, خدمات تنظيف الدوحة",
  canonical: "https://rasalkhaima-cleaning.com/about.html",
  ogImage:
    "https://rasalkhaima-cleaning.com/assets/images/assets/images/logo.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "من نحن - راس الخيمة للتنظيفات",
    description: "تعرف على شركة راس الخيمة للتنظيفات وخدماتنا المتميزة",
    url: "https://rasalkhaima-cleaning.com/about.html",
  },
};

// 3. SEO لصفحة الخدمات (Services Page)
const servicesSEO = {
  title: "خدماتنا - راس الخيمة للتنظيفات | جميع خدمات التنظيف في قطر",
  description:
    "اكتشف جميع خدمات التنظيف التي نقدمها: تنظيف منازل، تنظيف فلل، مكافحة حشرات، جلي رخام، تنظيف كنب وسجاد، عاملات بالساعة. خدمة 24 ساعة في جميع مناطق قطر",
  keywords:
    "خدمات تنظيف قطر, تنظيف منازل, تنظيف فلل, مكافحة حشرات, جلي رخام, تنظيف كنب, عاملات نظافة, مكافحة النمل الأبيض",
  canonical: "https://rasalkhaima-cleaning.com/services.html",
  ogImage:
    "https://rasalkhaima-cleaning.com/assets/images/assets/images/logo.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "خدمات التنظيف",
    provider: {
      "@type": "LocalBusiness",
      name: "راس الخيمة للتنظيفات",
      telephone: "+974-55659442",
    },
  },
};

// 4. SEO لصفحة اتصل بنا (Contact Page)
const contactSEO = {
  title: "اتصل بنا - راس الخيمة للتنظيفات | خدمة 24 ساعة",
  description:
    "تواصل مع راس الخيمة للتنظيفات - متاحون 24 ساعة لخدمتك. اتصل على 55659442 أو راسلنا عبر واتساب. نخدم الدوحة والوكرة وجميع مناطق قطر",
  keywords:
    "اتصل بنا, رقم شركة تنظيف قطر, واتساب تنظيف منازل, موقع شركة التنظيف, خدمة عملاء 24 ساعة",
  canonical: "https://rasalkhaima-cleaning.com/contact.html",
  ogImage:
    "https://rasalkhaima-cleaning.com/assets/images/assets/images/logo.webp",
  schema: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "اتصل بنا - راس الخيمة للتنظيفات",
    url: "https://rasalkhaima-cleaning.com/contact.html",
  },
};

// 5. SEO لصفحة أعمالنا (Portfolio Page)
const portfolioSEO = {
  title: "أعمالنا - راس الخيمة للتنظيفات | معرض أعمال التنظيف",
  description: "شاهد معرض أعمالنا في التنظيف - صور وفيديوهات حقيقية لمشاريعنا في قطر. تنظيف منازل، فلل، مكاتب، جلي رخام. جودة مضمونة ونتائج مبهرة",
  keywords: "أعمال شركة تنظيف قطر, معرض أعمال التنظيف, صور تنظيف منازل, قبل وبعد التنظيف, نتائج تنظيف احترافي, مشاريع تنظيف قطر, فيديو تنظيف, صور نتائج التنظيف",
  canonical: "https://rasalkhaima-cleaning.com/portfolio",
  ogImage: "https://rasalkhaima-cleaning.com/assets/images/og-portfolio.jpg",
  ogType: "website",
  schema: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "أعمالنا - معرض أعمال التنظيف",
    "description": "معرض صور وفيديوهات لأعمالنا في مجال التنظيف",
    "url": "https://rasalkhaima-cleaning.com/portfolio",
    "provider": {
      "@type": "LocalBusiness",
      "name": "راس الخيمة للتنظيفات",
      "telephone": "+974-55659442",
      "url": "https://rasalkhaima-cleaning.com"
    },
    "mainEntity": {
      "@type": "ImageGallery",
      "name": "معرض صور أعمال التنظيف",
      "description": "صور حقيقية من مشاريعنا المنجزة"
    }
  }
}
// 5. SEO لصفحات الخدمات الفردية (Dynamic Service Pages)
const generateServiceSEO = (service) => {
  const serviceKeywords = {
    "تنظيف-المنازل":
      "تنظيف منازل قطر, شركة تنظيف منازل الدوحة, تنظيف بيوت, أفضل شركة تنظيف منازل, تنظيف شامل للمنازل",
    "تنظيف-الفلل-الجديدة":
      "تنظيف فلل قطر, تنظيف فلل جديدة, تنظيف قصور قطر, شركة تنظيف فلل الدوحة, تنظيف فلل شامل",
    "مكافحة-الحشرات":
      "مكافحة حشرات قطر, رش مبيدات قطر, مكافحة قوارض, شركة مكافحة حشرات الدوحة, مكافحة الصراصير",
    "جلي-وتلميع-الرخام":
      "جلي رخام قطر, تلميع رخام, جلي بلاط, تلميع أرضيات رخامية, شركة جلي رخام الدوحة",
    "مكافحة-النمل-الأبيض":
      "مكافحة النمل الأبيض قطر, مكافحة العته, رش النمل الأبيض, شركة مكافحة النمل الأبيض الدوحة",
    "عاملات-تنظيف-بالساعة":
      "عاملات نظافة بالساعة قطر, عاملات تنظيف بالساعة الدوحة, أرقام عاملات نظافة, شركة عاملات تنظيف",
    "تنظيف-المطابخ":
      "تنظيف مطابخ قطر, تنظيف أفران, إزالة دهون المطبخ, شركة تنظيف مطابخ الدوحة",
    "تنظيف-الحمامات":
      "تنظيف حمامات قطر, تعقيم حمامات, إزالة ترسبات الحمام, شركة تنظيف حمامات الدوحة",
    "تنظيف-الزجاج-والنوافذ":
      "تنظيف نوافذ قطر, تنظيف زجاج, تلميع نوافذ, شركة تنظيف نوافذ الدوحة",
  };

  return {
    title: `${service.name} - راس الخيمة للتنظيفات | ${service.subtitle}`,
    description: `${service.description.substring(
      0,
      155
    )}... احجز الآن واتصل على 55659442`,
    keywords:
      serviceKeywords[service.slug] ||
      `${service.name}, خدمات تنظيف قطر, الدوحة`,
    canonical: `https://rasalkhaima-cleaning.com/service.html?service=${service.slug}`,
    ogImage: service.image,
    ogType: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: "راس الخيمة للتنظيفات",
        telephone: `+974-${service.phone}`,
        url: "https://rasalkhaima-cleaning.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Qatar",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "متغير",
        priceCurrency: "QAR",
      },
      image: service.image,
    },
  };
};

// ==================== Function to Apply SEO Tags ====================
function applySEO(seoData) {
  // Update Title
  document.title = seoData.title;

  // Update or Create Meta Tags
  updateMetaTag("name", "title", seoData.title);
  updateMetaTag("name", "description", seoData.description);
  updateMetaTag("name", "keywords", seoData.keywords);

  // Open Graph Tags
  updateMetaTag("property", "og:title", seoData.title);
  updateMetaTag("property", "og:description", seoData.description);
  updateMetaTag("property", "og:url", seoData.canonical);
  updateMetaTag("property", "og:image", seoData.ogImage);
  updateMetaTag("property", "og:type", seoData.ogType || "website");
  updateMetaTag("property", "og:site_name", "راس الخيمة للتنظيفات");
  updateMetaTag("property", "og:locale", "ar_QA");
  updateMetaTag("property", "og:locale:alternate", "ar_QA");

  // Twitter Card Tags
  updateMetaTag("name", "twitter:card", "summary_large_image");
  updateMetaTag("name", "twitter:title", seoData.title);
  updateMetaTag("name", "twitter:description", seoData.description);
  updateMetaTag("name", "twitter:image", seoData.ogImage);
  updateMetaTag("name", "robots", "index, follow");
  updateMetaTag("name", "language", "ar");
  updateMetaTag("name", "geo.region", "QA");
  updateMetaTag("name", "geo.placename", "Doha, Qatar");

  // Canonical URL
  updateLinkTag("canonical", seoData.canonical);

  // Add Schema.org JSON-LD
  if (seoData.schema) {
    addSchemaMarkup(seoData.schema);
  }
  if (!seoData.ogImage) {
    seoData.ogImage =
      "https://rasalkhaima-cleaning.com/assets/images/logo.webp";
  }
}

// Helper function to update meta tags
function updateMetaTag(attribute, key, value) {
  if (!value) return;

  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("content", value);
    document.head.appendChild(element);
  }
}

// Helper function to update link tags
function updateLinkTag(rel, href) {
  if (!href) return;

  let element = document.querySelector(`link[rel="${rel}"]`);

  if (element) {
    element.setAttribute("href", href);
  } else {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    element.setAttribute("href", href);
    document.head.appendChild(element);
  }
}

// Helper function to add Schema markup
function addSchemaMarkup(schema) {
  //   // Remove existing schema
  //   const existingSchema = document.querySelector(
  //     'script[type="application/ld+json"]'
  //   );
  //   if (existingSchema) {
  //     existingSchema.remove();
  //   }

  // Add new schema
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ==================== Auto-detect Page and Apply SEO ====================
function autoApplySEO() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  
  if (path === '/' || path === '/index.html') {
    // Home Page
    applySEO(homeSEO);
  } else if (path.includes('/about') || path.includes('about.html')) {
    // About Page
    applySEO(aboutSEO);
  } else if (path.includes('/services') || path.includes('services.html')) {
    // Services Page
    applySEO(servicesSEO);
  } else if (path.includes('/contact') || path.includes('contact.html')) {
    // Contact Page
    applySEO(contactSEO);
  } 
  else if (path.includes('/portfolio') || path.includes('portfolio.html')) {
    // Contact Page
    applySEO(portfolioSEO);
  }
  
  else if (params.has('service') || path.includes('/service/')) {
    // Individual Service Page - needs service data
    // This will be called from the service page script
    return 'service-page';
  }
}

// ==================== Export for use in other files ====================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    homeSEO,
    aboutSEO,
    servicesSEO,
    contactSEO,
    portfolioSEO,
    generateServiceSEO,
    applySEO,
    autoApplySEO,
  };
}

// Auto-apply SEO on page load
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", autoApplySEO);
}

// ==================== SEO للخدمات مع البيانات ====================
// استخدم هذا في صفحة الخدمة الفردية
function applyServiceSEO(serviceSlug) {
  // Import service data (يجب أن يكون متاح)
  const services = window.servicesData || [];
  const service = services.find((s) => s.slug === serviceSlug);

  if (service) {
    const seoData = generateServiceSEO(service);
    applySEO(seoData);

    // Add Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://rasalkhaima-cleaning.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "الخدمات",
          item: "https://rasalkhaima-cleaning.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: `https://rasalkhaima-cleaning.com/service/${service.slug}`,
        },
      ],
    };

    addSchemaMarkup(breadcrumbSchema);
  }
}

// Make available globally
if (typeof window !== "undefined") {
  window.applyServiceSEO = applyServiceSEO;
  window.generateServiceSEO = generateServiceSEO;
  window.applySEO = applySEO;
}
