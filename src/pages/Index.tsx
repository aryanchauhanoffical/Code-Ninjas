
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CourseSection />
      <StatsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
