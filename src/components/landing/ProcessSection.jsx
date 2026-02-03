
export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico",
            desc: "Reunión de 15 min para entender tu situacion y evaluar si podemos ayudarte."
        },
        {
            number: "02",
            title: "Configuración",
            desc: "Cargamos tus servicios, profesionales y horarios. Dejamos todo listo."
        },
        {
            number: "03",
            title: "Capacitación",
            desc: "Entrenamos a tu equipo (recepción y especialistas) para usar el sistema."
        },
        {
            number: "04",
            title: "Implementacion",
            desc: "Empiezas a operar con soporte continuo y agenda automatizada."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold  text-gray-900 mb-4">
                        ¿Cómo empezamos?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-2xl">
                        No te entregamos un software vacío. Te acompañamos en todo el proceso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <span className="text-6xl  font-black text-gray-100 absolute -top-4 -right-4 select-none transition-colors group-hover:text-purple-50">
                                {step.number}
                            </span>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-6 text-2xl">
                                    {step.number}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
