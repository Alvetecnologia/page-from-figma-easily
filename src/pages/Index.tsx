
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="solucoes">
        <Features />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
