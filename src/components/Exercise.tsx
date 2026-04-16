import { useState } from 'react';
import { Code2, ChevronDown, ChevronUp, CheckCircle2, Lightbulb } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface ExerciseProps {
  number: number;
  title: string;
  description: string;
  hint?: string;
  solution: string;
  solutionLanguage?: string;
  solutionFilename?: string;
}

export default function Exercise({
  number,
  title,
  description,
  hint,
  solution,
  solutionLanguage = 'java',
  solutionFilename,
}: ExerciseProps) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-6 rounded-xl border-2 border-primary/30 overflow-hidden">
      <div className="bg-primary/10 px-5 py-4 flex items-center gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Code2 size={18} className="text-primary" />
        </div>
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Ejercicio {number}</span>
          <h4 className="text-text font-semibold text-sm mt-0.5">{title}</h4>
        </div>
      </div>

      <div className="px-5 py-4 bg-surface-light/50">
        <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">{description}</p>

        {hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-3 flex items-center gap-2 text-xs text-warning hover:text-warning/80 transition-colors cursor-pointer"
          >
            <Lightbulb size={14} />
            {showHint ? 'Ocultar pista' : 'Necesito una pista'}
            {showHint ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}

        {showHint && hint && (
          <div className="mt-2 p-3 rounded-lg bg-warning/10 border border-warning/20 text-sm text-warning/90">
            💡 {hint}
          </div>
        )}
      </div>

      <div className="px-5 py-3 border-t border-border/50">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer"
        >
          <CheckCircle2 size={16} />
          {showSolution ? 'Ocultar solución' : 'Ver solución'}
          {showSolution ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showSolution && (
          <div className="mt-3">
            <CodeBlock code={solution} language={solutionLanguage} filename={solutionFilename} />
          </div>
        )}
      </div>
    </div>
  );
}
