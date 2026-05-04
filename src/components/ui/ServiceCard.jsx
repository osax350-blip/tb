import { BookOpen, CheckCircle, CalendarDays } from 'lucide-react';
import { useLanguage } from '../../contexts/useLanguage';

const iconMap = {
  'book-open': BookOpen,
  'check-circle': CheckCircle,
  'calendar-days': CalendarDays,
};

export default function ServiceCard({ service, onOpen }) {
  const { lang, t } = useLanguage();

  const Icon = iconMap[service.icon] || BookOpen;
  const title = lang === 'ar' ? service.titleAr : service.titleEn;
  const body = lang === 'ar' ? service.bodyAr : service.bodyEn;
  const linkLabel = t[service.linkKey];

  return (
    <div
      className="service-card bg-white rounded-2xl p-5 text-center shadow hover:shadow-xl transition-all cursor-pointer border border-gray-100"
      onClick={() => onOpen(service.id)}
    >
      <div className={`w-16 h-16 ${service.bgColor} ${service.textColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{body}</p>
      <span className="inline-block mt-3 text-ut-green text-sm font-medium">{linkLabel}</span>
    </div>
  );
}
