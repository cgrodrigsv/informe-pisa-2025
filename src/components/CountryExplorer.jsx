import React, { useState } from 'react';
import { COUNTRY_EXPLORER_DATA, OECD_AVERAGES, COMPETENCY_GAP_DATA } from '../data/pisa2025Data';
import { Search, Filter, ArrowUpDown, Globe, Award, ShieldAlert, ChevronRight, TrendingDown, Download, X } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function CountryExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('science');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const exportToCSV = () => {
    const headers = ['País', 'Código', 'Ciencias', 'Matemáticas', 'Lectura', 'Mundo Digital', 'Top Performers %', 'Low Achievers %', 'Brecha ESCS'];
    const csvContent = [
      headers.join(','),
      ...filteredCountries.map(c => 
        `"${c.name}",${c.code},${c.science},${c.math},${c.reading},${c.digital},${c.topPerformersPct},${c.lowPerformersPct},${c.escsGap}`
      )
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `pisa2025_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const renderRadarModal = () => {
    if (!selectedCountry) return null;

    const radarData = [
      { subject: 'Ciencias', value: selectedCountry.science, oecd: OECD_AVERAGES.science.score, fullMark: 600 },
      { subject: 'Matemáticas', value: selectedCountry.math, oecd: OECD_AVERAGES.math.score, fullMark: 600 },
      { subject: 'Lectura', value: selectedCountry.reading, oecd: OECD_AVERAGES.reading.score, fullMark: 600 },
      { subject: 'Mundo Digital', value: selectedCountry.digital, oecd: OECD_AVERAGES.digitalWorld.score, fullMark: 600 }
    ];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div className="glass-card w-full max-w-2xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center p-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sky-400 border border-slate-700">
                {selectedCountry.code}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCountry.name}</h3>
                <p className="text-sm text-slate-400">Perfil de Rendimiento PISA 2025</p>
              </div>
            </div>
            <button onClick={() => setSelectedCountry(null)} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[300, 600]} tick={false} axisLine={false} />
                  <Radar name={selectedCountry.name} dataKey="value" stroke="#38BDF8" fill="#38BDF8" fillOpacity={0.5} />
                  <Radar name="Promedio OCDE" dataKey="oecd" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                <div className="text-xs text-emerald-400 font-bold uppercase mb-1">Excelencia</div>
                <div className="text-2xl font-black text-white">{selectedCountry.topPerformersPct}%</div>
                <div className="text-xs text-slate-400">Estudiantes en Nivel 5 o 6</div>
              </div>
              
              <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                <div className="text-xs text-rose-400 font-bold uppercase mb-1">Rezago</div>
                <div className="text-2xl font-black text-white">{selectedCountry.lowPerformersPct}%</div>
                <div className="text-xs text-slate-400">Estudiantes por debajo del Nivel 2</div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl">
                <div className="text-xs text-slate-400 font-bold uppercase mb-1">Equidad (ESCS)</div>
                <div className="text-lg font-bold text-white">{selectedCountry.escsGap} pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-medium mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Base de Datos PISA 2025 • 85 Economías</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Explorador de <span className="text-gradient-sky">Sistemas Educativos</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Buscar país o código..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all" />
            </div>
            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl p-1 w-full sm:w-auto">
              <button onClick={() => handleSort('science')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${sortBy === 'science' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>Ciencias</button>
              <button onClick={() => handleSort('math')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${sortBy === 'math' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'}`}>Math</button>
              <button onClick={() => handleSort('reading')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${sortBy === 'reading' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'}`}>Lectura</button>
            </div>
            <button onClick={exportToCSV} className="keep-colors flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
          </div>
        </div>
        <div className="glass-card rounded-3xl border border-slate-800/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-6">País / Economía</th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-sky-400" onClick={() => handleSort('science')}>Ciencias</th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-indigo-400" onClick={() => handleSort('math')}>Matemáticas</th>
                  <th className="py-4 px-4 text-center cursor-pointer hover:text-emerald-400" onClick={() => handleSort('reading')}>Lectura</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredCountries.map((c, idx) => (
                  <tr key={c.code} onClick={() => setSelectedCountry(c)} className="hover:bg-slate-800/80 transition-colors cursor-pointer group">
                    <td className="py-3.5 px-6 font-semibold text-white">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-500 font-mono text-[11px] w-6">#{idx + 1}</span>
                        <div>
                          <div className="font-bold text-slate-100 text-sm group-hover:text-sky-400 transition-colors">{c.name}</div>
                          <div className="text-[10px] text-slate-400">{c.code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center text-sky-400 font-bold">{c.science}</td>
                    <td className="py-3.5 px-4 text-center text-indigo-400 font-bold">{c.math}</td>
                    <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">{c.reading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {renderRadarModal()}
    </section>
  );
}
