import { Phone, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">ST</div>
            <span className="text-xl font-bold tracking-tight">Snel&Eenvoudig Taxi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-blue-600">Dienstverlening</a>
            <a href="#fleet" className="hover:text-blue-600">Voertuigen</a>
            <a href="#pricing" className="hover:text-blue-600">Tarieven</a>
            <a href="#reviews" className="hover:text-blue-600">Beoordelingen</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+31123456789" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              <Phone size={18} /> Bel direct
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-slate-700">
              <a href="#services" className="py-2">Dienstverlening</a>
              <a href="#fleet" className="py-2">Voertuigen</a>
              <a href="#pricing" className="py-2">Tarieven</a>
              <a href="#reviews" className="py-2">Beoordelingen</a>
              <a href="#contact" className="py-2">Contact</a>
              <a href="tel:+31123456789" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
                <Phone size={18} /> Bel direct
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
