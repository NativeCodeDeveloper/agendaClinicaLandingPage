import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-20 lg:pt-0">
            {/* Background Gradients */}

            <div className=" absolute bottom-0 left-1/4 w-[1000px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-cyan-900/20 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <div className=" flex-1 text-center lg:text-left pt-8 sm:pt-12 lg:pt-24">

                        {/* Logo - Responsive (Mobile & Desktop) */}
                        <div className='-mt-20 flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-5 mb-8 justify-center lg:justify-start relative px-4 sm:px-6 md:px-0'>
                            <h1 className='text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-michroma text-center md:text-left drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] order-2 md:order-1' style={{ fontFamily: 'var(--font-michroma)' }}>
                                AgendaClinica
                            </h1>
                            <Image
                                src="/orbe.png"
                                alt="Decorative Overlay"
                                width={450}
                                height={350}
                                className="opacity-90 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 md:-mt-6 lg:w-48 lg:h-48 lg:-mt-8 xl:w-56 xl:h-56 xl:-mt-10 order-1 md:order-2"
                            />
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            ¿Tu agenda se desordena, te cancelan y el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">WhatsApp te consume?</span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                            Automatiza <span className="text-purple-300">agendamientos</span>,
                            <span className="text-cyan-300"> fichas clínicas</span>, pagos y presupuestos en
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> una sola plataforma</span>.
                            Recupera el control y olvídate del caos administrativo.
                        </p>

                        <div className="mb-10 inline-flex flex-col items-center lg:items-start gap-2 rounded-2xl border border-purple-500/30 bg-white/5 px-6 py-4 backdrop-blur">
                            <span className="text-sm uppercase tracking-wide text-purple-400">
                                Valor implementación
                            </span>

                            <div className="flex items-end gap-2">
                                <span className="text-4xl md:text-5xl font-bold text-white">
                                    $250.000
                                </span>
                                <span className="text-base text-gray-400 mb-1">
                                    CLP
                                </span>
                            </div>

                            <p className="text-sm md:text-base text-gray-400 max-w-md text-center lg:text-left leading-relaxed">
                                Pago único para clínicas y centros estéticos con hasta 3 profesionales.
                                <span className="block mt-2 text-xs text-gray-500">
                                    El valor se ajusta según la cantidad de profesionales adicionales.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">



                        </div>

                        <div className="hidden md:block flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500">
                            <div className="text-base flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                <span>Implementación guiada</span>
                            </div>
                            <div className="text-base flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                <span>Capacitación incluida</span>
                            </div>
                            <div className=" text-base flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                <span>Soporte prioritario</span>
                            </div>
                        </div>
                    </div>

                    {/* Image/Mockup */}
                    <div className="hidden md:block flex-1 flex justify-center lg:justify-end mt-50">

                        <Image
                          src="/pc.png"
                          alt="Hero Mockup"
                          width={2200}
                          height={1000}
                          priority
                          className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl h-auto rounded-2xl shadow-2xl"
                        />

                    </div>



                    <div className="block md:hidden flex-1 flex justify-center lg:justify-end -mt-20">

                        <Image
                            src="/pc.png"
                            alt="Hero Mockup"
                            width={2200}
                            height={1000}
                            priority
                            className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl h-auto rounded-2xl shadow-2xl"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}
