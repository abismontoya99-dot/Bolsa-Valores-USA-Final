import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo a pantalla completa */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611974717482-5da0027ad53b?q=80&w=2070&auto=format&fit=crop" 
          alt="Mercado de Valores" 
          className="w-full h-full object-cover brightness-[0.25] scale-110 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-amber-500/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">Acceso Exclusivo {new Date().getFullYear()}</span>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.85] filter drop-shadow-2xl">
          DOMINA EL <br/> <span className="text-gradient">DINERO REAL.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Aprende el sistema de <span className="text-white font-bold italic">Smart Money Concepts</span> que utilizan los grandes bancos de Wall Street.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://go.hotmart.com/B103361602G" 
            target="_blank" 
            className="group relative w-full sm:w-auto bg-amber-500 text-black font-black px-10 py-5 rounded-2xl text-xl transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.4)] uppercase"
          >
            Empieza tu Formación
            <div className="absolute -inset-1 bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <div className="flex flex-col items-center sm:items-start">
             <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
             </div>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Confianza de +5,000 Alumnos</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.1) translate(0,0); }
          50% { transform: scale(1.2) translate(-1%, -1%); }
          100% { transform: scale(1.1) translate(0,0); }
        }
        .animate-ken-burns {
          animation: kenburns 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;