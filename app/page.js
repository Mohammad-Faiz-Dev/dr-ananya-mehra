import Link from 'next/link';
import { Heart, Activity, Stethoscope, Shield, Clock, Users } from 'lucide-react';

const treatments = [
  { icon: Heart, title: 'Heart Check-up', desc: 'Comprehensive assessment of heart health and risk factors.', href: '/treatments/heart-checkup' },
  { icon: Activity, title: 'ECG & Echo', desc: 'Advanced imaging and electrical studies of the heart.', href: '/treatments/ecg-echo' },
  { icon: Stethoscope, title: 'Hypertension', desc: 'Personalised management of high blood pressure.', href: '/treatments/hypertension' },
  { icon: Shield, title: 'Heart Failure', desc: 'Evidence-based care to improve quality of life.', href: '/treatments/heart-failure' },
  { icon: Clock, title: 'Preventive Cardiology', desc: 'Early detection and lifestyle guidance to protect your heart.', href: '/treatments/preventive' },
  { icon: Users, title: 'Second Opinion', desc: 'Review of existing reports and treatment plans.', href: '/treatments/heart-checkup' },
];

export default function Home() {
  return (
    <div>
      <section className="bg-mint py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-teal leading-tight">Expert heart care, with time to listen.</h1>
            <p className="mt-4 text-lg">Dr. Ananya Mehra · 18+ years of experience in cardiology</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="bg-coral text-white px-8 py-4 rounded-full font-medium">Book Appointment</Link>
              <a href="tel:+919876543210" className="border border-teal text-teal px-8 py-4 rounded-full">Call Now</a>
            </div>
            <div className="mt-8 flex gap-6 text-sm">
              <div><strong>10,000+</strong> patients</div>
              <div><strong>4.9★</strong> Google</div>
              <div>Apollo & Max affiliated</div>
            </div>
          </div>
          <div className="bg-slate-200 rounded-3xl h-96 flex items-center justify-center text-slate-500">
            Doctor photo
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Treatments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <Link key={t.title} href={t.href} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <t.icon className="text-teal mb-4" size={32} />
              <h3 className="text-xl font-serif mb-2">{t.title}</h3>
              <p className="text-slate-600 text-base">{t.desc}</p>
              <span className="text-teal text-sm mt-3 inline-block">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div><div className="font-serif text-xl">18+ Years</div><p className="text-sm mt-1">Experience</p></div>
          <div><div className="font-serif text-xl">Modern Diagnostics</div><p className="text-sm mt-1">ECG, Echo, Stress Test</p></div>
          <div><div className="font-serif text-xl">Short Wait Times</div><p className="text-sm mt-1">Respect for your time</p></div>
          <div><div className="font-serif text-xl">Follow-up Care</div><p className="text-sm mt-1">Ongoing support</p></div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-10">Your first visit</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div><div className="text-teal font-serif text-2xl">1</div><p>Book online or by phone</p></div>
          <div><div className="text-teal font-serif text-2xl">2</div><p>Bring previous reports</p></div>
          <div><div className="text-teal font-serif text-2xl">3</div><p>Consultation & plan</p></div>
        </div>
      </section>

      <section className="py-16 bg-teal text-white text-center px-4">
        <h2 className="text-3xl font-serif">Ready to take care of your heart?</h2>
        <Link href="/book" className="inline-block mt-6 bg-coral px-8 py-4 rounded-full">Book Appointment</Link>
      </section>
    </div>
  );
}
