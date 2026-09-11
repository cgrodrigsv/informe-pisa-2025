import React, { useState } from 'react';
import { COUNTRY_EXPLORER_DATA } from '../data/pisa2025Data';
import { Search, Filter, ArrowUpDown, Globe, Award, ShieldAlert, ChevronRight } from 'lucide-react';

export default function CountryExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('science'); // 'science', 'math', 'reading', 'digital', 'topPerformersPct'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc', 'desc'

  const filteredCountries = COUNTRY_EXPLORER_DATA
    .filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <section className="py-12 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-medium mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Base de Datos PISA 2025 • 85 Economías</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Explorador de <span className="text-gradient-sky">Sistemas Educativos</span>
            </h2>
            <p className="mt-1 text-slate-400 text-sm max-w-2xl">
              Busca, ordena y compara los resultados de rendimiento por materias, porcentaje de rezagados y brecha socioeconómica.
            </p>
          </div>

          {/* Search & Sort Input Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar país o código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl p-1 w-full sm:w-auto">
              <button
                onClick={() => handleSort('science')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sortBy === 'science' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Ciencias
              </button>
              <button
                onClick={() => handleSort('math')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sortBy === 'math' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Math
              </button>
              <button
                onClick={() => handleSort('reading')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sortBy === 'reading' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Lectura
              </button>
              <button
                onClick={() => handleSort('digital')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sortBy === 'digital' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Digital
              </button>
            </div>

          </div>
        </div>

        {/* Table View */}
        <div className="glass-card rounded-3xl border border-slate-800/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-6">País / Economía</th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-sky-400" onClick={() => handleSort('science')}>
                    <div className="flex items-center justify-center space-x-1">
                      <span>Ciencias</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-indigo-400" onClick={() => handleSort('math')}>
                    <div className="flex items-center justify-center space-x-1">
                      <span>Matemáticas</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-emerald-400" onClick={() => handleSort('reading')}>
                    <div className="flex items-center justify-center space-x-1">
                      <span>Lectura</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-amber-400" onClick={() => handleSort('digital')}>
                    <div className="flex items-center justify-center space-x-1">
                      <span>Mundo Digital</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center">Top Performers</th>
                  <th className="py-4 px-4 text-center">Low Achievers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredCountries.map((c, idx) => (
                  <tr key={c.code} className="hover:bg-slate-800/50 transition-colors">
                    
                    {/* Country Name */}
                    <td className="py-3.5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-500 font-mono text-[11px] w-6">#{idx + 1}</span>
                        <div>
                          <div className="font-bold text-slate-100 text-sm">{c.name}</div>
                          <div className="text-[10px] text-slate-400">{c.code}</div>
                        </div>
                      </div>
                    </td>

                    {/* Science Score */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                        c.science >= 500 ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' :
                        c.science >= 460 ? 'bg-slate-800 text-slate-200' : 'bg-rose-500/10 text-rose-300'
                      }`}>
                        {c.science}
                      </span>
                    </td>

                    {/* Math Score */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                        c.math >= 500 ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' :
                        c.math >= 460 ? 'bg-slate-800 text-slate-200' : 'bg-rose-500/10 text-rose-300'
                      }`}>
                        {c.math}
                      </span>
                    </td>

                    {/* Reading Score */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                        c.reading >= 500 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        c.reading >= 460 ? 'bg-slate-800 text-slate-200' : 'bg-rose-500/10 text-rose-300'
                      }`}>
                        {c.reading}
                      </span>
                    </td>

                    {/* Digital Score */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                        c.digital >= 500 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        c.digital >= 460 ? 'bg-slate-800 text-slate-200' : 'bg-rose-500/10 text-rose-300'
                      }`}>
                        {c.digital}
                      </span>
                    </td>

                    {/* Top Performers Pct */}
                    <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">
                      {c.topPerformersPct}%
                    </td>

                    {/* Low Achievers Pct */}
                    <td className="py-3.5 px-4 text-center text-rose-400 font-bold">
                      {c.lowPerformersPct}%
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
