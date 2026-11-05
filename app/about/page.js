export default function AboutPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-6">About Dr. Ananya Mehra</h1>
      <p className="text-lg mb-8">Dr. Ananya Mehra is a senior cardiologist with over 18 years of experience in diagnosing and treating complex heart conditions. She completed her DM in Cardiology from a premier institution and has been associated with leading hospitals including Apollo and Max.</p>

      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Education & Training</h2>
        <ul className="space-y-2">
          <li>MBBS – AIIMS, New Delhi</li>
          <li>MD (Internal Medicine) – PGIMER, Chandigarh</li>
          <li>DM (Cardiology) – AIIMS, New Delhi</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-4">Memberships</h2>
        <p>Cardiological Society of India · Indian College of Cardiology</p>
      </section>

      <div className="bg-mint rounded-2xl p-8 text-center">
        <p className="font-serif text-xl">“I believe every patient deserves time, clarity and a plan they understand.”</p>
      </div>
    </div>
  );
}
