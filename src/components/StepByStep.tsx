import { ArrowRight } from 'lucide-react';

interface Step {
  instruction: string;
  detail?: string;
}

interface StepByStepProps {
  title?: string;
  steps: Step[];
}

export default function StepByStep({ title = 'Paso a paso', steps }: StepByStepProps) {
  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      <div className="bg-surface-lighter/40 px-5 py-3 flex items-center gap-2.5">
        <ArrowRight size={16} className="text-primary" />
        <span className="font-semibold text-sm text-text">{title}</span>
      </div>
      <div className="px-5 py-4 space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-3 py-3 border-b border-border/30 last:border-0">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
              {i + 1}
            </div>
            <div>
              <p className="text-text text-sm font-medium">{step.instruction}</p>
              {step.detail && (
                <p className="text-text-muted text-xs mt-1 leading-relaxed">{step.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
