import Link from 'next/link';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex lg:hidden z-40">
      <Link href="/contact" className="flex-1 flex items-center justify-center py-4 text-teal border-r text-sm">
        Contact
      </Link>
      <Link href="/book" className="flex-1 flex items-center justify-center py-4 bg-coral text-white text-sm">
        Book
      </Link>
    </div>
  );
}
