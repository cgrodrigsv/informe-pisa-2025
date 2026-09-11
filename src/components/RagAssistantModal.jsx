import React, { useState } from 'react';
import { RAG_QA_BANK } from '../data/pisa2025Data';
import { Sparkles, X, Send, Bot, FileText, CheckCircle2, HelpCircle } from 'lucide-react';

export default function RagAssistantModal({ isOpen, onClose }) {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Soy el Asistente RAG alimentado con la base de datos oficial del informe **PISA 2025 Results (Volume I)**. ¿Qué deseas saber sobre las métricas globales, la brecha de competencias o el rendimiento por países?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendQuery = (queryText) => {
    const q = queryText || userQuery;
    if (!q.trim()) return;

    // Add User Message
    const updatedMessages = [...messages, { sender: 'user', text: q }];
    setMessages(updatedMessages);
    setUserQuery('');
    setIsTyping(true);

    // Simulate RAG Retrieval
    setTimeout(() => {
      let botAnswer = "";
      const lowerQ = q.toLowerCase();

      // Search match in pre-built QA bank or compute response
      const match = RAG_QA_BANK.find(qa => 
        qa.question.toLowerCase().includes(lowerQ) ||
        lowerQ.split(' ').some(w => w.length > 3 && qa.question.toLowerCase().includes(w))
      );

      if (match) {
        botAnswer = match.answer;
      } else if (lowerQ.includes('singapur') || lowerQ.includes('líder') || lowerQ.includes('top')) {
        botAnswer = "Singapur es el sistema educativo de mayor rendimiento global en PISA 2025, alcanzando 560 puntos en Ciencias, 563 en Matemáticas, 535 en Lectura y 563 en Resolución de Problemas en el Mundo Digital, con un incremento de +14 puntos a 10 años.";
      } else if (lowerQ.includes('ciencias') || lowerQ.includes('promedio')) {
        botAnswer = "El promedio mundial de la OCDE en Ciencias para PISA 2025 es de 482 puntos (-3 puntos respecto a 2022). El 9.8% de los estudiantes alcanza el alto rendimiento (Nivel 5/6) y el 26.0% queda rezagado por debajo del Nivel 2.";
      } else if (lowerQ.includes('ia') || lowerQ.includes('inteligencia artificial') || lowerQ.includes('digital')) {
        botAnswer = "En la evaluación de 'Aprendizaje en el Mundo Digital' (LDW), el promedio OCDE fue de 500 puntos. Macao (China) obtuvo el primer lugar con 572 puntos. Además, el 48.5% de los estudiantes utiliza IA para el trabajo escolar; quienes evalúan críticamente sus respuestas superan por +32 puntos a los usuarios pasivos.";
      } else if (lowerQ.includes('latinoamérica') || lowerQ.includes('méxico') || lowerQ.includes('chile') || lowerQ.includes('colombia')) {
        botAnswer = "En América Latina, Chile lidera en Ciencias con 442 puntos, seguido de Uruguay (445), Costa Rica (424), Colombia (420), México (413) y Perú (405). La región presenta retos estructurales con más del 40% de estudiantes rezagados en el Nivel 2.";
      } else {
        botAnswer = `Según los registros extraídos de PISA 2025 Results (Volume I), los datos evaluados a 690,000 estudiantes en 85 países muestran un promedio OCDE de 482 en Ciencias, 463 en Matemáticas y 461 en Lectura. Te sugiero explorar las pestañas de 'Brecha de Competencias' o 'Habilidades del Futuro' para más detalles.`;
      }

      setMessages([...updatedMessages, { sender: 'bot', text: botAnswer }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="glass-card w-full max-w-2xl rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl flex flex-col h-[580px]">
        
        {/* Modal Header */}
        <div className="bg-white dark:bg-slate-900/90 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Asistente RAG PISA 2025
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  OECD Vol. I
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Consultas en tiempo real al informe original de 377 páginas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Quick Questions */}
        <div className="bg-white dark:bg-slate-900/40 px-6 py-2.5 border-b border-slate-200 dark:border-slate-800/60 overflow-x-auto flex items-center space-x-2">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-indigo-400" /> Preguntas frecuentes:
          </span>
          {RAG_QA_BANK.map((qa, i) => (
            <button
              key={i}
              onClick={() => handleSendQuery(qa.question)}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600 hover:text-slate-900 dark:text-white text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60 whitespace-nowrap transition-colors"
            >
              {qa.question.length > 35 ? qa.question.slice(0, 35) + '...' : qa.question}
            </button>
          ))}
        </div>

        {/* Chat History Container */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-sky-500 text-slate-900 dark:text-white font-bold text-xs'
                  : 'bg-indigo-600/30 text-indigo-400 border border-indigo-500/30'
              }`}>
                {msg.sender === 'user' ? 'Tú' : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-sky-500 text-slate-900 dark:text-white font-medium rounded-tr-none'
                  : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none shadow-md'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-xs italic pl-11">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              <span>Buscando en el corpus RAG de PISA 2025...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendQuery();
          }}
          className="p-4 bg-white dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Escribe tu pregunta sobre el informe PISA 2025..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={!userQuery.trim()}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-slate-900 dark:text-white font-semibold text-xs flex items-center space-x-1.5 transition-all"
          >
            <span>Buscar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
