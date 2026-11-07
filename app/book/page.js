'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const treatments = ['Heart Check-up', 'ECG & Echo', 'Hypertension', 'Heart Failure', 'Preventive Cardiology', 'Second Opinion'];

const demoSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '3:00 PM', '4:30 PM', '5:30 PM'];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v) {
  const digits = v.replace(/[\s\-+()]/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

export default function BookPage() {
  const [form, setForm] = useState({
    treatment: 'Heart Check-up',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const firstErrorRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim() || !isValidEmail(form.email)) e.email = 'Please enter a valid email.';
    if (!form.phone.trim() || !isValidPhone(form.phone)) e.phone = 'Please enter a valid phone number.';
    if (!form.treatment) e.treatment = 'Please choose a consultation type.';
    if (!form.date) e.date = 'Please select a date.';
    else if (form.date < today) e.date = 'Please choose a future date.';
    if (!form.time) e.time = 'Please select a time slot.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleDateChange = (date) => {
    setForm((f) => ({ ...f, date, time: '' }));
    setErrors((e) => ({ ...e, date: undefined, time: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) {
      setTimeout(() => firstErrorRef.current?.focus(), 50);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="pt-10 pb-24 px-4 max-w-2xl mx-auto">
        <div className="bg-mint rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-serif text-teal mb-4">Demo request preview</h1>
          <p className="mb-2"><strong>No appointment has been booked or sent.</strong></p>
          <p className="text-sm opacity-80 mb-6">
            This is a frontend preview only. Nothing was stored, emailed, or shared with a clinic.
          </p>
          <div className="text-left bg-white rounded-xl p-4 text-sm space-y-1 mb-6">
            <div><strong>Type:</strong> {form.treatment}</div>
            <div><strong>Date:</strong> {form.date}</div>
            <div><strong>Time:</strong> {form.time}</div>
            <div><strong>Name:</strong> {form.name}</div>
            <div><strong>Email:</strong> {form.email}</div>
            <div><strong>Phone:</strong> {form.phone}</div>
          </div>
          <Link href="/" className="text-teal underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-24 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-2">Book a consultation</h1>
      <p className="mb-2 opacity-70">Preview a booking request. Illustrative slots only.</p>
      <p className="text-sm text-slate/60 mb-8">This form does not create a real appointment.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="treatment" className="block mb-1 font-medium">Consultation type</label>
          <select
            id="treatment"
            value={form.treatment}
            onChange={(e) => setForm({ ...form, treatment: e.target.value })}
            className="w-full border rounded-xl p-3"
          >
            {treatments.map((t) => <option key={t}>{t}</option>)}
          </select>
          {errors.treatment && <p className="text-coral text-sm mt-1">{errors.treatment}</p>}
        </div>

        <div>
          <label htmlFor="date" className="block mb-1 font-medium">Preferred date</label>
          <input
            id="date"
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full border rounded-xl p-3"
            ref={errors.date ? firstErrorRef : null}
          />
          {errors.date && <p className="text-coral text-sm mt-1">{errors.date}</p>}
        </div>

        {form.date && (
          <div>
            <label className="block mb-2 font-medium">Available demo slots</label>
            <p className="text-xs opacity-60 mb-2">Illustrative times for Mon–Sat. Not a live calendar.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {demoSlots.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setForm({ ...form, time: t })}
                  className={`border rounded-xl p-3 text-sm ${form.time === t ? 'bg-teal text-white' : 'hover:bg-mint'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            {errors.time && <p className="text-coral text-sm mt-1">{errors.time}</p>}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Full name</label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-xl p-3"
            ref={errors.name ? firstErrorRef : null}
          />
          {errors.name && <p className="text-coral text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded-xl p-3"
            ref={errors.email ? firstErrorRef : null}
          />
          {errors.email && <p className="text-coral text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 or international"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border rounded-xl p-3"
            ref={errors.phone ? firstErrorRef : null}
          />
          {errors.phone && <p className="text-coral text-sm mt-1">{errors.phone}</p>}
        </div>

        {form.date && form.time && form.name && (
          <div className="bg-white border rounded-xl p-4 text-sm">
            <div className="font-medium mb-2">Review</div>
            <p>{form.treatment} on {form.date} at {form.time}</p>
            <p>{form.name} · {form.email} · {form.phone}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-coral text-white py-4 rounded-full font-medium disabled:opacity-60"
        >
          {submitting ? 'Preparing preview…' : 'Preview booking request'}
        </button>
      </form>
    </div>
  );
}
