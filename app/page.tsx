import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import LatestCars from "@/components/LatestCars";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function CarDealershipPage() {
  return (
    <>
      {/* Header */}
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* Search Bar */}
        
        {/* <SearchBar /> */}

        {/* Latest Vehicles */}
        <LatestCars />

        {/* Services */}
        <Services />

        {/* Testimonials */}
        <Testimonials />

        {/* About Us */}
        <AboutUs />

        {/* CTA Section */}
        <Cta />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
