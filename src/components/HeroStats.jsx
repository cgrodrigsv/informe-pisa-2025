import React from 'react';
import { OECD_AVERAGES, PISA_2025_META } from '../data/pisa2025Data';
import { Atom, Calculator, BookOpen, Cpu, Users, Building2, Globe2, TrendingDown, Sparkles, AlertCircle } from 'lucide-react';

export default function HeroStats({ activeDomain }) {
  const averageItems = [
    { key: 'science', data: OECD_AVERAGES.science, icon: Atom, accent: 'from-sky-500/20 to-blue-600/10', border: 'border-sky-500/30', text: 'text-sky-400' },
    { key: 'math', data: OECD_AVERAGES.math, icon: Calculator, accent: 'from-indigo-500/20 to-purple-600/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
    { key: 'reading', data: OECD_AVERAGES.reading, icon: BookOpen, accent: 'from-emerald-500/20 to-teal-600/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
    { key: 'digitalWorld', data: OECD_AVERAGES.digitalWorld, icon: Cpu, accent: 'from-amber-500/20 to-orange-600/10', border: 'border-amber-500/30', text: 'text-amber-400' }
  ];

  const filteredItems = activeDomain === 'all'
    ? averageItems
    : averageItems.filter(item => item.key === activeDomain);

  return (
    <section className="relative py-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Title & Summary */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 text-xs text-sky-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Datos Oficiales Extraídos RAG • PISA 2025 (Vol. I)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            Promedios Globales y <span className="text-gradient-sky">Cifras de Impacto</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Evaluación trienal de la OCDE sobre el rendimiento de estudiantes de 15 años en 85 países, focalizado en competencias científicas y el nuevo dominio de <strong className="text-slate-700 dark:text-slate-200">Aprendizaje en el Mundo Digital (LDW)</strong>.
          </p>
        </div>

        {/* Global Impact Numbers Grid (Top Bar) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="glass-card glass-card-hover p-4 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estudiantes Evaluados</span>
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              3.4 M
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Muestra directa: <span className="text-sky-300 font-semibold">{PISA_2025_META.testedSampleStudents.toLocaleString()}</span> evaluados
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Escuelas Evaluadas</span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {PISA_2025_META.evaluatedSchools.toLocaleString()}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Instituciones educativas globales
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Países y Economías</span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <Globe2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {PISA_2025_META.participatingCountries}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              <span className="text-purple-300 font-medium">{PISA_2025_META.oecdMembers} OCDE</span> + {PISA_2025_META.partnerEconomies} asociados
            </p>
          </div>

          <div className="glass-card glass-card-hover p-4 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Dominio Principal</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <Atom className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-amber-300 font-display truncate">
              Ciencias & LDW
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Foco 2025 en alfabetización digital
            </p>
          </div>

        </div>

        {/* Subject Benchmark Cards Grid */}
        <div className={`grid gap-5 ${filteredItems.length === 1 ? 'grid-cols-1 max-w-xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const data = item.data;
            return (
              <div
                key={item.key}
                className={`glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden border ${item.border} flex flex-col justify-between`}
              >
                {/* Subtle Card Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.accent} rounded-full blur-2xl pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-600 dark:text-slate-300">
                      Promedio OCDE
                    </span>
                    <div className={`p-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 ${item.text}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {data.label}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {data.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
                      {data.score}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {data.unit}
                    </span>
                  </div>

                  {/* Trend indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Variación vs. 2022:</span>
                    <span className={`font-semibold flex items-center gap-1 ${
                      data.shortTermChange < 0 
                        ? 'text-rose-400' 
                        : data.shortTermChange > 0 
                          ? 'text-emerald-400' 
                          : 'text-amber-400'
                    }`}>
                      {data.shortTermChange !== 0 && (
                        <TrendingDown className={`w-3.5 h-3.5 ${data.shortTermChange > 0 ? 'rotate-180' : ''}`} />
                      )}
                      {data.shortTermChange > 0 ? `+${data.shortTermChange}` : data.shortTermChange} pts
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
