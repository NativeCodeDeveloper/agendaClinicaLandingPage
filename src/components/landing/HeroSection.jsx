import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20 pb-20 lg:pt-0">
            {/* Background Gradients */}

            {/* Logo - Desktop */}
            <Image
                src="/ncode.png"
                alt="Decorative Overlay"
                width={200}
                height={200}
                className="absolute top-6 left-1/2 -translate-x-1/2 z-[5] pointer-events-none opacity-90 hidden md:block"
            />

            {/* Logo - Mobile */}
            <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-[5] block md:hidden pointer-events-none">
                <Image
                    src="/ncode.png"
                    alt="Logo NativeCode"
                    width={130}
                    height={130}
                    className="opacity-90"
                />
            </div>





            <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-900/20 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <div className=" flex-1 text-center lg:text-left pt-24 sm:pt-28">

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            ¿Tu agenda se desordena, te cancelan y el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">WhatsApp te consume?</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Automatiza agendamientos, pagos y fichas clínicas en un solo sistema.
                            Recupera el control de tu centro y olvídate del caos administrativo.
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

                            <p className="text-sm md:text-base text-gray-400 max-w-md">
                                Pago único para clínicas y centros estéticos.
                                Sin mensualidades abusivas, sin contratos engañosos.
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
                    <div className="flex-1 flex justify-center lg:justify-end -mt-10">

                        <Image
                          src="/pc.png"
                          alt="Hero Mockup"
                          width={1200}
                          height={700}
                          priority
                          className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto rounded-2xl shadow-2xl"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}
