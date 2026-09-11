import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function GlobalMap({ activeDomain }) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    let chartInstance = null;
    
    const initChart = async () => {
      if (chartRef.current) {
        chartInstance = echarts.init(chartRef.current);
        
        try {
          const response = await fetch('https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json');
          const worldJson = await response.json();
          echarts.registerMap('world', worldJson);
          
          const option = {
            tooltip: {
              trigger: 'item',
              showDelay: 0,
              transitionDuration: 0.2,
              formatter: function (params) {
                const value = (params.value + '').split('.');
                const valueStr = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, ',');
                return params.seriesName + '<br/>' + params.name + ': ' + valueStr;
              }
            },
            visualMap: {
              left: 'right',
              min: 300,
              max: 600,
              inRange: {
                color: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6']
              },
              text: ['Alto', 'Bajo'],
              calculable: true,
              textStyle: { color: '#94a3b8' }
            },
            series: [
              {
                name: 'Puntaje',
                type: 'map',
                roam: true,
                map: 'world',
                emphasis: { label: { show: true } },
                data: [
                  { name: 'China', value: 590 },
                  { name: 'Singapore', value: 575 },
                  { name: 'Japan', value: 536 },
                  { name: 'Korea', value: 527 },
                  { name: 'Estonia', value: 526 },
                  { name: 'Canada', value: 515 },
                  { name: 'Finland', value: 511 },
                  { name: 'United Kingdom', value: 508 },
                  { name: 'United States', value: 504 },
                  { name: 'Spain', value: 485 },
                  { name: 'Mexico', value: 410 },
                  { name: 'Brazil', value: 400 },
                  { name: 'Argentina', value: 395 },
                  { name: 'Colombia', value: 390 },
                  { name: 'Peru', value: 385 }
                ]
              }
            ]
          };
          
          chartInstance.setOption(option);
        } catch (error) {
          console.error("Failed to load map data", error);
        }
      }
    };
    
    initChart();
    
    const handleResize = () => { if (chartInstance) chartInstance.resize(); };
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (chartInstance) chartInstance.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [activeDomain]);

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Mapa de Rendimiento Global</h2>
        <div className="glass-card rounded-3xl p-4 h-[600px] w-full overflow-hidden keep-colors">
          <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
