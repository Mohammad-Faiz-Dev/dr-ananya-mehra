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
      <h1 className="text-4xl font-serif text-teal mb-4">{title}</h1>
      <p className="text-lg mb-8">A clear, evidence-based approach tailored to your condition. We explain every step so you feel informed and reassured.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-3">Overview</h2>
        <p>Comprehensive evaluation using modern diagnostics followed by a personalised treatment plan.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-3">What to expect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Detailed history and examination</li>
          <li>Relevant investigations (ECG, Echo, blood work)</li>
          <li>Clear explanation of findings</li>
          <li>Follow-up schedule</li>
        </ul>
      </section>

      <Link href="/book" className="inline-block bg-coral text-white px-8 py-4 rounded-full">Book this treatment</Link>
    </div>
  );
}
