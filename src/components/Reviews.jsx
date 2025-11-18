const reviews = [
  { name: 'Marieke (Sneek)', text: 'Super service! Chauffeur was keurig op tijd en zeer vriendelijk.' },
  { name: 'Johan (Leeuwarden)', text: 'Vlotte rit naar Schiphol, zeker aan te raden.' },
  { name: 'Anouk (Heerenveen)', text: 'Netjes, schoon en veilig. Boeken ging heel eenvoudig.' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Wat klanten zeggen</h2>
        <p className="mt-2 text-slate-600 text-center">Echte ervaringen van onze reizigers</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote key={i} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <p className="text-slate-700">“{r.text}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
