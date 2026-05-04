import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="bg-white shadow-md sticky top-0 z-30 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-ut-blue rounded-xl flex items-center justify-center text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-ut-blue leading-tight">{t.universityName}</h1>
              <span className="text-xs text-gray-500 -mt-1">{t.universitySubtitle}</span>
            </div>
          </div>

          {/* Right side: English label + lang toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 border-l border-gray-300 pr-4">
              <span className="text-sm font-medium text-gray-600">{t.universityEn}</span>
              <div className="w-7 h-7 bg-ut-green/10 rounded-full flex items-center justify-center">
                <span className="text-ut-green text-xs font-bold">UT</span>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 transition text-sm font-medium text-gray-700"
            >
              <Globe size={18} />
              <span>{t.langBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
