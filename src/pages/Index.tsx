
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import Gallery from "@/components/Gallery";
import Promotions from "@/components/Promotions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Spaces />
        <Gallery />
        <Promotions />
        <Contact />
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
};

export default Index;
