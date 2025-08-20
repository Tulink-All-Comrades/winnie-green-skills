import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <SkillsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">
            © 2024 Winnie Wambugu. All rights reserved. | Professional Accounting & Writing Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
