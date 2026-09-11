import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroStats from './components/HeroStats';
import CompetencyGap from './components/CompetencyGap';
import TopSystems from './components/TopSystems';
import FutureSkills from './components/FutureSkills';
import CountryExplorer from './components/CountryExplorer';
import RagAssistantModal from './components/RagAssistantModal';
import { PISA_2025_META } from './data/pisa2025Data';
import { FileText, Globe, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeDomain, setActiveDomain] = useState('all');
  const [isRagModalOpen, setIsRagModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar 
        activeDomain={activeDomain} 
        setActiveDomain={setActiveDomain} 
        onOpenRagModal={() => setIsRagModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        
        {/* Section 1: Hero Stats (Cifras globales de impacto) */}
        <HeroStats activeDomain={activeDomain} />

        {/* Section 2: Brecha de Competencias (Top Performers vs Low Achievers) */}
        <CompetencyGap />

        {/* Section 3: Top 5 Sistemas Educativos en Ascenso vs. En Declive */}
        <TopSystems />

        {/* Section 4: Habilidades del Futuro (Competencias Cognitivas y Digitales) */}
        <FutureSkills />

        {/* Section 5: Explorador de Países Participantes */}
        <CountryExplorer />

      </main>

      {/* RAG Assistant Modal */}
      <RagAssistantModal 
        isOpen={isRagModalOpen} 
        onClose={() => setIsRagModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-10 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Resultados PISA 2025: El Estado de la Educación Global</div>
                <p className="text-slate-500 mt-0.5">Basado en el documento anexo oficial {PISA_2025_META.title}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> RAG Validado
              </span>
              <span>•</span>
              <span>85 Países Evaluados</span>
              <span>•</span>
              <span>OCDE © 2026</span>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
