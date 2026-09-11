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
import RagAssistantModal from './components/RagAssistantModal';
import { PISA_2025_META } from './data/pisa2025Data';
import { FileText, Globe, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeDomain, setActiveDomain] = useState('all');
  const [isRagModalOpen, setIsRagModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  return (
    <div className={min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white $theme === 'light' ? 'theme-light' : ''}>
      
      {/* Top Navbar */}
      <Navbar 
        activeDomain={activeDomain} 
        setActiveDomain={setActiveDomain} 
        onOpenRagModal={() => setIsRagModalOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        <HeroStats activeDomain={activeDomain} />
        <GlobalMap activeDomain={activeDomain} />
        <CompetencyGap />
        <TopSystems />
        <HistoricalTrends activeDomain={activeDomain} />
        <EquityScatter activeDomain={activeDomain} />
        <FutureSkills />
        <CountryExplorer />
      </main>
      <footer className="border-t border-slate-800 bg-slate-900 py-12 text-center">
        <p className="text-slate-400">PISA 2025 Education Dashboard</p>
      </footer>
      {isRagModalOpen && <RagAssistantModal onClose={() => setIsRagModalOpen(false)} />}
    </div>
  );
}
