import Image from 'next/image';
import { Calendar, Bell, CreditCard, FileText, Users, BarChart3, Check } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [

        {
            icon: <Bell className="w-6 h-6 text-purple-600" />,
            title: "Recordatorios Automáticos",
            description: "Avisos automaticos por correo previo a la atencion ."
        },
        {
            icon: <CreditCard className="w-6 h-6 text-purple-600" />,
            title: "Pagos Automaticos",
            description: "Asegura la cita con pagos previos. Control total de caja diaria."
        },
        {
            icon: <FileText className="w-6 h-6 text-purple-600" />,
            title: "Ficha Clínica Digital",
            description: "Historial, avances y evolución en un solo lugar seguro."
        },
        {
            icon: <Users className="w-6 h-6 text-purple-600" />,
            title: "Multi-Profesional",
            description: "Gestiona calendarios individuales para cada especialista o box."
        },

    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Absolute background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Todo lo que necesitas para <span className="text-purple-600">profesionalizar tu clínica</span>
                    </h2>
                    <p className="text-2xl text-gray-600">
                        Deja de usar Excel y cuadernos. Unifica toda la gestión administrativa y clínica en una plataforma moderna y fácil de usar.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* List of Benefits */}
                    <div className="grid grid-cols-1  gap-12 items-center">
                        {benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="relative flex flex-col gap-4 rounded-2xl p-7 cursor-pointer
                                         bg-gradient-to-br from-white to-purple-50
                                         border border-purple-100
                                         shadow-md hover:shadow-xl
                                         transition-all duration-300
                                         hover:-translate-y-1 hover:border-purple-300
                                         overflow-hidden group"
                            >
                                <span className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-300/40 transition-colors" />
                                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center
                                                shadow-inner
                                                group-hover:scale-110 group-hover:bg-purple-200
                                                transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Reference Image */}

                    <div>
                        <Image
                            src="/pago.png"
                            alt="Dashboard de gestión clínica"
                            width={600}
                            height={400}
                            className="mx-auto rounded-lg shadow-lg"
                        />

                    </div>


                </div>
            </div>
        </section>
    );
}
