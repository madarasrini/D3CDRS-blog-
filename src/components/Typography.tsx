import { ReactNode } from 'react';
import { cn } from '../lib/utils';

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-14 mb-6 tracking-tight border-b-2 border-slate-200 pb-3", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-10 mb-4", className)}>
      {children}
    </h3>
  );
}

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-slate-700 text-lg sm:text-[1.125rem] leading-[1.8] mb-6 font-serif", className)}>
      {children}
    </p>
  );
}

export function Ul({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ul className={cn("list-none space-y-4 mb-8 pl-2 font-serif", className)}>
      {children}
    </ul>
  );
}

export function Li({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start text-slate-700 text-lg sm:text-[1.125rem] leading-[1.8]", className)}>
      <span className="mr-5 mt-3 block h-1.5 w-1.5 shrink-0 bg-[#b89047] rotate-45 shadow-sm" />
      <span>{children}</span>
    </li>
  );
}

export function Ol({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ol className={cn("list-decimal pl-6 space-y-4 mb-8 text-slate-700 text-lg sm:text-[1.125rem] leading-[1.8] marker:text-[#b89047] marker:font-bold font-serif", className)}>
      {children}
    </ol>
  );
}
