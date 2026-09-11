import React, { useState } from 'react';
import { FUTURE_SKILLS_DATA } from '../data/pisa2025Data';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { Cpu, Brain, Sparkles, Bot, CheckCircle, Code2, Globe2, HelpCircle } from 'lucide-react';

export default function FutureSkills() {
  const [selectedSkill, setSelectedSkill] = useState(FUTURE_SKILLS_DATA[0]);

  const chartData = FUTURE_SKILLS_DATA.map(item => ({
    name: item.skill.split(' (')[0],
    'Promedio OCDE': item.oecdScore,
    'Líder Global': item.topSystemScore,
    topCountry: item.topSystemName,
    fullSkill: item
  }));

  return (
    <section className="py-12 relative border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-medium mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Innovación PISA 2025 • Aprendizaje en el Mundo Digital</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Habilidades del Futuro: <span className="text-gradient-sky">Competencias Cognitivas y Digitales</span>
            </h2>
            <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
              Rendimiento comparativo en las habilidades del siglo XXI evaluadas por la OCDE, abarcando pensamiento computacional, indagación científica y evaluación crítica de IA.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Chart (2 cols) */}
          <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-amber-400" />
                  <span>Rendimiento por Competencia Cognitiva</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Promedio OCDE vs. Máximo Sistema Educativo Global</p>
              </div>

              <div className="hidden sm:flex items-center space-x-3 text-xs">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Promedio OCDE
                </span>
                <span className="flex items-center gap-1 text-sky-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Líder Mundial
                </span>
              </div>
            </div>

            <div className="h-[360px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                  barSize={18}
                >
                  <XAxis type="number" domain={[350, 620]} stroke="#64748B" fontSize={11} />
                  <YAxis type="category" dataKey="name" stroke="#94A3B8" fontSize={11} width={150} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                    formatter={(val, name, item) => [
                      `${val} pts`,
                      name === 'Líder Global' ? `Líder: ${item.payload.topCountry}` : name
                    ]}
                  />
                  <Bar dataKey="Promedio OCDE" fill="#F59E0B" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="Líder Global" fill="#38BDF8" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 text-center">
              Haz clic en cualquier barra o tarjeta lateral para explorar la definición completa del marco conceptual PISA 2025.
            </p>
          </div>

          {/* Interactive Skill Cards Sidebar */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider px-1">
              Desglose de Competencias Evaluadas
            </h3>

            {FUTURE_SKILLS_DATA.map((item) => {
              const isSelected = selectedSkill.skill === item.skill;
              return (
                <div
                  key={item.skill}
                  onClick={() => setSelectedSkill(item)}
                  className={`glass-card p-4 rounded-2xl cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-slate-800/90 border-amber-500/50 shadow-lg shadow-amber-500/10' 
                      : 'glass-card-hover border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      OCDE: <strong className="text-slate-900 dark:text-white font-bold">{item.oecdScore} pts</strong>
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {item.skill}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400">Líder: <strong className="text-sky-300">{item.topSystemName}</strong></span>
                    <span className="text-sky-400 font-bold">{item.topSystemScore} pts</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* AI & Digital World Special Insight Banner */}
        <div className="mt-8 glass-card p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-indigo-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Hallazgo Clave PISA 2025</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Inteligencia Artificial</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Impacto de la IA Generativa en la Alfabetización Científica
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
                El <strong className="text-slate-900 dark:text-white">48.5%</strong> de los estudiantes de 15 años reportan usar herramientas de IA para sus tareas escolares. Los estudiantes que verifican y evalúan críticamente el contenido generado por IA obtuvieron en promedio <strong className="text-emerald-400">+32 puntos adicionales en ciencias</strong> frente a los consumidores pasivos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
