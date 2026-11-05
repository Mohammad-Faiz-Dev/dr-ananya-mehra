import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex lg:hidden z-40">
      <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 py-4 text-teal border-r">
        <Phone size={18} /> Call
      </a>
      <a href="https://wa.me/919876543210" className="flex-1 flex items-center justify-center gap-2 py-4 text-teal border-r">
        <MessageCircle size={18} /> WhatsApp
      </a>
      <Link href="/book" className="flex-1 flex items-center justify-center gap-2 py-4 bg-coral text-white">
        Book
      </Link>
    </div>
  );
}
