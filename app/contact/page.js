export default function ContactPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-8">Contact</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="mb-4">12, Greater Kailash, New Delhi 110048</p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-4">Mon – Sat: 9:00 AM – 6:00 PM</p>
          <p className="mt-6 text-sm">Parking available in the basement.</p>
          <div className="mt-8 h-64 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">Map</div>
        </div>
        <form className="space-y-4">
          <input placeholder="Name" className="w-full border rounded-xl p-3" />
          <input placeholder="Phone" className="w-full border rounded-xl p-3" />
          <textarea placeholder="Message" rows={4} className="w-full border rounded-xl p-3" />
          <button className="bg-coral text-white px-8 py-3 rounded-full">Send</button>
        </form>
      </div>
    </div>
  );
}
