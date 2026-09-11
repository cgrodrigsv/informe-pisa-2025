import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, setTheme, onOpenRagModal }) {
  const navItems = [
    { label: 'Resumen Global', href: '#resumen' },
    { label: 'Mapa de Rendimiento', href: '#mapa' },
    { label: 'Brechas y Equidad', href: '#brechas' },
    { label: 'Análisis de Tendencias', href: '#tendencias' },
    { label: 'Impacto Socioeconómico', href: '#impacto' },
    { label: 'Habilidades del Futuro', href: '#habilidades' },
    { label: 'Directorio de Países', href: '#directorio' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b1120] border-b border-slate-800/80 transition-all font-sans">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center bg-[#0b1120] relative">
              <span className="text-blue-500 font-black text-xl tracking-tighter">PISA</span>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-50 blur-sm"></div>
            </div>
            
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#102a43] border border-blue-900/50 mb-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">
                  OCDE • VOL. I (2026)
                </span>
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                Resultados PISA 2025 <span className="font-normal text-slate-400">| El Estado de la Educación Global</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="w-10 h-10 rounded-lg bg-[#102a43] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={onOpenRagModal} 
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white text-sm font-bold shadow-lg shadow-purple-500/25 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Consultar RAG AI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation Links */}
      <div className="bg-[#0f172a] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto hide-scrollbar py-3">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                className="text-sm font-bold text-slate-400 hover:text-slate-100 whitespace-nowrap transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
