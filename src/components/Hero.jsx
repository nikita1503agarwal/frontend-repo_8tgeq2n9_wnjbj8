import { Phone, Car, Clock, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Taxi nodig in Sneek en omgeving?
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            24/7 betrouwbaar, snel en betaalbaar vervoer. Luchthavens, zakelijk vervoer, groepsritten en meer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold shadow-sm">
              <Car size={18} /> Reserveer rit
            </a>
            <a href="tel:+31123456789" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md text-base font-semibold">
              <Phone size={18} /> Bel direct
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <div>
                <dt className="font-semibold">Gecertificeerde chauffeurs</dt>
                <dd className="text-sm text-slate-600">Professioneel en klantvriendelijk</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" />
              <div>
                <dt className="font-semibold">Altijd op tijd</dt>
                <dd className="text-sm text-slate-600">Realtime planning en tracking</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_35%)]"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-white text-center">
                <p className="text-sm uppercase tracking-widest/relaxed text-white/75">Sneek • Heerenveen • Leeuwarden</p>
                <p className="mt-2 text-2xl font-bold">Snel & comfortabel vervoer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
