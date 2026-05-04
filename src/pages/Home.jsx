import { useState } from 'react';
import { Bell, LogIn, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { announcements, services } from '../data/portalData';
import AnnouncementCard from '../components/ui/AnnouncementCard';
import ServiceCard from '../components/ui/ServiceCard';
import ServiceModal from '../components/ui/ServiceModal';

export default function Home() {
  const { t } = useLanguage();

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    if (!studentId.trim() || !password) {
      setLoginError(t.loginError);
      return;
    }
    setLoginError('');
    alert(`مرحباً ${studentId}، جارٍ التحقق من بياناتك... (نظام وهمي) يتم توجيهك إلى لوحة الطالب.`);
  }

  function handleForgotPassword(e) {
    e.preventDefault();
    alert('تم إرسال رابط استعادة كلمة المرور إلى بريدك الجامعي المسجل. (خدمة تجريبية)');
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1">

      {/* ── Login + Announcements ── */}
      <div className="grid lg:grid-cols-5 gap-8 mb-14">

        {/* Login Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl login-card border border-gray-100 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-ut-blue to-ut-green px-6 py-5">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <LogIn size={24} />
                {t.loginTitle}
              </h2>
              <p className="text-white/80 text-sm mt-1">{t.loginSubtitle}</p>
            </div>

            <div className="p-6">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{t.idLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={t.idPlaceholder}
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ut-blue focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{t.passwordLabel}</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-ut-blue"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-ut-blue hover:bg-ut-blue/90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    <LogIn size={20} />
                    {t.loginBtn}
                  </button>
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="text-sm text-ut-green font-medium hover:underline"
                  >
                    {t.forgotPassword}
                  </a>
                </div>

                {/* Security note */}
                <div className="mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500 bg-gray-50 p-3 rounded-xl flex gap-2">
                  <ShieldCheck size={16} className="shrink-0 text-ut-green" />
                  <span>{t.securityNote}</span>
                </div>
              </form>

              {loginError && (
                <div className="mt-3 text-sm text-red-600">{loginError}</div>
              )}
            </div>
          </div>
        </div>

        {/* Announcements Panel */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden h-full flex flex-col">
            <div className="bg-ut-lightblue border-b border-ut-blue/20 px-6 py-4 flex justify-between items-center flex-wrap gap-2">
              <h3 className="text-xl font-bold text-ut-blue flex items-center gap-2">
                <Bell size={22} />
                {t.announcementsTitle}
              </h3>
              <span className="text-xs bg-ut-green/10 text-ut-green px-3 py-1 rounded-full">
                {t.lastUpdate}
              </span>
            </div>

            <div className="p-5 flex-1">
              <div className="space-y-4">
                {announcements.map((ann) => (
                  <AnnouncementCard key={ann.id} announcement={ann} />
                ))}

                {/* Ticker */}
                <div className="bg-ut-blue/5 rounded-xl p-3 border border-dashed border-ut-blue/30 overflow-hidden">
                  <div className="flex items-center gap-2 text-ut-blue text-sm font-medium whitespace-nowrap overflow-x-hidden relative">
                    <span className="animate-pulse">🔔</span>
                    <span className="inline-block animate-ticker-scroll">{t.tickerText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services Bar ── */}
      <div className="mb-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 inline-flex items-center gap-2 border-b-2 border-ut-green pb-1">
            {t.servicesTitle}
          </h2>
          <p className="text-gray-500 text-sm mt-2">{t.servicesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOpen={setActiveModal} />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal serviceId={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  );
}
