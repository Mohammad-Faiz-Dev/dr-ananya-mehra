export default function AboutPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-teal/70 mb-2">Portfolio demo</p>
      <h1 className="text-4xl font-serif text-teal mb-6">About Dr. Ananya Mehra</h1>
      <p className="text-lg mb-8">
        Dr. Ananya Mehra is a fictional cardiologist created for this portfolio demonstration. The site shows how a private heart-care practice might present itself online with calm, clear communication.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-serif mb-4">Approach</h2>
        <p>Consultations are framed around listening first, explaining findings in plain language, and agreeing a next step the patient understands. No real credentials, hospital affiliations or outcome statistics are claimed here.</p>
      </section>

      <div className="bg-mint rounded-2xl p-8">
        <p className="font-serif text-xl text-teal">“Every patient deserves time, clarity and a plan they understand.”</p>
        <p className="text-sm mt-2 opacity-70">Illustrative quote for the demo.</p>
      </div>
    </div>
  );
}
