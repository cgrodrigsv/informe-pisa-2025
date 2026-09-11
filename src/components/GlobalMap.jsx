import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { COUNTRY_EXPLORER_DATA } from '../data/pisa2025Data';

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
          
          const getProp = () => {
            if (activeDomain === 'math') return 'math';
            if (activeDomain === 'reading') return 'reading';
            if (activeDomain === 'digitalWorld') return 'digital';
            return 'science';
          };
          
          const mapData = COUNTRY_EXPLORER_DATA.map(c => {
            let eName = c.name;
            if (c.name === 'Estados Unidos') eName = 'United States';
            if (c.name === 'Reino Unido') eName = 'United Kingdom';
            if (c.name === 'Japón') eName = 'Japan';
            if (c.name === 'Canadá') eName = 'Canada';
            if (c.name === 'Corea del Sur') eName = 'Korea';
            if (c.name === 'Brasil') eName = 'Brazil';
            if (c.name === 'Perú') eName = 'Peru';
            if (c.name === 'España') eName = 'Spain';
            if (c.name === 'México') eName = 'Mexico';
            if (c.name === 'B-S-J-Z (China)') eName = 'China';
            if (c.name === 'Singapur') eName = 'Singapore';
            return { name: eName, value: c[getProp()] };
          });
          
          // Add El Salvador explicitly just in case
          if (!mapData.find(m => m.name === 'El Salvador')) {
            mapData.push({ name: 'El Salvador', value: 385 });
          }

          const option = {
            tooltip: {
              trigger: 'item',
              showDelay: 0,
              transitionDuration: 0.2,
              formatter: function (params) {
                if (isNaN(params.value)) return params.name + ': Sin datos';
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
                data: mapData
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
    <section className="py-12 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Mapa de Rendimiento Global</h2>
        <div className="glass-card rounded-3xl p-4 h-[600px] w-full overflow-hidden keep-colors">
          <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
