/* ===== CLOUDMEDIQUE OS - CORE ENGINE ===== */

// 1. YOUR UNIQUE HOSPITAL SYSTEM KEYS
const SUPABASE_URL = 'https://pftcugnybhjcjdsskxua.supabase.co'; 
const SUPABASE_KEY = 'PASTE_YOUR_LONG_ANON_KEY_HERE'; 

// 2. Initialize the Bridge
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ===== TRANSLATION & UI CONFIG ===== */
const translations = {
  en: {
    languageToggle: '🌐 Arabic',
    darkToggle: '🌓 Dark Mode',
    header: { about: 'About', platform: 'Platform', demo: 'Demo', investor: 'Investor', roadmap: 'Roadmap', vision: 'Vision', contact: 'Contact' },
    hero: { h1: 'Unified AI for Secure, Intelligent Healthcare', p: 'Arabic-first, regulator-ready AI layer for hospitals in UAE & KSA.', cta: 'Explore the Platform' },
    about: { h2: 'Why CloudMedique™?', p: 'We’re building the first secure, cloud-native, AI-powered healthcare platform tailored for the Middle East, integrating predictive population health analytics, smart EHR data interoperability, and compliance automation under one unified AI framework.' },
    platform: { h2: 'The UAIH™ Platform', features: ['AI-PHM: Predictive Population Health Management', 'Compliance Layer: HIPAA, GDPR, MOH automation', 'Smart Interop: Real-time EHR/LIS/FHIR data exchange', 'Cloud-Native: Built for UAE & Saudi digital ecosystems', 'AI Assistants: Integrated diagnostic & triage copilots', 'Secure AI: Federated Learning + Blockchain Audit Trails'] },
    demo: { h2: 'Live Preview – Day-30 Post-Acquisition', p: 'Arabic voice-over | 2-click compliance export | Predictive risk scores' },
    investor: { h2: 'Raising USD 750k Pre-Seed', summary: 'What is the money for?', ans: 'Hospital acquisition escrow, bridge MVP, regulatory filings, 18-month runway.', summary2: 'Valuation & instrument?', ans2: 'SAFE, cap USD 5m, 20 % discount, MFN clause, no-board-seat until Series A.', summary3: 'Timeline?', ans3: 'Close by 31 Aug 2025 → pilot revenue by Dec 2025 → Series A Q2-2026.' },
    roadmap: { h2: 'Roadmap to $250B Valuation', boxes: [{ year: '2025', text: 'MVP launch, secure $17M in halal funding, begin UAE pilot deployments.' }, { year: '2026', text: 'HQ in Dubai, scale to Saudi Arabia, reach $100M ARR, begin African pilot entry.' }, { year: '2028', text: 'Scale across GCC, launch patient-side app, explore Asia & Europe expansion.' }, { year: '2035', text: 'Target $250B valuation, $50B+ ARR, exit-ready by 32–35 with global footprint.' }] },
    vision: { h2: 'Our Vision', p: 'To become the world’s most intelligent and secure healthcare operating system for governments, enterprises, and patients — born in the Middle East and scaled globally.' },
    contact: { h2: 'Partner With Us', placeholders: { name: 'Your Name', email: 'Your Email', message: 'Message or Request a Pilot...', submit: 'Submit' } },
    footer: { copyright: '© 2025 CloudMedique Technologies Ltd. (ADGM)', linkedIn: 'LinkedIn', instagram: 'Instagram', youtube: 'YouTube' }
  },
  ar: {
    languageToggle: '🌐 English',
    darkToggle: '☀️ Light Mode',
    header: { about: 'معلومات عنا', platform: 'المنصة', demo: 'عرض', investor: 'مستثمر', roadmap: 'خارطة الطريق', vision: 'رؤيتنا', contact: 'اتصل بنا' },
    hero: { h1: 'الذكاء الاصطناعي الموحد للرعاية الصحية الآمنة والذكية', p: 'الطبقة الأولى بالعربية، جاهزة للتنظيم، للمستشفيات في الإمارات والسعودية.', cta: 'استكشف المنصة' },
    about: { h2: 'لماذا CloudMedique™؟', p: 'نحن نبني أول منصة رعاية صحية آمنة، سحابية، مدعومة بالذكاء الاصطناعي مصممة للشرق الأوسط، تدمج تحليلات صحة السكان التنبؤية، وتكامل بيانات EHR الذكية، وأتمتة الامتثال تحت إطار عمل ذكاء اصطناعي موحد.' },
    platform: { h2: 'منصة UAIH™', features: ['إدارة صحة السكان التنبؤية (AI-PHM)', 'طبقة الامتثال: HIPAA، GDPR، أتمتة وزارة الصحة', 'التشغيل البيني الذكي: تبادل بيانات EHR/LIS/FHIR في الوقت الحقيقي', 'سحابية الأصل: مبنية لنظم الإمارات والسعودية الرقمية', 'مساعدي الذكاء الاصطناعي: مساعدي التشخيص والتصنيف المتكاملين', 'الذكاء الاصطناعي الآمن: التعلم الموحد + سجلات البلوكشين'] },
    demo: { h2: 'معاينة مباشرة – بعد 30 يومًا من الاستحواذ', p: 'تعليق صوتي عربي | تصدير الامتثال بنقرتين | درجات المخاطر التنبؤية' },
    investor: { h2: 'جمع 750 ألف دولار ما قبل البذور', summary: 'ما الذي ستُنفق عليه الأموال؟', ans: 'ضمان الاستحواذ على المستشفى، جسر MVP، تقديمات تنظيمية، مدرج 18 شهرًا.', summary2: 'التقييم والأداة؟', ans2: 'SAFE، سقف 5 ملايين دولار، خصم 20 %، بند MFN، لا مقعد في مجلس الإدارة حتى السلسلة A.', summary3: 'الجدول الزمني؟', ans3: 'الإغلاق في 31 أغسطس 2025 → إيرادات التجربة في ديسمبر 2025 → السلسلة A الربع الثاني 2026.' },
    roadmap: { h2: 'خارطة الطريق للوصول إلى تقييم 250 مليار دولار', boxes: [{ year: '2025', text: 'إطلاق MVP، تأمين تمويل 17 مليون دولار حلال، بدء تجارب الإمارات.' }, { year: '2026', text: 'المقر في دبي، التوسع إلى السعودية، الوصول إلى 100 مليون دولار ARR، بدء تجارب أفريقيا.' }, { year: '2028', text: 'التوسع عبر دول الخليج، إطلاق تطبيق للمريض، استكشاف آسيا وأوروبا.' }, { year: '2035', text: 'الاستهداف لتقييم 250 مليار دولار، أكثر من 50 مليار دولار ARR، جاهزية الخروج بين 32–35 عاماً مع بصمة عالمية.' }] },
    vision: { h2: 'رؤيتنا', p: 'أن نصبح أكثر نظم تشغيل الرعاية الصحية ذكاءً وأماناً للحكومات والمؤسسات والمرضى — مولودة في الشرق الأوسط وموسعة عالمياً.' },
    contact: { h2: 'شاركنا الشراكة', placeholders: { name: 'اسمك', email: 'بريدك الإلكتروني', message: 'رسالة أو طلب تجربة...', submit: 'إرسال' } },
    footer: { copyright: '© 2025 CloudMedique Technologies Ltd. (ADGM)', linkedIn: 'لينكدإن', instagram: 'إنستغرام', youtube: 'يوتيوب' }
  }
};

