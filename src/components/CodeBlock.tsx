import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check, FileCode } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const theme = themes.oneDark;

export default function CodeBlock({ code, language = 'java', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langLabel = language === 'java' ? 'Java' : language === 'bash' ? 'Terminal' : language === 'xml' ? 'XML' : language === 'json' ? 'JSON' : language === 'sql' ? 'SQL' : language === 'yaml' ? 'YAML' : language;

  return (
    <div className="rounded-xl overflow-hidden border border-[#2d333b] my-5 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#1e1e2e' }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {filename && (
            <span className="text-[#8b949e] text-sm font-mono ml-2 flex items-center gap-1.5">
              <FileCode size={14} />
              {filename}
            </span>
          )}
          {!filename && (
            <span className="text-[#6e7681] text-xs font-mono ml-2">{langLabel}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
        >
          {copied ? <Check size={13} className="text-[#3fb950]" /> : <Copy size={13} />}
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <Highlight theme={theme} code={code.trim()} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{
              margin: 0,
              padding: '1rem 0',
              background: '#282c34',
              overflowX: 'auto',
              fontSize: '0.875rem',
              lineHeight: '1.7',
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              return (
                <div
                  key={i}
                  style={{ ...lineProps.style, display: 'table-row' }}
                >
                  <span
                    style={{
                      display: 'table-cell',
                      paddingRight: '1rem',
                      paddingLeft: '1rem',
                      textAlign: 'right',
                      userSelect: 'none',
                      opacity: 0.3,
                      fontSize: '0.75rem',
                      width: '2rem',
                      color: '#8b949e',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ display: 'table-cell', paddingRight: '1rem' }}>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
