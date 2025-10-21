// ==================== Helper Functions ====================

/**
 * الحصول على اسم الخدمة من URL
 */
function getServiceSlugFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("service");
}

/**
 * البحث عن الخدمة في الـ Array
 */
function findService(slug) {
  return services.find((service) => service.slug === slug);
}

// ==================== Display Functions ====================

/**
 * عرض صفحة الخدمة
 */
function displayService(service) {
  const container = document.getElementById("service-container");

  // تحديث الـ SEO
  document.getElementById(
    "page-title"
  ).textContent = `${service.name} - رأس الخيمة للتنظيفات`;
  document.getElementById("page-description").content = service.description;

  // إنشاء HTML للخدمة
  const html = `
        <section class="one-service-hero">
          <div class="container">
            <div class="one-service-hero-content">
              <div class="one-service-hero-badge" data-aos="fade-down">خدمة مميزة ⭐</div>
              <h1 class="one-service-hero-title text-white" data-aos="fade-down">${
                service.name
              }</h1>
              <p class="one-service-hero-subtitle" data-aos="fade-up">
                ${service.subtitle}
              </p>
            </div>
          </div>
        </section>


        <section class="one-service-main">
          <div class="container">
            <div class="row">
              <!-- Content Column -->
              <div class="col-lg-8">
                <div class="one-service-card"  data-aos="zoom-in">
                  <h2 class="one-service-card-title">نبذة عن الخدمة</h2>
                  <p class="one-service-description">
                    ${service.description}
                  </p>

                  <img
                    src="${service.image}"
                   alt="${service.name}"
                    class="one-service-image"
                  />

                  <h3 class="one-service-section-title">ما نقدمه لك</h3>
                  <ul class="one-service-features">

                   ${service.features
                     .map(
                       (feature) => `
                    <li class="one-service-feature-item">
                      <span class="one-service-feature-text"
                        >${feature}</span
                      >
                    </li>
                    `
                     )
                     .join("")}

              
                   
                  </ul>

                  <h3 class="one-service-section-title">مميزات خدمتنا</h3>
                  <div class="one-service-benefits">
                    ${service.benefits
                      .map(
                        (benefit) => `
                      <div class="one-service-benefit-card">
                      <h4 class="one-service-benefit-title">${benefit.title}</h4>
                      <p class="one-service-benefit-text">
                            ${benefit.text}
                      </p>
                    </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>

                <!-- CTA Section -->
                <div class="one-service-cta-section" data-aos="fade-up">
                  <h3 class="one-service-cta-title text-white">هل أنت مستعد للبدء؟</h3>
                  <p class="one-service-cta-text">
                    اتصل بنا الآن واحصل على استشارة مجانية وعرض سعر خاص. فريقنا
                    جاهز لخدمتك على مدار الساعة
                  </p>
                  <div class="one-service-cta-buttons-row">
                    <a
                      href="tel:+97455659442"
                      class="one-service-btn one-service-btn-primary"
                    >
                      📞 اتصل: 55659442
                    </a>
                    <a
                      href="https://wa.me/97455659442?text=مرحباً، أريد حجز خدمة ${
                        service.name
                      }"
                      target="_blank"
                      class="one-service-btn one-service-btn-whatsapp"
                    >
                      💬 واتساب
                    </a>
                  </div>
                </div>
              </div>

              <!-- Sidebar Column -->
              <div class="col-lg-4">
                <div class="one-service-sidebar" data-aos="fade-up">
                  <!-- Price Card -->
                  <div class="one-service-price-card">
                    <p class="one-service-price-title">احجز الآن</p>
                    <div class="one-service-cta-buttons">
                      <a
                        href="tel:+97455659442"
                        class="one-service-btn one-service-btn-primary"
                      >
                        📞 اتصل الآن
                      </a>
                      <a
                        href="https://wa.me/97455659442?text=مرحباً، أريد حجز خدمة ${
                          service.name
                        }"
                        target="_blank"
                        class="one-service-btn one-service-btn-whatsapp"
                      >
                        💬 واتساب
                      </a>
                    </div>
                  </div>

                  <!-- Why Choose Us -->
                  <div class="one-service-why-card">
                    <h3 class="one-service-why-title">🌟 لماذا تختارنا؟</h3>
                    <ul class="one-service-why-list">
                          ${service.whyUs
                            .map(
                              (whyUs) => `
                    
                     <li class="one-service-why-item">${whyUs}</li>
                    `
                            )
                            .join("")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    `;

  container.innerHTML = html;
}

/**
 * عرض صفحة 404
 */
function displayNotFound() {
  const container = document.getElementById("service-container");
  document.getElementById("page-title").textContent =
    "الخدمة غير موجودة - رأس الخيمة";

  const html = `
        <div class="not-found">
            <h1>404</h1>
            <h2>عذراً، الخدمة غير موجودة</h2>
            <p>
                الخدمة التي تبحث عنها غير متوفرة أو تم تغيير الرابط
            </p>
            <a href="services.html" class="cta-btn cta-btn-primary" style="display: inline-flex;">
                العودة لصفحة الخدمات
            </a>
            
            <div class="container" style="margin-top: 60px;">
                <h3 style="color: #0980da; margin-bottom: 30px; font-size: 28px; font-weight: 700;">خدماتنا المتوفرة:</h3>
                <div class="row">
                    ${services
                      .map(
                        (service) => `
                        <a href="?service=${service.slug}" class="service-card-link col-12 col-md-4">
                            <div class="content-card" style="text-align: center; cursor: pointer;">
                                <h4 style="color: #0980da; margin-bottom: 10px; font-size: 22px;">${service.name}</h4>
                                <p style="color: #666; font-size: 14px;">${service.subtitle}</p>
                            </div>
                        </a>
                    `
                      )
                      .join("")}
                </div>
            </div>
             <div class="container one-service-cta-section" data-aos="fade-up">
                    <h3 class="text-white">هل تحتاج مساعدة في اختيار الخدمة المناسبة؟</h3>
                    <p>اتصل بنا الآن وسيساعدك فريقنا في اختيار الخدمة المثالية لك</p>
                    <div class="cta-buttons">
                        <a href="tel:+97455659442"     class="one-service-btn one-service-btn-primary">
                            📞 اتصل: 55659442
                        </a>
                        <a href="https://wa.me/97455659442?text=مرحباً، أريد الاستفسار عن خدماتكم" 
                           target="_blank" 
                                class="one-service-btn one-service-btn-whatsapp">
                            💬 واتساب
                        </a>
                    </div>
                </div>
        </div>
    `;

  container.innerHTML = html;
}

// ==================== Main Initialization ====================

/**
 * تشغيل عند تحميل الصفحة
 */
window.addEventListener("DOMContentLoaded", function () {
  const serviceSlug = getServiceSlugFromURL();
  if (serviceSlug) {
    const service = findService(serviceSlug);
    if (service) {
      applyServicePageSEO(service);
      displayService(service);
    } else {
      displayNotFound();
    }
  } else {
    window.location.href = "services.html";
  }
});

// ==================== Additional Functions ====================

/**
 * Smooth scroll لأي روابط داخلية
 */
document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href").startsWith("#")
  ) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

/**
 * إضافة تأثير على scroll
 */
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // يمكنك إضافة أي تأثيرات عند الـ scroll هنا
  if (scrollTop > 100) {
    // مثال: إضافة class للـ navbar
    // document.querySelector('.navbar')?.classList.add('scrolled');
  } else {
    // document.querySelector('.navbar')?.classList.remove('scrolled');
  }
});

// Function to apply SEO for service page
function applyServicePageSEO(service) {
  // Keywords mapping for each service
  const serviceKeywords = {
    "تنظيف-المنازل":
      "تنظيف منازل قطر, شركة تنظيف منازل الدوحة, تنظيف بيوت, أفضل شركة تنظيف منازل, تنظيف شامل للمنازل, شركة تنظيف موثوقة",
    "تنظيف-الفلل-الجديدة":
      "تنظيف فلل قطر, تنظيف فلل جديدة, تنظيف قصور قطر, شركة تنظيف فلل الدوحة, تنظيف فلل شامل, تنظيف فلل بعد البناء",
    "مكافحة-الحشرات":
      "مكافحة حشرات قطر, رش مبيدات قطر, مكافحة قوارض, شركة مكافحة حشرات الدوحة, مكافحة الصراصير, رش حشرات",
    "جلي-وتلميع-الرخام":
      "جلي رخام قطر, تلميع رخام, جلي بلاط, تلميع أرضيات رخامية, شركة جلي رخام الدوحة, تلميع رخام احترافي",
    "مكافحة-النمل-الأبيض":
      "مكافحة النمل الأبيض قطر, مكافحة العته, رش النمل الأبيض, شركة مكافحة النمل الأبيض الدوحة, القضاء على النمل الأبيض",
    "عاملات-تنظيف-بالساعة":
      "عاملات نظافة بالساعة قطر, عاملات تنظيف بالساعة الدوحة, أرقام عاملات نظافة, شركة عاملات تنظيف, عاملات نظافة الوكرة",
    "تنظيف-المطابخ":
      "تنظيف مطابخ قطر, تنظيف أفران, إزالة دهون المطبخ, شركة تنظيف مطابخ الدوحة, تنظيف شفاطات المطبخ",
    "تنظيف-الحمامات":
      "تنظيف حمامات قطر, تعقيم حمامات, إزالة ترسبات الحمام, شركة تنظيف حمامات الدوحة, تنظيف حمامات احترافي",
    "تنظيف-الزجاج-والنوافذ":
      "تنظيف نوافذ قطر, تنظيف زجاج, تلميع نوافذ, شركة تنظيف نوافذ الدوحة, تنظيف واجهات زجاجية",
  };

  const keywords =
    serviceKeywords[service.slug] || `${service.name}, خدمات تنظيف قطر`;
  const title = `${service.name} - راس الخيمة للتنظيفات | ${service.subtitle}`;
  const description = `${service.description.substring(
    0,
    155
  )}... احجز الآن واتصل على ${service.phone}`;
  const canonical = `https://rasalkhaima-cleaning.com/service/${service.slug}`;

  // Update Title
  document.getElementById("page-title").textContent = title;
  document.title = title;

  // Update Meta Tags
  document
    .getElementById("page-description")
    .setAttribute("content", description);
  document.getElementById("page-keywords").setAttribute("content", keywords);

  // Update Open Graph
  document.getElementById("og-title").setAttribute("content", title);
  document
    .getElementById("og-description")
    .setAttribute("content", description);
  document.getElementById("og-url").setAttribute("content", canonical);
  document.getElementById("og-image").setAttribute("content", service.image);

  // Update Twitter Card
  document.getElementById("twitter-title").setAttribute("content", title);
  document
    .getElementById("twitter-description")
    .setAttribute("content", description);
  document
    .getElementById("twitter-image")
    .setAttribute("content", service.image);

  // Update Canonical
  document.getElementById("canonical-url").setAttribute("href", canonical);

  // Add Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "راس الخيمة للتنظيفات",
      telephone: `+974-${service.phone}`,
      url: "https://rasalkhaima-cleaning.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "العزيزية الشارع التجاري",
        addressLocality: "الدوحة",
        addressRegion: "الدوحة",
        postalCode: "00000",
        addressCountry: "QA",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Qatar",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "QAR",
    },
    image: service.image,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
      itemReviewed: {
        "@type": "Service",
        name: service.name,
      }
    },
  };

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
        item: "https://rasalkhaima-cleaning.com/services.html",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: canonical,
      },
    ],
  };

  // Add FAQ Schema (optional but good for SEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `كم تكلفة ${service.name} في قطر؟`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `تختلف تكلفة ${service.name} حسب حجم المكان ونوع الخدمة. اتصل بنا على ${service.phone} للحصول على عرض سعر مجاني.`,
        },
      },
      {
        "@type": "Question",
        name: `هل تقدمون خدمة ${service.name} في الدوحة؟`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `نعم، نقدم خدمة ${service.name} في الدوحة وجميع مناطق قطر بما في ذلك الوكرة والريان والخور.`,
        },
      },
      {
        "@type": "Question",
        name: "هل لديكم عاملات نظافة بالساعة في قطر؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نوفر خدمة عاملات نظافة بالساعة في جميع مناطق قطر بما في ذلك الدوحة والوكرة بأفضل الأسعار.",
        },
      },
      ,
      {
        "@type": "Question",
        name: "كيف يمكنني حجز خدمة تنظيف؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يمكنك حجز خدمة التنظيف عبر الاتصال على رقم 55659442 أو عبر واتساب أو من خلال موقعنا الإلكتروني. نحن متاحون 24 ساعة.",
        },
      },
    ],
  };

  // Remove existing schemas
  // const existingSchemas = document.querySelectorAll(
  //   'script[type="application/ld+json"]'
  // );
  // existingSchemas.forEach((schema) => schema.remove());

  // Add all schemas
  const schemas = [serviceSchema, breadcrumbSchema, faqSchema];
  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}