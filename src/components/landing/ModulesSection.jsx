import {
  CalendarDays,
  Users,
  CreditCard,
  MessageSquare,
  Briefcase,
  BarChart,
} from 'lucide-react';

export default function ModulesSection() {
  const modules = [
    {
      icon: <CalendarDays className="w-5 h-5 text-indigo-600" />,
      title: 'Agenda y calendario',
      desc:
        'Tus pacientes agendan online en segundos y tú ves todo en tiempo real. Define horarios, duración por servicio y disponibilidad sin caos.',
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: 'Gestión de pacientes',
      desc:
        'Cada paciente queda registrado automáticamente con su historial de datos y atención. Centraliza contactos, notas y preferencias en un solo lugar.',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
      title: 'Pagos automatizados',
      desc:
        'Cobra por adelantado o en cuotas y reduce las ausencias. Integra pagos online (por ejemplo, Mercado Pago) y mantén el control de cada transacción.',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
      title: 'Recordatorios automáticos',
      desc:
        'Envía recordatorios por correo para disminuir citas canceladas por olvidos. Horas antes se enviaran recordatorios automáticos a tus pacientes.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
      title: 'Administración de agenda',
      desc:
        'Bloquea días completos, crea pausas, reprograma citas y agrega reservas manuales cuando sea necesario, sin perder el orden.',
    },
    {
      icon: <BarChart className="w-5 h-5 text-indigo-600" />,
      title: 'Historial y reportes',
      desc:
        'Visualiza compras y agendamientos online con trazabilidad completa de pagos, servicios y fechas para tomar mejores decisiones.',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide ring-1 ring-indigo-100">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
            Módulos del sistema
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Una suite completa de herramientas diseñada para ordenar tu operación,
            mejorar la experiencia del paciente y escalar tu clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/80 backdrop-blur border border-slate-200/70 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                {mod.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                {mod.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
