import Link from 'next/link';
import { Heart, Activity, Stethoscope, Shield, Clock, Users } from 'lucide-react';

const treatments = [
  { icon: Heart, title: 'Heart Check-up', desc: 'A structured review of symptoms, history and risk factors.', href: '/treatments/heart-checkup' },
  { icon: Activity, title: 'ECG & Echo', desc: 'Illustrative description of common cardiac investigations.', href: '/treatments/ecg-echo' },
  { icon: Stethoscope, title: 'Hypertension', desc: 'How high blood pressure is typically assessed and discussed.', href: '/treatments/hypertension' },
  { icon: Shield, title: 'Heart Failure', desc: 'An overview of how care pathways are explained to patients.', href: '/treatments/heart-failure' },
  { icon: Clock, title: 'Preventive Cardiology', desc: 'Lifestyle and screening conversations for long-term heart health.', href: '/treatments/preventive' },
  { icon: Users, title: 'Second Opinion', desc: 'A calm review of existing reports and treatment plans.', href: '/second-opinion' },
];

export default function Home() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal/70 mb-3">Portfolio demo · Fictional clinic</p>
            <h1 className="text-4xl md:text-5xl font-serif text-teal leading-tight">Expert heart care, with time to listen.</h1>
            <p className="mt-5 text-lg text-slate/80 max-w-md">
              A calm, human-centred consultation experience. This site demonstrates how a private cardiology practice could present itself online.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="bg-coral text-white px-8 py-4 rounded-full font-medium hover:opacity-90">Book a consultation</Link>
              <Link href="/treatments/heart-checkup" className="border border-teal text-teal px-8 py-4 rounded-full hover:bg-mint">Explore treatments</Link>
            </div>
            <p className="mt-6 text-sm text-slate/60">Not for emergencies. This is not a real medical practice.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] max-h-[520px] rounded-3xl overflow-hidden bg-mint shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Professional portrait of a woman in a white coat, used as an illustrative image for this fictional doctor demo. Not a real practising physician."
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">Treatments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <Link key={t.title} href={t.href} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition">
              <t.icon className="text-teal mb-4" size={28} />
              <h3 className="text-xl font-serif mb-2">{t.title}</h3>
              <p className="text-slate-600 text-base">{t.desc}</p>
              <span className="text-teal text-sm mt-3 inline-block">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8">Your first visit</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div><div className="text-teal font-serif text-2xl">1</div><p className="mt-2">Request a demo appointment online</p></div>
          <div><div className="text-teal font-serif text-2xl">2</div><p className="mt-2">Bring any previous reports you have</p></div>
          <div><div className="text-teal font-serif text-2xl">3</div><p className="mt-2">Discuss findings and next steps</p></div>
        </div>
      </section>

      <section className="py-16 bg-teal text-white text-center px-4">
        <h2 className="text-3xl font-serif">Ready to see how booking works?</h2>
        <Link href="/book" className="inline-block mt-6 bg-coral px-8 py-4 rounded-full">Preview a booking request</Link>
      </section>
    </div>
  );
}
