import { Calendar, Clock, GitCommit } from 'lucide-react';

interface DayHeaderProps {
  day: number;
  title: string;
  duration: string;
  commitMsg?: string;
}

export default function DayHeader({ day, title, duration, commitMsg }: DayHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">{day}</span>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-text-muted mb-0.5">
            <Calendar size={12} />
            <span>Día {day}</span>
            <span className="text-border">•</span>
            <Clock size={12} />
            <span>{duration}</span>
          </div>
          <h1 className="text-3xl font-bold text-java">{title}</h1>
        </div>
      </div>
      {commitMsg && (
        <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-sm font-mono">
          <GitCommit size={14} className="text-success flex-shrink-0" />
          <span className="text-success">git commit -m</span>
          <span className="text-[#e6edf3]">"{commitMsg}"</span>
        </div>
      )}
    </div>
  );
}
