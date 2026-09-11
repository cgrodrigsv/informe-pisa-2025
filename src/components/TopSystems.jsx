import React, { useState } from 'react';
import { TOP_SYSTEMS_RISING, TOP_SYSTEMS_DECLINING } from '../data/pisa2025Data';
import { TrendingUp, TrendingDown, Award, AlertCircle, ArrowUpRight, ArrowDownRight, Lightbulb, Compass } from 'lucide-react';

export default function TopSystems() {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'rising', 'declining'
  const [scoreMetric, setScoreMetric] = useState('science'); // 'science', 'math', 'reading', 'digital'

  const getMetricScore = (item) => {
    switch (scoreMetric) {
      case 'math': return item.mathScore;
      case 'reading': return item.readingScore;
      case 'digital': return item.digitalScore;
      case 'science':
      default: return item.scienceScore;
    }
  };

  const getMetricLabel = () => {
    switch (scoreMetric) {
      case 'math': return 'Matemáticas';
      case 'reading': return 'Lectura';
      case 'digital': return 'Mundo Digital';
      default: return 'Ciencias';
    }
  };

  return (
    <section className="py-12 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Dinámica Internacional y Tendencias 10 Años</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Top 5 Sistemas Educativos en <span className="text-gradient-emerald">Ascenso</span> vs. En <span className="text-gradient-rose">Declive</span>
            </h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
              Análisis comparativo de los 5 sistemas con mayores puntajes y trayectoria positiva continua frente a los 5 países con los mayores retrocesos en la última década.
            </p>
          </div>

          {/* Metric Selector Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setScoreMetric('science')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  scoreMetric === 'science' ? 'bg-sky-500 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
                }`}
              >
                Ciencias
              </button>
              <button
                onClick={() => setScoreMetric('math')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  scoreMetric === 'math' ? 'bg-indigo-500 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
                }`}
              >
                Matemáticas
              </button>
              <button
                onClick={() => setScoreMetric('reading')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  scoreMetric === 'reading' ? 'bg-emerald-500 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
                }`}
              >
                Lectura
              </button>
              <button
                onClick={() => setScoreMetric('digital')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  scoreMetric === 'digital' ? 'bg-amber-500 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-200'
                }`}
              >
                Mundo Digital
              </button>
            </div>
          </div>
        </div>

        {/* Systems Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Top 5 Rising Column */}
          {(activeTab === 'both' || activeTab === 'rising') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>Top 5 Sistemas en Ascenso / Alto Rendimiento</span>
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Trayectoria 10 Años</span>
              </div>

              <div className="space-y-3">
                {TOP_SYSTEMS_RISING.map((sys) => {
                  const score = getMetricScore(sys);
                  return (
                    <div
                      key={sys.code}
                      className="glass-card glass-card-hover p-4.5 rounded-2xl border-l-4 border-l-emerald-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 font-black font-display flex items-center justify-center text-sm border border-emerald-500/20">
                          #{sys.rank}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-base font-bold text-slate-900 dark:text-white">{sys.name}</span>
                            <span className="text-sm">{sys.flag}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                              {sys.region}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                            <Lightbulb className="w-3 h-3 text-amber-400 shrink-0" />
                            <span className="truncate max-w-xs sm:max-w-md">{sys.keyFactor}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end space-x-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800/60">
                        <div className="text-right">
                          <div className="text-xs text-slate-500 dark:text-slate-400">{getMetricLabel()}</div>
                          <div className="text-xl font-black font-display text-slate-900 dark:text-white">
                            {score} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">pts</span>
                          </div>
                        </div>
                        <div className="px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-extrabold flex items-center gap-0.5 border border-emerald-500/30">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          +{sys.change10yr} pts
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Top 5 Declining Column */}
          {(activeTab === 'both' || activeTab === 'declining') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-rose-400" />
                  <span>Top 5 Sistemas con Mayor Declive</span>
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Caída en 10 Años</span>
              </div>

              <div className="space-y-3">
                {TOP_SYSTEMS_DECLINING.map((sys) => {
                  const score = getMetricScore(sys);
                  return (
                    <div
                      key={sys.code}
                      className="glass-card glass-card-hover p-4.5 rounded-2xl border-l-4 border-l-rose-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 font-black font-display flex items-center justify-center text-sm border border-rose-500/20">
                          #{sys.rank}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-base font-bold text-slate-900 dark:text-white">{sys.name}</span>
                            <span className="text-sm">{sys.flag}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                              {sys.region}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-rose-400 shrink-0" />
                            <span className="truncate max-w-xs sm:max-w-md">{sys.keyFactor}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end space-x-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800/60">
                        <div className="text-right">
                          <div className="text-xs text-slate-500 dark:text-slate-400">{getMetricLabel()}</div>
                          <div className="text-xl font-black font-display text-slate-900 dark:text-white">
                            {score} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">pts</span>
                          </div>
                        </div>
                        <div className="px-2.5 py-1 rounded-xl bg-rose-500/20 text-rose-300 text-xs font-extrabold flex items-center gap-0.5 border border-rose-500/30">
                          <ArrowDownRight className="w-3.5 h-3.5" />
                          {sys.change10yr} pts
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
