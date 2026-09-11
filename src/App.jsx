import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroStats from './components/HeroStats';
import GlobalMap from './components/GlobalMap';
import HistoricalTrends from './components/HistoricalTrends';
import EquityScatter from './components/EquityScatter';
import CompetencyGap from './components/CompetencyGap';
import TopSystems from './components/TopSystems';
import FutureSkills from './components/FutureSkills';
import CountryExplorer from './components/CountryExplorer';
import StudentAttitudes from './components/StudentAttitudes';
import SchoolLife from './components/SchoolLife';
import EnvironmentReadiness from './components/EnvironmentReadiness';
import RagAssistantModal from './components/RagAssistantModal';

export default function App() {
  const [isRagModalOpen, setIsRagModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white ${theme === 'light' ? 'theme-light' : ''}`}>
      
      <Navbar 
        onOpenRagModal={() => setIsRagModalOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="flex-1 space-y-4">
        <div id="resumen"><HeroStats activeDomain="all" /></div>
        <div id="mapa"><GlobalMap activeDomain="all" /></div>
        
        {/* Nuevas secciones Capítulos 3, 4, 5 */}
        <div id="actitudes"><StudentAttitudes /></div>
        <div id="vida-escolar"><SchoolLife /></div>
        <div id="medio-ambiente"><EnvironmentReadiness /></div>

        <div id="brechas"><CompetencyGap /></div>
        <div id="tendencias"><HistoricalTrends activeDomain="all" /></div>
        <div id="impacto"><EquityScatter activeDomain="all" /></div>
        <div id="habilidades"><FutureSkills /></div>
        <div id="directorio"><CountryExplorer /></div>
      </main>
      
      <footer className="border-t border-slate-800 bg-[#0f172a] py-12 text-center">
        <p className="text-slate-400">PISA 2025 Education Dashboard</p>
      </footer>
      
      {isRagModalOpen && <RagAssistantModal onClose={() => setIsRagModalOpen(false)} />}
    </div>
  );
}

