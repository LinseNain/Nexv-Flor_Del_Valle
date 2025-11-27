'use client';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(222,230,213)] font-sans">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}