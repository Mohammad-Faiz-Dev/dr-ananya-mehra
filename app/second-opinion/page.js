import Link from 'next/link';

export default function SecondOpinionPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-4">Second Opinion</h1>
      <p className="text-lg mb-6">
        An illustrative service where a patient can share existing reports and receive a structured review of the current plan.
      </p>
      <p className="mb-6">
        In a real clinic this would involve secure upload of documents and a scheduled consultation. This demo does not collect or store any medical information.
      </p>
      <div className="bg-mint rounded-2xl p-6 mb-8">
        <h2 className="font-serif text-xl mb-2">What a second opinion typically covers</h2>
        <ul className="list-disc pl-5 space-y-1 text-base">
          <li>Review of previous investigations and discharge summaries</li>
          <li>Discussion of the current treatment plan</li>
          <li>Clarification of options and questions</li>
        </ul>
      </div>
      <p className="text-sm text-slate/70 mb-6">This page is part of a fictional portfolio demo and does not offer medical advice.</p>
      <Link href="/book" className="inline-block bg-coral text-white px-8 py-3 rounded-full">Preview a booking request</Link>
    </div>
  );
}
