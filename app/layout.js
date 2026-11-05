import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';

export const metadata = {
  title: 'Dr. Ananya Mehra – Cardiologist | South Delhi',
  description: 'Expert heart care with time to listen. MBBS, MD, DM Cardiology. 18+ years experience. Book an appointment at the clinic in South Delhi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="bg-teal text-white text-sm py-2 px-4 text-center">
          Emergency: +91 98765 43210 &nbsp;|&nbsp; Clinic Hours: Mon–Sat 9 AM – 6 PM &nbsp;|&nbsp; 
          <a href="https://wa.me/919876543210" className="underline">Book via WhatsApp</a>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
