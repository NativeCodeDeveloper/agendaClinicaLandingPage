import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20 pb-20 lg:pt-0">
            {/* Background Gradients */}

    <Image
      src="/ncode.png"
      alt="Decorative Overlay"
      width={300}
      height={300}
      className="absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-90 hidden md:block"
    />



            <Image
                src="/ncode.png"
                alt="Decorative Overlay"
                width={150}
                height={150}
                className="absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-90 block md:hidden"
            />





            <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-900/20 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">
                                Sistema Operativo para Clínicas
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            ¿Tu agenda se desordena, te cancelan y el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">WhatsApp te consume?</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Automatiza agendamientos, pagos y fichas clínicas en un solo sistema.
                            Recupera el control de tu centro y olvídate del caos administrativo.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">



                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500">
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
                    <div className="flex-1 flex justify-center lg:justify-end">

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
