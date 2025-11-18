import { useState } from 'react'

export default function BookingForm() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickup_address: '',
    dropoff_address: '',
    date: '',
    time: '',
    passengers: 1,
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, passengers: Number(form.passengers) })
      })
      if (!res.ok) throw new Error('Boeking verzenden mislukt')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Bedankt! We bevestigen uw rit zo snel mogelijk.' })
      setForm({ name: '', email: '', phone: '', pickup_address: '', dropoff_address: '', date: '', time: '', passengers: 1, notes: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Reserveer uw taxi</h2>
            <p className="mt-2 text-slate-600">Vul uw gegevens in en wij nemen direct contact op.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Naam" className="col-span-1 sm:col-span-2 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-mail (optioneel)" className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Telefoon" className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="passengers" value={form.passengers} onChange={handleChange} type="number" min="1" max="8" placeholder="Passagiers" className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="pickup_address" value={form.pickup_address} onChange={handleChange} required placeholder="Ophaaladres" className="col-span-1 sm:col-span-2 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="dropoff_address" value={form.dropoff_address} onChange={handleChange} required placeholder="Bestemmingsadres" className="col-span-1 sm:col-span-2 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="date" value={form.date} onChange={handleChange} type="date" required className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="time" value={form.time} onChange={handleChange} type="time" required className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Opmerkingen" className="col-span-1 sm:col-span-2 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

              <button disabled={loading} className="col-span-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-md">
                {loading ? 'Verzenden...' : 'Verzend aanvraag'}
              </button>

              {status && (
                <p className={`col-span-1 sm:col-span-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-semibold text-slate-900">Waarom kiezen voor ons?</h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• 24/7 beschikbaar in Sneek en regio</li>
              <li>• Vaste tarieven voor luchthavens</li>
              <li>• Veilige en comfortabele voertuigen</li>
              <li>• Vriendelijke, ervaren chauffeurs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
