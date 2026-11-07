import Link from 'next/link';

export default function TreatmentPage({ params }) {
  const titles = {
    'heart-checkup': 'Heart Check-up',
    'ecg-echo': 'ECG & Echo',
    'hypertension': 'Hypertension Management',
    'heart-failure': 'Heart Failure Care',
    'preventive': 'Preventive Cardiology',
  };
  const title = titles[params.slug] || 'Treatment';

  return (
    <div className="pt-10 pb-20 px-4 max-w-3xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-teal/70 mb-2">Illustrative page</p>
      <h1 className="text-4xl font-serif text-teal mb-4">{title}</h1>
      <p className="text-lg mb-6">A clear overview of what a consultation typically involves. This page does not provide personalised medical advice or promise outcomes.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-3">What is usually discussed</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your symptoms and relevant history</li>
          <li>Which investigations may be useful</li>
          <li>How findings are explained</li>
          <li>Possible next steps</li>
        </ul>
      </section>

      <div className="bg-mint rounded-2xl p-6 text-sm mb-8">
        This is a fictional demo. It is not for emergencies and does not replace a real consultation.
      </div>

      <Link href="/book" className="inline-block bg-coral text-white px-8 py-4 rounded-full">Preview a booking request</Link>
    </div>
  );
}
