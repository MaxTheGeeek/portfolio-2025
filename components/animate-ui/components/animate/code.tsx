'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeContextType {
  code: string;
  copied: boolean;
  copyToClipboard: () => void;
}

const CodeContext = createContext<CodeContextType | null>(null);

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  children: React.ReactNode;
}

export function Code({ code, children, className = '', ...props }: CodeProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <CodeContext.Provider value={{ code, copied, copyToClipboard }}>
      <div
        className={`glass relative flex flex-col overflow-hidden border border-white/10 rounded-xl bg-[#090b14]/90 shadow-2xl backdrop-blur-xl ${className}`}
        {...props}
      >
        {children}
      </div>
    </CodeContext.Provider>
  );
}

export interface CodeHeaderProps {
  icon?: React.ComponentType<any>;
  copyButton?: boolean;
  children?: React.ReactNode;
}

export function CodeHeader({ icon: Icon, copyButton = true, children }: CodeHeaderProps) {
  const context = useContext(CodeContext);

  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03] select-none">
      <div className="flex items-center gap-3">
        {/* Mac window dots */}
        <div className="flex items-center gap-1.5 mr-1">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/40" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/40" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/40" />
        </div>

        {/* Tab title */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300/90">
          {Icon && <Icon className="w-3.5 h-3.5 text-cyan-400" />}
          <span>{children}</span>
        </div>
      </div>

      {copyButton && context && (
        <button
          onClick={context.copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all"
          title="Copy code"
        >
          {context.copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export interface CodeBlockProps {
  cursor?: boolean;
  lang?: string;
  writing?: boolean;
  duration?: number; // in seconds
  delay?: number; // in seconds
}

// Simple TSX/Code syntax highlighter
function highlightCode(text: string) {
  // Split into lines
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Basic regex highlights for keywords, strings, comments, numbers
    const parts: { text: string; className?: string }[] = [];
    
    // Process character sequence or tokenized words
    let remaining = line;
    let keyCounter = 0;

    // Line comment check
    if (remaining.trim().startsWith('//') || remaining.trim().startsWith('/*')) {
      return (
        <div key={lineIdx} className="table-row font-mono text-xs leading-6">
          <span className="table-cell select-none pr-4 text-right text-gray-600 text-[11px] font-mono">{lineIdx + 1}</span>
          <span className="table-cell text-gray-500 italic">{line}</span>
        </div>
      );
    }

    // Split words / tokens for basic styling
    const tokens = line.split(/(\s+|[{}(),;:=[\]<>'".`+*/\\?&|-])/);

    const renderedTokens = tokens.map((token, tokIdx) => {
      let colorClass = 'text-gray-200';

      if (/^(import|export|from|default|const|let|var|function|return|type|interface|async|await|class|if|else|new|extends|implements)$/.test(token)) {
        colorClass = 'text-purple-400 font-medium';
      } else if (/^(string|number|boolean|any|void|unknown|never|ReactNode|FC|Props|CodeDemoProps)$/.test(token)) {
        colorClass = 'text-amber-300';
      } else if (/^(true|false|null|undefined)$/.test(token)) {
        colorClass = 'text-cyan-300';
      } else if (/^['"`].*['"`]$/.test(token) || token.startsWith("'") || token.startsWith('"') || token.startsWith('`')) {
        colorClass = 'text-emerald-300';
      } else if (/^[A-Z][a-zA-Z0-9]*$/.test(token)) {
        colorClass = 'text-cyan-400';
      } else if (/^[0-9]+$/.test(token)) {
        colorClass = 'text-amber-400';
      } else if (/^[{}(),;:=[\]<>]/.test(token)) {
        colorClass = 'text-gray-400';
      }

      return (
        <span key={tokIdx} className={colorClass}>
          {token}
        </span>
      );
    });

    return (
      <div key={lineIdx} className="table-row font-mono text-[13px] leading-6">
        <span className="table-cell select-none pr-4 text-right text-gray-600 text-[11px] w-8 font-mono">{lineIdx + 1}</span>
        <span className="table-cell whitespace-pre">{renderedTokens}</span>
      </div>
    );
  });
}

export function CodeBlock({
  cursor = true,
  lang = 'tsx',
  writing = true,
  duration = 3,
  delay = 0.2,
}: CodeBlockProps) {
  const context = useContext(CodeContext);
  const fullCode = context?.code || '';

  const [displayedLength, setDisplayedLength] = useState(writing ? 0 : fullCode.length);

  useEffect(() => {
    if (!writing) {
      setDisplayedLength(fullCode.length);
      return;
    }

    setDisplayedLength(0);
    const totalChars = fullCode.length;
    const durationMs = (duration || 3) * 1000;
    const delayMs = (delay || 0.2) * 1000;

    const intervalTime = Math.max(12, Math.floor(durationMs / totalChars));

    let charCount = 0;
    let timer: NodeJS.Timeout;

    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        charCount += 1;
        if (charCount >= totalChars) {
          setDisplayedLength(totalChars);
          clearInterval(timer);
        } else {
          setDisplayedLength(charCount);
        }
      }, intervalTime);
    }, delayMs);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [fullCode, writing, duration, delay]);

  const activeText = fullCode.slice(0, displayedLength);

  return (
    <div className="flex-1 overflow-auto p-4 font-mono text-xs text-gray-200 scrollbar-thin scrollbar-thumb-white/10">
      <div className="table w-full border-collapse">
        {highlightCode(activeText)}
      </div>
      {cursor && (
        <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
      )}
    </div>
  );
}
