'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = ['Treatment', 'Date', 'Time', 'Details', 'Confirm'];

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ treatment: 'Heart Check-up', date: '', time: '', name: '', phone: '', email: '' });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="pt-10 pb-24 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-2">Book Appointment</h1>
      <p className="mb-8 opacity-70">Takes less than a minute.</p>

      <div className="flex gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s} className={`flex-1 h-2 rounded-full ${i <= step ? 'bg-teal' : 'bg-slate-200'}`} />
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <label className="block">Choose treatment</label>
          <select value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} className="w-full border rounded-xl p-3">
            <option>Heart Check-up</option>
            <option>ECG & Echo</option>
            <option>Hypertension</option>
            <option>Heart Failure</option>
            <option>Preventive Cardiology</option>
          </select>
        </div>
      )}

      {step === 1 && (
        <div>
          <label className="block mb-2">Select date</label>
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full border rounded-xl p-3" />
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2">Select time</label>
          <div className="grid grid-cols-3 gap-2">
            {['9:00 AM', '10:30 AM', '12:00 PM', '3:00 PM', '4:30 PM', '5:30 PM'].map((t) => (
              <button key={t} onClick={() => setForm({ ...form, time: t })} className={`border rounded-xl p-3 ${form.time === t ? 'bg-teal text-white' : ''}`}>{t}</button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded-xl p-3" />
          <input placeholder="Phone (+91)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-xl p-3" />
          <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border rounded-xl p-3" />
        </div>
      )}

      {step === 4 && (
        <div className="bg-mint rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-serif text-teal mb-4">Appointment Confirmed</h2>
          <p>{form.treatment} on {form.date} at {form.time}</p>
          <p className="mt-2">We’ll WhatsApp the confirmation to {form.phone}</p>
          <Link href="/" className="inline-block mt-6 text-teal underline">Back to home</Link>
        </div>
      )}

      {step < 4 && (
        <div className="flex justify-between mt-8">
          <button onClick={prev} disabled={step === 0} className="px-6 py-3 rounded-full border disabled:opacity-40">Back</button>
          <button onClick={next} className="px-8 py-3 rounded-full bg-coral text-white">Continue</button>
        </div>
      )}
    </div>
  );
}
