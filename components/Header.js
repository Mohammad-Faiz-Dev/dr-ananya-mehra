'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const treatments = [
  { name: 'Heart Check-up', href: '/treatments/heart-checkup' },
  { name: 'ECG & Echo', href: '/treatments/ecg-echo' },
  { name: 'Hypertension', href: '/treatments/hypertension' },
  { name: 'Heart Failure', href: '/treatments/heart-failure' },
  { name: 'Preventive Cardiology', href: '/treatments/preventive' },
  { name: 'Second Opinion', href: '/second-opinion' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl text-teal">Dr. Ananya Mehra</span>
          <span className="text-xs text-slate-500">Cardiology · Demo</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-base">
          <Link href="/" className="hover:text-teal">Home</Link>
          <Link href="/about" className="hover:text-teal">About</Link>
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className="flex items-center gap-1 hover:text-teal" aria-expanded={drop}>Treatments <ChevronDown size={16} /></button>
            {drop && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-56 border">
                {treatments.map((t) => (
                  <Link key={t.name} href={t.href} className="block px-4 py-2 hover:bg-mint">{t.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/resources" className="hover:text-teal">Patient Resources</Link>
          <Link href="/blog" className="hover:text-teal">Blog</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
        </nav>

        <Link href="/book" className="hidden lg:inline-block bg-coral text-white px-6 py-3 rounded-full font-medium hover:opacity-90">
          Book a consultation
        </Link>

        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={28} /></button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-ivory z-50 p-6 lg:hidden" role="dialog">
          <button className="absolute top-6 right-6 p-2" onClick={() => setOpen(false)} aria-label="Close menu"><X size={28} /></button>
          <nav className="mt-16 flex flex-col gap-6 text-xl">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            {treatments.map((t) => (
              <Link key={t.name} href={t.href} onClick={() => setOpen(false)}>{t.name}</Link>
            ))}
            <Link href="/resources" onClick={() => setOpen(false)}>Patient Resources</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/book" onClick={() => setOpen(false)} className="mt-4 bg-coral text-white px-6 py-3 rounded-full text-center">Book a consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
