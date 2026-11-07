import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';

export const metadata = {
  title: 'Dr. Ananya Mehra – Cardiologist | Demo',
  description: 'Fictional portfolio demo of a calm, trustworthy cardiology clinic website. Not a real medical practice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ivory">
        <div className="bg-teal text-white text-sm py-2 px-4 text-center">
          <span className="opacity-90">This is a fictional portfolio demo — not a real clinic.</span>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
