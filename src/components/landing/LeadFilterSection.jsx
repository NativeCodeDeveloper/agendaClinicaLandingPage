import { Check, X } from 'lucide-react';

export default function LeadFilterSection() {
  const yesItems = [
    {
      title: 'Atiendes pacientes a diario',
      desc: 'Tienes un flujo constante de pacientes y necesitas orden para no depender de WhatsApp y planillas.',
    },
    {
      title: 'Hoy llevas registros manuales',
      desc: 'Anotas en cuadernos, Excel o notas sueltas, y eso te hace perder tiempo y cometer errores.',
    },
    {
      title: 'Quieres centralizar todo en un solo lugar',
      desc: 'Agenda, pagos y fichas clínicas conectadas para trabajar más rápido y con menos fricción.',
    },
    {
      title: 'Buscas algo serio y escalable',
      desc: 'Una solución profesional que aguante crecimiento y te dé visibilidad del negocio.',
    },
  ];

  const noItems = [
    {
      title: 'Solo lo necesitas “por si acaso”',
      desc: 'Si aún no tienes agenda activa o pacientes recurrentes, quizá conviene partir con algo más simple.',
    },
    {
      title: 'Prefieres seguir con herramientas separadas',
      desc: 'Si te acomoda manejar agenda y pagos por canales distintos, este sistema no es prioridad todavía.',
    },
    {
      title: 'Buscas una plantilla genérica',
      desc: 'Si lo que quieres es una solución estándar sin ajustes, hay opciones más básicas que pueden servirte.',
    },
    {
      title: 'Tu negocio no trabaja con citas',
      desc: 'Este producto está pensado para servicios con agenda (clínicas, centros y profesionales).',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900">
            ¿Este sistema es para ti?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Queremos que tengas claridad desde el inicio. Si calzas con estos puntos, vas a sacarle mucho provecho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* YES */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-white/80 backdrop-blur shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Ideal si…</h3>
                  <p className="text-sm text-slate-600">Quieres ordenar agenda, pagos y fichas sin enredos.</p>
                </div>
              </div>

              <ul className="space-y-4">
                {yesItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 rounded-2xl border border-emerald-100/60 bg-emerald-50/40 p-4"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-xl bg-white ring-1 ring-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4.5 h-4.5 text-emerald-600" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NO */}
          <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-white/80 backdrop-blur shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 to-rose-600" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-rose-600" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Quizá no es necesario aún si…</h3>
                  <p className="text-sm text-slate-600">No pasa nada: a veces conviene ir paso a paso.</p>
                </div>
              </div>

              <ul className="space-y-4">
                {noItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 rounded-2xl border border-rose-100/60 bg-rose-50/40 p-4"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-xl bg-white ring-1 ring-rose-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4.5 h-4.5 text-rose-600" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
