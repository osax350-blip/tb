import { Activity, Calendar, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/useLanguage';

const iconMap = {
  activity: Activity,
  calendar: Calendar,
  'file-text': FileText,
};

const borderColorMap = {
  'ut-green': 'border-ut-green',
  'ut-blue': 'border-ut-blue',
};

const iconBgMap = {
  'ut-green': 'bg-ut-green/20 text-ut-green',
  'ut-blue': 'bg-ut-blue/10 text-ut-blue',
};

export default function AnnouncementCard({ announcement }) {
  const { lang } = useLanguage();

  const Icon = iconMap[announcement.icon] || Activity;
  const borderColor = borderColorMap[announcement.color] || 'border-ut-green';
  const iconBg = iconBgMap[announcement.color] || 'bg-ut-green/20 text-ut-green';

  const title = lang === 'ar' ? announcement.titleAr : announcement.titleEn;
  const body = lang === 'ar' ? announcement.bodyAr : announcement.bodyEn;
  const date = lang === 'ar' ? announcement.dateAr : announcement.dateEn;

  return (
    <div className={`border-r-4 ${borderColor} bg-gray-50 p-4 rounded-xl shadow-sm`}>
      <div className="flex items-start gap-3">
        <div className={`rounded-full p-2 ${iconBg}`}>
          <Icon size={20} />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-600">{body}</p>
          <span className="text-xs text-gray-400 mt-1 block">{date}</span>
        </div>
      </div>
    </div>
  );
}
