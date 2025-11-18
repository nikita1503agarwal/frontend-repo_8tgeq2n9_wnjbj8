const airports = [
  { from: 'Sneek', to: 'Schiphol', price: '€279' },
  { from: 'Sneek', to: 'Groningen Airport Eelde', price: '€149' },
  { from: 'Sneek', to: 'Bremen Airport', price: '€299' },
  { from: 'Sneek', to: 'Eindhoven Airport', price: '€329' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Vaste luchthaventarieven</h2>
        <p className="mt-2 text-slate-600 text-center">Transparant en vooraf duidelijk</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-3 bg-slate-100 text-xs font-semibold text-slate-600">
            <div className="px-4 py-3">Van</div>
            <div className="px-4 py-3">Naar</div>
            <div className="px-4 py-3 text-right">Prijs</div>
          </div>
          {airports.map((r, i) => (
            <div key={i} className="grid grid-cols-3 border-t border-slate-100">
              <div className="px-4 py-3">{r.from}</div>
              <div className="px-4 py-3">{r.to}</div>
              <div className="px-4 py-3 text-right font-semibold">{r.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
