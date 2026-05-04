import { useLanguage } from '../../contexts/LanguageContext';
import { modalContents } from '../../data/portalData';

export default function ServiceModal({ serviceId, onClose }) {
  const { lang } = useLanguage();

  if (!serviceId) return null;

  const content = modalContents[serviceId]?.[lang];
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="mt-2">
          {/* Admission */}
          {serviceId === 'admission' && (
            <>
              <h3 className={`text-xl font-bold mb-3 ${content.titleColor}`}>{content.title}</h3>
              <p className="text-gray-600">{content.body} <a href="#" className="text-ut-green font-bold">{content.pdfLabel}</a>.</p>
              <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                <span className="text-sm">{content.extra}</span>
              </div>
            </>
          )}

          {/* Document Verification */}
          {serviceId === 'verify' && (
            <>
              <h3 className={`text-xl font-bold mb-3 ${content.titleColor}`}>{content.title}</h3>
              <p className="text-gray-600">{content.body}</p>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder={content.inputPlaceholder}
                  className="border rounded-lg p-2 w-full"
                />
                <button className="mt-2 bg-ut-blue text-white px-4 py-2 rounded-lg">
                  {content.btnLabel}
                </button>
              </div>
            </>
          )}

          {/* Academic Calendar */}
          {serviceId === 'calendar' && (
            <>
              <h3 className={`text-xl font-bold mb-3 ${content.titleColor}`}>{content.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {content.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <button className="mt-4 text-ut-green text-sm">{content.pdfLabel}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
