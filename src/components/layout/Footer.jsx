import { Phone, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/useLanguage';

// Simple inline SVG icons for social media
function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 mt-10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Technical Support */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-ut-blue rounded-lg flex items-center justify-center text-white">
                <Phone size={18} />
              </div>
              <span className="font-bold text-gray-800">{t.techSupport}</span>
            </div>
            <p className="text-gray-600 text-sm">{t.phone}</p>
            <p className="text-gray-600 text-sm">{t.email}</p>
            <p className="text-gray-600 text-sm">{t.hours}</p>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3">{t.importantLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-ut-blue">{t.link1}</a></li>
              <li><a href="#" className="hover:text-ut-blue">{t.link2}</a></li>
              <li><a href="#" className="hover:text-ut-blue">{t.link3}</a></li>
              <li><a href="#" className="hover:text-ut-blue">{t.link4}</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3">{t.followUs}</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ut-blue/10 transition">
                <FacebookIcon />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ut-blue/10 transition">
                <InstagramIcon />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-ut-blue/10 transition">
                <TwitterIcon />
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <Globe size={20} />
              <span className="text-xs text-gray-500">{t.digitalNote}</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-gray-500 text-sm flex flex-wrap justify-between items-center gap-2">
          <span>{t.copyright}</span>
          <span className="text-ut-green text-xs">{t.portalLabel}</span>
        </div>
      </div>
    </footer>
  );
}
