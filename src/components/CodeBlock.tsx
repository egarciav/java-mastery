import { useState } from 'react';
import { Highlight, themes, Prism } from 'prism-react-renderer';
import { Copy, Check, FileCode } from 'lucide-react';

// Register Java grammar (NOT included by default in prism-react-renderer v2)
(Prism.languages as Record<string, unknown>).java = {
  'comment': [
    { pattern: /\/\*\*[\s\S]*?\*\//, greedy: true },
    { pattern: /\/\*[\s\S]*?\*\//, greedy: true },
    { pattern: /\/\/.*/, greedy: true }
  ],
  'string': [
    { pattern: /"""[\s\S]*?"""/, greedy: true },
    { pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: true }
  ],
  'annotation': { pattern: /@\w+(?:\.\w+)*/, alias: 'builtin' },
  'keyword': /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
  'boolean': /\b(?:true|false)\b/,
  'number': /\b0(?:x[\da-f_]+|b[01_]+|[0-7_]+)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:[eE][+-]?\d[\d_]*)?[dDfFlL]?\b/i,
  'function': /\b\w+(?=\s*\()/,
  'operator': /->|[<>]=?|[!=]=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]|<<=?|>>>?=?/,
  'punctuation': /[{}[\];(),.:]/
};

// Register SQL grammar
(Prism.languages as Record<string, unknown>).sql = {
  'comment': [
    { pattern: /\/\*[\s\S]*?\*\//, greedy: true },
    { pattern: /--.*/ }
  ],
  'string': { pattern: /(')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: true },
  'keyword': /\b(?:SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|TABLE|INDEX|INTO|VALUES|SET|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AND|OR|NOT|NULL|IS|IN|BETWEEN|LIKE|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|EXISTS|UNION|ALL|PRIMARY|KEY|FOREIGN|REFERENCES|CONSTRAINT|DEFAULT|AUTO_INCREMENT|CASCADE|UNIQUE|CHECK|VIEW|TRIGGER|PROCEDURE|FUNCTION|BEGIN|END|IF|ELSE|THEN|CASE|WHEN|COMMIT|ROLLBACK|GRANT|REVOKE|VARCHAR|INT|INTEGER|BIGINT|BOOLEAN|DATE|TIMESTAMP|TEXT|FLOAT|DOUBLE|DECIMAL)\b/i,
  'number': /\b\d+(?:\.\d+)?\b/,
  'boolean': /\b(?:TRUE|FALSE)\b/i,
  'operator': /[=<>!]+/,
  'punctuation': /[;(),.*]/
};

// Register properties/ini grammar for .properties files
(Prism.languages as Record<string, unknown>).properties = {
  'comment': { pattern: /^[#!].*$/m },
  'key': { pattern: /^[\w.-]+(?=\s*[=:])/m, alias: 'attr-name' },
  'value': { pattern: /(?<=[=:])\s*.+/m, alias: 'attr-value' },
  'punctuation': /[=:]/
};

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const theme = themes.nightOwl;

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
      <div className="flex items-center justify-between px-4 py-2.5" style={{ background: '#01111d' }}>
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
              background: '#011627',
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
