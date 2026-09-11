import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { name: 'China', x: -0.2, y: 550 },
  { name: 'Singapur', x: 0.5, y: 575 },
  { name: 'Japon', x: 0.3, y: 536 },
  { name: 'Estonia', x: 0.1, y: 526 },
  { name: 'Finlandia', x: 0.2, y: 511 },
  { name: 'Espana', x: -0.1, y: 485 },
  { name: 'Mexico', x: -0.8, y: 410 },
  { name: 'Brasil', x: -0.9, y: 400 },
  { name: 'Colombia', x: -1.0, y: 390 },
  { name: 'Peru', x: -1.1, y: 385 },
  { name: 'Vietnam', x: -0.5, y: 460 },
  { name: 'Turquia', x: -0.6, y: 450 }
];

export default function EquityScatter({ activeDomain }) {
  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Equidad Educativa: Impacto Socioeconómico (ESCS) vs Rendimiento</h2>
        <div className="glass-card rounded-3xl p-6 h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" dataKey="x" name="Índice ESCS" stroke="#94a3b8" domain={[-1.5, 1]} tickCount={6} label={{ value: 'Índice Socioeconómico', position: 'insideBottom', offset: -10, fill: '#94a3b8' }} />
              <YAxis type="number" dataKey="y" name="Rendimiento" stroke="#94a3b8" domain={[350, 600]} label={{ value: 'Puntaje', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
              <Scatter name="Paises" data={data} fill="#38bdf8" />
              <ReferenceLine y={487} stroke="#f59e0b" strokeDasharray="3 3" label={{ position: 'right', value: 'Promedio OCDE', fill: '#f59e0b' }} />
              <ReferenceLine x={0} stroke="#f59e0b" strokeDasharray="3 3" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
