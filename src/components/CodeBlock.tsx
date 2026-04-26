import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../lib/utils';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("my-8 overflow-hidden rounded border border-slate-300 shadow-lg bg-[#0f172a]", className)}>
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#0f172a] text-[10px] uppercase font-sans font-bold tracking-widest text-[#b89047]">
        <div className="flex gap-2 mr-4 opacity-70">
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
        <span>{language}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: 'transparent',
          fontSize: '0.85rem',
          lineHeight: '1.6',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 bg-slate-100 text-slate-800 border border-slate-200 font-mono text-[0.85em] font-medium rounded shadow-sm">
      {children}
    </code>
  );
}
