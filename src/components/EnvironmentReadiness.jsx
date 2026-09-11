import React from 'react';
import { ENVIRONMENT_DATA } from '../data/pisa2025Data';
import { Leaf, Globe2, Wind } from 'lucide-react';

export default function EnvironmentReadiness() {
  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium mb-2">
            <Leaf className="w-3.5 h-3.5" />
            <span>Capítulo 5 • PISA 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Preparación <span className="text-emerald-400">Ambiental</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Conocimientos en ciencias ambientales y actitudes hacia la protección del medio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENVIRONMENT_DATA.filter(d => d.name === 'El Salvador' || d.name === 'Promedio OCDE').map((data, idx) => (
            <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe2 className="w-32 h-32 text-emerald-500" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {data.name}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Nivel Básico (Ciencia Ambiental)</span>
                    <span className="text-white font-bold">{data.readiness}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: `${data.readiness}%`}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Creencia en Acción Colectiva</span>
                    <span className="text-white font-bold">{data.collectiveAction}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-sky-500 h-2 rounded-full" style={{width: `${data.collectiveAction}%`}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Interés Trabajo Verde (Futuro)</span>
                    <span className="text-white font-bold">{data.futureJob}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: `${data.futureJob}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-center bg-gradient-to-br from-emerald-900/20 to-slate-900">
             <Wind className="w-8 h-8 text-emerald-400 mb-4" />
             <h4 className="text-lg font-bold text-white mb-2">Brecha de Conocimiento</h4>
             <p className="text-sm text-slate-400">
               Aunque el <strong className="text-white">75%</strong> de los estudiantes salvadoreños quiere proteger el medio ambiente en su futuro trabajo, solo el <strong className="text-rose-400">35%</strong> alcanzó la competencia científica ambiental básica.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
