export default function BlogPage() {
  const posts = [
    { title: 'Understanding high blood pressure', cat: 'Hypertension', date: '12 Oct 2025' },
    { title: 'What to expect during an Echo', cat: 'Diagnostics', date: '28 Sep 2025' },
    { title: 'Walking for a healthier heart', cat: 'Lifestyle', date: '15 Sep 2025' },
  ];

  return (
    <div className="pt-10 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-teal mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((p) => (
          <div key={p.title} className="border rounded-2xl p-6">
            <div className="text-sm text-teal">{p.cat}</div>
            <h3 className="font-serif text-xl mt-1">{p.title}</h3>
            <div className="text-sm opacity-60 mt-2">{p.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
