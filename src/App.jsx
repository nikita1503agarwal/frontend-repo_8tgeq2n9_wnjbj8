import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import BookingForm from './components/BookingForm'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <BookingForm />
        <Reviews />

        <footer id="contact" className="bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg">Snel&Eenvoudig Taxi</h4>
              <p className="mt-2 text-slate-300 text-sm">Betrouwbaar taxivervoer in Sneek en omgeving. 24/7 bereikbaar.</p>
            </div>
            <div>
              <h5 className="font-semibold">Contact</h5>
              <ul className="mt-2 text-slate-300 text-sm space-y-1">
                <li>Telefoon: <a className="underline" href="tel:+31123456789">+31 12 345 6789</a></li>
                <li>E-mail: <a className="underline" href="mailto:info@sneltaxi.nl">info@sneltaxi.nl</a></li>
                <li>Adres: Centrum, Sneek</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Openingstijden</h5>
              <ul className="mt-2 text-slate-300 text-sm space-y-1">
                <li>Ma–Zo: 24 uur per dag</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">© {new Date().getFullYear()} Snel&Eenvoudig Taxi</div>
        </footer>
      </main>
    </div>
  )
}

export default App
