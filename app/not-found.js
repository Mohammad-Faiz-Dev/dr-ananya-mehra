import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-serif text-teal mb-4">Page not found</h1>
      <p className="mb-8">Let’s get you back to something helpful.</p>
      <Link href="/" className="bg-coral text-white px-8 py-3 rounded-full">Go home</Link>
    </div>
  );
}