/* ===== UI LOGIC ===== */
const languageToggle = document.getElementById('language-toggle');
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;

languageToggle.addEventListener('click', () => {
  const isRtl = body.classList.toggle('rtl');
  languageToggle.textContent = isRtl ? translations.ar.languageToggle : translations.en.languageToggle;
  updateTextContent(isRtl ? 'ar' : 'en');
});

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkToggle.textContent = body.classList.contains('dark-mode') ? translations.ar.darkToggle : translations.en.darkToggle;
});

function updateTextContent(lang) {
  const t = translations[lang];
  
  // Header
  Object.keys(t.header).forEach(key => {
    const el = document.querySelector(`nav a[href="#${key}"]`);
    if (el) el.textContent = t.header[key];
  });

  // Hero
  document.querySelector('.hero h1').textContent = t.hero.h1;
  document.querySelector('.hero p').textContent = t.hero.p;
  document.querySelector('.hero .cta-button').textContent = t.hero.cta;

  // About
  const about = document.getElementById('about');
  about.querySelector('h2').textContent = t.about.h2;
  about.querySelector('p').textContent = t.about.p;

  // Platform
  const platform = document.getElementById('platform');
  platform.querySelector('h2').textContent = t.platform.h2;
  platform.querySelectorAll('.features li').forEach((li, i) => {
    li.textContent = t.platform.features[i];
  });

  // Contact
  const contact = document.getElementById('contact');
  contact.querySelector('h2').textContent = t.contact.h2;
  contact.querySelector('input[name="name"]').placeholder = t.contact.placeholders.name;
  contact.querySelector('input[name="email"]').placeholder = t.contact.placeholders.email;
  contact.querySelector('button[type="submit"]').textContent = t.contact.placeholders.submit;
}

/* ===== SUPABASE FORM CAPTURE ===== */
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    try {
      const { error } = await supabaseClient
        .from('patient_vitals') 
        .insert([{
          patient_name: formData.get('name'),
          blood_pressure: formData.get('email'), // Using email as a test string for BP column
          heart_rate: 72 
        }]);

      if (error) throw error;
      form.innerHTML = '<h3 style="color:#10b981; text-align:center; padding:20px;">✅ AI Captured Lead! Check Supabase.</h3>';
    } catch (err) {
      console.error("Critical Error:", err);
      form.innerHTML = '<p style="color:#ef4444; text-align:center; padding:20px;">❌ Connection Error. Open Console for details.</p>';
    }
  });
});
