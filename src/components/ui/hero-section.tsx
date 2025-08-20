import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import winnieHeadshot from "@/assets/winnie-headshot.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-primary flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Winnie Wambugu
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary-foreground/90 font-light">
                Professional Accountant & Academic Writer
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                Experienced accountant with expertise in financial analysis, academic writing, 
                and transcription services. Committed to delivering accurate, timely, and 
                professional results for all your business needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant transition-smooth"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Available for consultation</span>
              </div>
              <div className="h-4 w-px bg-primary-foreground/30"></div>
              <div className="text-primary-foreground/80 text-sm">
                Quick response guaranteed
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110"></div>
              <img 
                src={winnieHeadshot}
                alt="Winnie Wambugu - Professional Accountant"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-primary-foreground/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}