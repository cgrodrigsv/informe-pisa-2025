import React from 'react';
import { Atom, Calculator, BookOpen, Cpu, Sparkles, Globe, FileText, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeDomain, setActiveDomain, onOpenRagModal, theme, setTheme }) {
  const domains = [
    { id: 'all', label: 'Visión General', icon: Globe },
    { id: 'science', label: 'Ciencias', icon: Atom },
    { id: 'math', label: 'Matemáticas', icon: Calculator },
    { id: 'reading', label: 'Lectura', icon: BookOpen },
    { id: 'digitalWorld', label: 'Mundo Digital', icon: Cpu }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-sky-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  OCDE
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> PISA 2025
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                Resultados PISA 2025
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800/80 overflow-x-auto max-w-full">
              {domains.map((domain) => {
                const Icon = domain.icon;
                const isActive = activeDomain === domain.id;
                return (
                  <button key={domain.id} onClick={() => setActiveDomain(domain.id)} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${isActive ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{domain.label}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={onOpenRagModal} className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 border border-purple-400/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Consultar RAG AI</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
