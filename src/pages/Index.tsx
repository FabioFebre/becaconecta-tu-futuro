import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BecasSection from "@/components/BecasSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import CompetitionSection from "@/components/CompetitionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InstitutionsSection from "@/components/InstitutionsSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BecasSection />
        <FeaturesSection />
        <BeneficiariesSection />
        <TestimonialsSection />
        <InstitutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
