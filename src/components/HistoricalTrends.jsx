import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2015', Singapur: 556, Japon: 538, OCDE: 493, Espana: 493, Mexico: 416 },
  { year: '2018', Singapur: 551, Japon: 529, OCDE: 489, Espana: 483, Mexico: 419 },
  { year: '2022', Singapur: 561, Japon: 547, OCDE: 485, Espana: 485, Mexico: 410 },
  { year: '2025', Singapur: 575, Japon: 536, OCDE: 487, Espana: 485, Mexico: 405 },
];

export default function HistoricalTrends({ activeDomain }) {
  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Tendencias Históricas (2015-2025)</h2>
        <div className="glass-card rounded-3xl p-6 h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis domain={[350, 600]} stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
              <Legend />
              <Line type="monotone" dataKey="Singapur" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="Japon" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="OCDE" stroke="#f59e0b" strokeWidth={3} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Espana" stroke="#ec4899" strokeWidth={2} />
              <Line type="monotone" dataKey="Mexico" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
