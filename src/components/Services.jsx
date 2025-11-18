import { Plane, Building2, Users, Baby, Hospital, Package } from 'lucide-react'

const services = [
  { icon: Plane, title: 'Luchthavenvervoer', desc: 'Vaste tarieven naar Schiphol, Eelde, Bremen en meer.' },
  { icon: Building2, title: 'Zakelijk vervoer', desc: 'Representatief en op factuur, volgens afspraak.' },
  { icon: Users, title: 'Groepsvervoer', desc: 'Busjes tot 8 personen, ook voor evenementen.' },
  { icon: Baby, title: 'Kinderzitjes', desc: 'Veilig vervoer met kinderzitjes op aanvraag.' },
  { icon: Hospital, title: 'Zorgvervoer', desc: 'Afspraken en behandelingen, met begeleiding indien nodig.' },
  { icon: Package, title: 'Koeriersdienst', desc: 'Snelle en discrete pakketbezorging.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Onze diensten</h2>
        <p className="mt-2 text-slate-600 text-center">Altijd een oplossing voor uw vervoer</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <Icon className="text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
