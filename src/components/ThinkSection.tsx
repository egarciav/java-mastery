import { Brain } from 'lucide-react';

interface ThinkSectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function ThinkSection({ title = '¿Cómo pensarlo?', children }: ThinkSectionProps) {
  return (
    <div className="my-6 rounded-xl border border-accent/30 overflow-hidden">
      <div className="bg-accent/10 px-5 py-3 flex items-center gap-2.5">
        <Brain size={18} className="text-accent" />
        <span className="font-semibold text-sm text-accent">{title}</span>
      </div>
      <div className="px-5 py-4 bg-accent/5 text-text-muted text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
