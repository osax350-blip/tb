import { createContext, useState, useEffect } from 'react';

// Context is intentionally exported alongside the Provider component.
// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext(null);

const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    // Header
    universityName: 'جامعة تبوك',
    universitySubtitle: 'نظام إلكتروني · بوابة التعليم',
    universityEn: 'University of Tabuk',
    langBtn: 'English',
    // Login
    loginTitle: 'الدخول إلى البوابة',
    loginSubtitle: 'أدخل رقمك الجامعي وكلمة المرور',
    idLabel: 'الرقم الجامعي / البريد الإلكتروني',
    idPlaceholder: 'مثال: 421012345',
    passwordLabel: 'كلمة المرور',
    loginBtn: 'دخول',
    forgotPassword: 'نسيت كلمة المرور؟',
    securityNote: '⚠️ لا تشارك بيانات الدخول مع أي شخص. البوابة مشفرة بالكامل لحماية خصوصيتك الأكاديمية.',
    loginError: 'الرجاء إدخال الرقم الجامعي وكلمة المرور.',
    // Announcements
    announcementsTitle: 'أخبار وإعلانات عمادة القبول والتسجيل',
    lastUpdate: 'آخر تحديث: أبريل 2026',
    tickerText: 'فترة الحذف والإضافة تنتهي بعد 3 أيام — يرجى مراجعة جداولكم الدراسية',
    // Services
    servicesTitle: 'خدمات إلكترونية سريعة',
    servicesSubtitle: 'دون الحاجة لتسجيل الدخول',
    serviceLink: 'استعلام ›',
    verifyLink: 'التحقق الآن ›',
    calendarLink: 'عرض التقويم ›',
    // Footer
    techSupport: 'الدعم الفني',
    phone: 'مركز الاتصال الموحد: 920012345',
    email: 'البريد الإلكتروني: support@ut.edu.sa',
    hours: 'ساعات العمل: 8 صباحاً - 8 مساءً (من الأحد للخميس)',
    importantLinks: 'روابط مهمة',
    followUs: 'تابع جامعة تبوك',
    digitalNote: 'نظام التعليم العالي - مواكبة للتحول الرقمي',
    copyright: '© 2026 جامعة تبوك - جميع الحقوق محفوظة',
    portalLabel: 'بوابة النظام الأكاديمي Academic Portal',
    link1: 'عمادة القبول والتسجيل',
    link2: 'مكتبة الجامعة الرقمية',
    link3: 'البوابة الأكاديمية (Blackboard)',
    link4: 'الأسئلة الشائعة',
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    // Header
    universityName: 'University of Tabuk',
    universitySubtitle: 'Electronic System · Educational Portal',
    universityEn: 'جامعة تبوك',
    langBtn: 'العربية',
    // Login
    loginTitle: 'Portal Login',
    loginSubtitle: 'Enter your student ID and password',
    idLabel: 'Student ID / Email',
    idPlaceholder: 'Example: 421012345',
    passwordLabel: 'Password',
    loginBtn: 'Login',
    forgotPassword: 'Forgot Password?',
    securityNote: '⚠️ Never share your login credentials. The portal is fully encrypted to protect your academic privacy.',
    loginError: 'Please enter your student ID and password.',
    // Announcements
    announcementsTitle: 'Admissions & Registration News',
    lastUpdate: 'Last update: April 2026',
    tickerText: 'Add/Drop period ends in 3 days — Please review your schedules',
    // Services
    servicesTitle: 'Quick Electronic Services',
    servicesSubtitle: 'No login required',
    serviceLink: 'Inquire ›',
    verifyLink: 'Verify Now ›',
    calendarLink: 'View Calendar ›',
    // Footer
    techSupport: 'Technical Support',
    phone: 'Unified Contact Center: 920012345',
    email: 'Email: support@ut.edu.sa',
    hours: 'Working Hours: 8 AM - 8 PM (Sun–Thu)',
    importantLinks: 'Important Links',
    followUs: 'Follow University of Tabuk',
    digitalNote: 'Higher Education System - Digital Transformation',
    copyright: '© 2026 University of Tabuk - All Rights Reserved',
    portalLabel: 'Academic Portal بوابة النظام الأكاديمي',
    link1: 'Admissions & Registration',
    link2: 'Digital University Library',
    link3: 'Academic Portal (Blackboard)',
    link4: 'Frequently Asked Questions',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar');

  const toggleLanguage = () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir, t.lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
