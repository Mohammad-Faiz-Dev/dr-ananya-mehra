import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-serif text-xl text-teal mb-3">Dr. Ananya Mehra</div>
          <p>Expert heart care in South Delhi.</p>
          <p className="mt-4">12, Greater Kailash, New Delhi 110048</p>
        </div>
        <div>
          <div className="font-medium mb-3">Clinic Hours</div>
          <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <div className="font-medium mb-3">Affiliations</div>
          <p>Apollo Hospitals</p>
          <p>Max Healthcare</p>
        </div>
        <div>
          <div className="font-medium mb-3">Emergency</div>
          <p>+91 98765 43210</p>
          <p className="mt-4 text-xs opacity-70">Medical disclaimer: This website is for informational purposes only and does not constitute medical advice.</p>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Dr. Ananya Mehra. All rights reserved.</p>
        <p className="mt-1">Website by <a href="https://mohammadfaiz.dev" className="underline">Mohammad Faiz</a></p>
      </div>
    </footer>
  );
}
