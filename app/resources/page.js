export default function ResourcesPage() {
  return (
    <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-6">Patient Resources</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-6">
          <h3 className="font-serif text-xl mb-2">Preparing for your visit</h3>
          <p className="text-sm">Downloadable checklist of what to bring and how to prepare.</p>
        </div>
        <div className="border rounded-2xl p-6">
          <h3 className="font-serif text-xl mb-2">Insurance accepted</h3>
          <p className="text-sm">Most major insurers including CGHS, ECHS and private TPAs.</p>
        </div>
        <div className="border rounded-2xl p-6">
          <h3 className="font-serif text-xl mb-2">Heart-healthy diet guide</h3>
          <p className="text-sm">Simple Indian recipes and tips from our clinic.</p>
        </div>
      </div>
    </div>
  );
}
