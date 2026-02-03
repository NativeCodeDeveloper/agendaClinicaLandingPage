"use client";

export default function Seccion1() {
    return (
        <section className="relative w-full min-h-screen bg-white py-20 overflow-hidden">
            {/* Fondo con gradientes sutiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white">
                <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-purple-200/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-300/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                {/* Título principal */}
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 text-center mb-16 tracking-tight">
                    Cómo es el proceso
                </h2>

                {/* BLOQUE 1 - Contratación y Levantamiento */}
                <div className="mb-16 backdrop-blur-md bg-white/90 border border-purple-200 rounded-3xl p-8 md:p-10 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Imagen izquierda */}
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                            <img
                                src="/proceso-caos.jpg"
                                alt="Procesos manuales desordenados"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Contenido derecha */}
                        <div className="space-y-6">
                            <div>
                                <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-4">
                                    <span className="text-purple-700 text-sm font-mono uppercase tracking-wider">Paso 1</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                                    Contratación y levantamiento de requerimientos
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Muchos negocios aún gestionan pedidos, clientes y operaciones de forma manual.
                                    El primer paso es entender cómo funciona tu operación actual para transformarla en un sistema automatizado y centralizado.
                                </p>
                            </div>

                            {/* Pasos */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-purple-700 tracking-wide">Pasos:</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Diagnóstico de procesos actuales</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Identificación de tareas manuales y cuellos de botella</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Definición de módulos y funcionalidades</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Alcance técnico del proyecto</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BLOQUE 2 - Desarrollo e Implementación */}
                <div className="mb-16 backdrop-blur-md bg-white/90 border border-purple-200 rounded-3xl p-8 md:p-10 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Imagen izquierda */}
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                            <img
                                src="/proceso-dashboard.png"
                                alt="Dashboard de sistema automatizado"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Contenido derecha */}
                        <div className="space-y-6">
                            <div>
                                <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-4">
                                    <span className="text-purple-700 text-sm font-mono uppercase tracking-wider">Paso 2</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                                    Desarrollo e implementación del sistema
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Aquí transformamos procesos manuales en flujos digitales automatizados y conectados entre sí.
                                    No usamos soluciones genéricas: el sistema se adapta al negocio.
                                </p>
                            </div>

                            {/* Pasos */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-purple-700 tracking-wide">Pasos:</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Desarrollo de módulos personalizados</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span className="font-bold">Automatización de tareas repetitivas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span className="font-bold">Integración de procesos en una sola plataforma</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span className="font-bold">Ajustes específicos según operación real</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span className="font-bold">Entregas iterativas con revisión del cliente</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Implementación incluye */}
                            <div className="pt-4 border-t border-white/10 space-y-2">
                                <h4 className="text-lg font-semibold text-purple-800 tracking-wide">Implementación incluye:</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">✓</span>
                                        <span className="font-bold">Ajuste completo al flujo del negocio</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span className="font-bold">Parametrización final</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span className="font-bold">Migración de datos si aplica</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span className="font-bold">Pruebas funcionales completas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span className="font-bold">Capacitación al personal correspondiente</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BLOQUE 3 - Cierre y Postventa */}
                <div className="backdrop-blur-md bg-white/90 border border-purple-200 rounded-3xl p-8 md:p-10 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Imagen izquierda */}
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                            <img
                                src="/proceso-soporte.jpg"
                                alt="Soporte técnico y acompañamiento"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Contenido derecha */}
                        <div className="space-y-6">
                            <div>
                                <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-4">
                                    <span className="text-purple-700 text-sm font-mono uppercase tracking-wider">Paso 3</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
                                    Cierre y acompañamiento postventa
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    No se entrega y se abandona.
                                    Se acompaña la puesta en marcha para asegurar que todo funcione correctamente en producción.
                                </p>
                            </div>

                            {/* Pasos */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-purple-700 tracking-wide">Pasos:</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 mt-1">→</span>
                                        <span className="font-bold">Validación final en entorno real</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">→</span>
                                        <span className="font-bold">Puesta en marcha controlada</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">→</span>
                                        <span className="font-bold">Seguimiento de funcionamiento</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">→</span>
                                        <span className="font-bold">Correcciones menores de ajuste</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-400 mt-1">→</span>
                                        <span className="font-bold">Soporte inicial de operación</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos de animación */}
            <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
        </section>
    );
}
