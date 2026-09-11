import React, { useState } from 'react';
import { COMPETENCY_GAP_DATA } from '../data/pisa2025Data';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { AlertTriangle, Award, CheckCircle2, Info, ArrowRightLeft, ShieldAlert } from 'lucide-react';

export default function CompetencyGap() {
  const [selectedSubjectId, setSelectedSubjectId] = useState('all');

  const chartData = COMPETENCY_GAP_DATA.subjects.map(item => ({
    name: item.name,
    'Alto Rendimiento (Niv. 5-6)': item.topPerformers,
    'Competencia Base (Niv. 2-4)': item.baselineCompetency,
    'Bajo Rendimiento (< Niv. 2)': item.lowAchievers,
    netGap: item.netGap,
    description: item.description
  }));

  const activeSubject = COMPETENCY_GAP_DATA.subjects.find(s => s.id === selectedSubjectId) || COMPETENCY_GAP_DATA.subjects[0];

  return (
    <section className="py-12 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-medium mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Equidad y Distribución de Desempeño</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Brecha de Competencias: <span className="text-gradient-rose">Top Performers vs. Low Achievers</span>
            </h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
              Comparativa del porcentaje de estudiantes con excelencia académica (Niveles 5 y 6) frente al grupo que no alcanza el nivel mínimo funcional (Por debajo del Nivel 2).
            </p>
          </div>

          {/* Quick Filter Switcher */}
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedSubjectId('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedSubjectId === 'all' ? 'bg-rose-500 text-slate-900 dark:text-white font-bold shadow-md shadow-rose-500/20' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
              }`}
            >
              Todas las Materias
            </button>
            {COMPETENCY_GAP_DATA.subjects.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubjectId(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedSubjectId === s.id ? 'bg-rose-500 text-slate-900 dark:text-white font-bold shadow-md shadow-rose-500/20' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart Container (2 cols) */}
          <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-rose-400" />
                  <span>Distribución Porcentual de Niveles de Desempeño</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Promedios de la OCDE PISA 2025</p>
              </div>

              {/* Legend Badges */}
              <div className="hidden sm:flex items-center space-x-3 text-xs">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Top (5-6)
                </span>
                <span className="flex items-center gap-1 text-sky-400 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Base (2-4)
                </span>
                <span className="flex items-center gap-1 text-rose-400 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Rezagados (&lt;2)
                </span>
              </div>
            </div>

            <div className="h-[340px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 25 }}
                  barSize={32}
                >
                  <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={12} unit="%" tickLine={false} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '15px' }} />
                  <Bar dataKey="Alto Rendimiento (Niv. 5-6)" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Competencia Base (Niv. 2-4)" fill="#38BDF8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Bajo Rendimiento (< Niv. 2)" fill="#F43F5E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Metric Cards (1 col) */}
          <div className="space-y-4 flex flex-col justify-between">
            
            {/* Top Performers Card */}
            <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Estudiantes de Alto Rendimiento</span>
                  </div>
                  <div className="text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                    {activeSubject.topPerformers}%
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Alcanzan Niveles 5 y 6 (capacidad de resolución de problemas complejos e hipótesis científicas).
                  </p>
                </div>
              </div>
            </div>

            {/* Low Achievers Card */}
            <div className="glass-card p-5 rounded-2xl border-l-4 border-l-rose-500 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-rose-400 font-bold uppercase tracking-wider mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Estudiantes de Bajo Rendimiento</span>
                  </div>
                  <div className="text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                    {activeSubject.lowAchievers}%
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    No alcanzan el Nivel 2 (umbral mínimo de competencia funcional para la sociedad moderna).
                  </p>
                </div>
              </div>
            </div>

            {/* Net Competency Gap Box */}
            <div className="glass-card p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Brecha Neta (Top vs. Low)</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {activeSubject.netGap} p.p.
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {activeSubject.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
