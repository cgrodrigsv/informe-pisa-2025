import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SCHOOL_LIFE_DATA } from '../data/pisa2025Data';
import { ShieldCheck, Smartphone, Bot } from 'lucide-react';

export default function SchoolLife() {
  const formattedData = [
    { subject: 'Uso de IA', 'El Salvador': 40, 'Singapur': 65, 'Promedio OCDE': 46 },
    { subject: 'Distracción Digital', 'El Salvador': 23, 'Singapur': 15, 'Promedio OCDE': 28 },
    { subject: 'Acoso Escolar', 'El Salvador': 25, 'Singapur': 12, 'Promedio OCDE': 20 },
    { subject: 'Prohibición Celulares', 'El Salvador': 71, 'Singapur': 85, 'Promedio OCDE': 49 }
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-medium mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Capítulo 4 • PISA 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Vida Escolar <span className="text-gradient-sky">y Entorno</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            Integración de la IA, el impacto de las políticas sobre dispositivos móviles y el clima disciplinario en el aula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[400px] w-full glass-card rounded-3xl p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="El Salvador" dataKey="El Salvador" stroke="#38BDF8" fill="#38BDF8" fillOpacity={0.5} />
                <Radar name="Singapur" dataKey="Singapur" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Radar name="Promedio OCDE" dataKey="Promedio OCDE" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <Bot className="w-5 h-5 text-sky-400" />
                <h4 className="font-bold text-slate-900 dark:text-white">Adopción de Inteligencia Artificial</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                El <span className="text-sky-400 font-bold">40%</span> de los estudiantes salvadoreños usa chatbots de IA al menos semanalmente (OCDE: 46%).
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <Smartphone className="w-5 h-5 text-rose-400" />
                <h4 className="font-bold text-slate-900 dark:text-white">Políticas de Dispositivos Móviles</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Hubo un aumento drástico: <span className="text-rose-400 font-bold">71%</span> asisten a escuelas que prohíben celulares, muy por encima del 49% de la OCDE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
