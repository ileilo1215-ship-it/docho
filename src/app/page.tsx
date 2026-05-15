import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Archive from "@/components/Archive";
import MothersDiary from "@/components/MothersDiary";
import TravelGuide from "@/components/TravelGuide";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-ocean-shallow selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Decorative Line Motif */}
        <div className="flex justify-center h-24">
           <div className="w-px h-full bg-gradient-to-b from-transparent via-line to-line" />
        </div>
        
        <Archive />
 
        <div className="flex justify-center h-24">
           <div className="w-px h-full bg-line" />
        </div>
 
        <MothersDiary />
 
        <div className="flex justify-center h-24">
           <div className="w-px h-full bg-line" />
        </div>
 
        <TravelGuide />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
