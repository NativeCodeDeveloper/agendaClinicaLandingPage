"use client";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export default function Portada() {

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Efecto de marco luminoso tipo Antigravity */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(147,51,234,0.15)]"></div>
      </div>

      {/* Sistema de partículas orbitales */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Partículas animadas con CSS */}
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const delay = Math.random() * 20;
          const duration = 15 + Math.random() * 25;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const rotation = Math.random() * 360;

          return (
            <div
              key={i}
              className="absolute animate-orbit"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size * 4}px`,
                background: i % 3 === 0
                  ? 'linear-gradient(135deg, rgba(147,51,234,0.4), rgba(168,85,247,0.2))'
                  : i % 3 === 1
                    ? 'linear-gradient(135deg, rgba(79,70,229,0.4), rgba(99,102,241,0.2))'
                    : 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(139,92,246,0.2))',
                borderRadius: '2px',
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0.6,
              }}
            />
          );
        })}
      </div>

      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGgydjJoLTJ6bTUgMGgydjJoLTJ6bS01IDVoMnYyaC0yek00MSAxMzloMnYyaC0yek0zNiAxNDRoMnYyaC0yek00MSAxNDRoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        {/* Resplandores premium */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 via-purple-300/20 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/20 via-purple-200/15 to-transparent rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center px-6 lg:px-12 py-16">
        {/* Columna izquierda — texto */}
        <div className="space-y-8 text-center md:text-left">
          {/* Título principal */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Soluciones Empresariales</span>
              </div>
              <h1 className={`text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight ${michroma.className}`}>
                Automatiza
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent mt-2">
                  tu empresa
                </span>
              </h1>
            </div>
          </div>

          {/* Subtítulo destacado */}
          <div className="relative">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              Automatiza tus procesos y elimina
              <span className="text-purple-700"> errores, retrabajo y pérdidas de tiempo</span>
            </p>
          </div>

          {/* Descripción */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Desarrollamos sistemas a medida para automatizar procesos operativos, ventas, agenda, control y gestión, adaptados al flujo real de tu negocio — <span className="font-semibold text-gray-800">no plantillas genéricas</span>.
          </p>

          {/* Features con diseño premium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-purple-100/50 hover:border-purple-200 transition-colors shadow-sm">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Sistemas a la medida</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-purple-100/50 hover:border-purple-200 transition-colors shadow-sm">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Automatización completa</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-purple-100/50 hover:border-purple-200 transition-colors shadow-sm">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Integraciones nativas</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-purple-100/50 hover:border-purple-200 transition-colors shadow-sm">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Implementación guiada</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-purple-100/50 hover:border-purple-200 transition-colors shadow-sm col-span-1 sm:col-span-2">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Soporte directo continuo</span>
            </div>
          </div>
        </div>

        {/* Columna derecha — formulario premium */}
        <div className="relative group">
          {/* Efecto de brillo en hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 rounded-[28px] opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
          <div className="relative backdrop-blur-xl bg-white/95 border-2 border-purple-200/50 rounded-[24px] shadow-2xl shadow-purple-500/10 p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-lg shadow-purple-500/30 mb-3">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">Comienza ahora</h2>
              <p className="text-sm text-gray-600">Te contactamos en menos de 24 horas</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-xl border-2 border-purple-100 bg-white/80 px-4 py-3.5 focus:outline-none focus:border-purple-400 focus:bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm hover:border-purple-200"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="w-full rounded-xl border-2 border-purple-100 bg-white/80 px-4 py-3.5 focus:outline-none focus:border-purple-400 focus:bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm hover:border-purple-200"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email corporativo"
                  className="w-full rounded-xl border-2 border-purple-100 bg-white/80 px-4 py-3.5 focus:outline-none focus:border-purple-400 focus:bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm hover:border-purple-200"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full rounded-xl border-2 border-purple-100 bg-white/80 px-4 py-3.5 focus:outline-none focus:border-purple-400 focus:bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm hover:border-purple-200"
                />
              </div>

              <button className="w-full relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] group/btn">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  QUIERO AUTOMATIZAR
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto CSS para las animaciones */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}