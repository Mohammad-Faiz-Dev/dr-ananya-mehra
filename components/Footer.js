import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-serif text-xl text-teal mb-3">Dr. Ananya Mehra</div>
          <p>Fictional cardiology clinic demo.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Illustrative hours</div>
          <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <div className="font-medium mb-3">Pages</div>
          <div className="space-y-1">
            <Link href="/about" className="block hover:text-teal">About</Link>
            <Link href="/treatments/heart-checkup" className="block hover:text-teal">Treatments</Link>
            <Link href="/book" className="block hover:text-teal">Book</Link>
            <Link href="/contact" className="block hover:text-teal">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-medium mb-3">Notice</div>
          <p className="text-xs opacity-70">This website is a portfolio demonstration. It is not a real medical practice and does not provide medical advice or emergency care.</p>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Dr. Ananya Mehra (demo). All rights reserved.</p>
        <p className="mt-1">Website by <a href="https://mohammadfaiz.dev" className="underline">Mohammad Faiz</a></p>
      </div>
    </footer>
  );
}
