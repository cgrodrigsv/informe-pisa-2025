import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ATTITUDES_DATA } from '../data/pisa2025Data';
import { Lightbulb, Brain, Target } from 'lucide-react';

export default function StudentAttitudes() {
  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 font-medium mb-2">
            <Brain className="w-3.5 h-3.5" />
            <span>Capítulo 3 • PISA 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Actitudes hacia el <span className="text-gradient-sky">Aprendizaje</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            La curiosidad, la perseverancia y la mentalidad de crecimiento son factores clave que diferencian a los estudiantes de alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-amber-500/20 rounded-lg"><Lightbulb className="w-5 h-5 text-amber-400" /></div>
              <h3 className="font-bold text-slate-900 dark:text-white">Curiosidad</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Estudiantes en El Salvador reportan un <span className="text-amber-400 font-bold">69%</span> de curiosidad general frente al 73% de la OCDE.</p>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg"><Target className="w-5 h-5 text-emerald-400" /></div>
              <h3 className="font-bold text-slate-900 dark:text-white">Perseverancia</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">El <span className="text-emerald-400 font-bold">65%</span> de salvadoreños aplica esfuerzo adicional ante retos, superando el promedio OCDE (60%).</p>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg"><Brain className="w-5 h-5 text-purple-400" /></div>
              <h3 className="font-bold text-slate-900 dark:text-white">Mentalidad de Crecimiento</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Solo el <span className="text-purple-400 font-bold">49%</span> cree que la inteligencia puede desarrollarse (vs 69% OCDE).</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 h-[450px] w-full">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-center">Comparativa: Curiosidad vs Mentalidad de Crecimiento</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ATTITUDES_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
              <YAxis domain={[0, 100]} stroke="#94a3b8" tickFormatter={(value) => `${value}%`} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }} itemStyle={{color: '#fff'}} />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar dataKey="curiosity" name="Curiosidad" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="growthMindset" name="Mentalidad de Crecimiento" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

