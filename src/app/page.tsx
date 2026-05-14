import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Archive from "@/components/Archive";
import MothersDiary from "@/components/MothersDiary";
import TravelGuide from "@/components/TravelGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-ocean-shallow selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Archive />
        <MothersDiary />
        <TravelGuide />
      </main>
      <Footer />
    </div>
  );
}
