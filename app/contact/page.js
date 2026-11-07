export default function ContactPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-4">Contact</h1>
      <p className="mb-8 text-slate/70">This is a fictional demo. No messages are sent from this form.</p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl mb-3">Demo location</h2>
          <p className="mb-4">Illustrative South Delhi area. Not a real clinic address.</p>
          <div className="mt-6 h-64 bg-mint rounded-2xl flex items-center justify-center border border-teal/20 relative overflow-hidden">
            <div className="absolute inset-4 border-2 border-dashed border-teal/30 rounded-xl" />
            <div className="text-center z-10">
              <div className="w-3 h-3 bg-coral rounded-full mx-auto mb-2" />
              <p className="text-sm text-teal">Schematic map · Demo only</p>
            </div>
          </div>
          <p className="mt-4 text-sm">Hours shown on the site are illustrative (Mon–Sat 9 AM – 6 PM).</p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="font-serif text-xl mb-4">Message form (demo)</h2>
          <p className="text-sm mb-4">Submitting this form does nothing. It is shown only to demonstrate the layout.</p>
          <div className="space-y-3 opacity-60 pointer-events-none">
            <input placeholder="Name" className="w-full border rounded-xl p-3" disabled />
            <input placeholder="Email" className="w-full border rounded-xl p-3" disabled />
            <textarea placeholder="Message" rows={4} className="w-full border rounded-xl p-3" disabled />
            <button className="bg-slate-300 text-slate-500 px-6 py-3 rounded-full" disabled>Not connected</button>
          </div>
          <p className="text-xs mt-4 text-slate/60">No contact details are configured for this demo.</p>
        </div>
      </div>
    </div>
  );
}
