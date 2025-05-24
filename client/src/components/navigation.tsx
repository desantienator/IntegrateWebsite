import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Integrat3f Logo Size Transparent.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleScheduleConsultation = () => {
    // In a real app, this would open a scheduling modal or redirect to a booking page
    scrollToSection("contact");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? "bg-white/98 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="Integrate Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-neutral-gray hover:text-primary-blue transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="text-neutral-gray hover:text-primary-blue transition-colors duration-200"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-neutral-gray hover:text-primary-blue transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-neutral-gray hover:text-primary-blue transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleScheduleConsultation}
              className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-secondary-blue transition-colors duration-200"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-gray hover:text-primary-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              onClick={() => scrollToSection("services")} 
              className="block px-3 py-2 text-neutral-gray hover:text-primary-blue w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="block px-3 py-2 text-neutral-gray hover:text-primary-blue w-full text-left"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block px-3 py-2 text-neutral-gray hover:text-primary-blue w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block px-3 py-2 text-neutral-gray hover:text-primary-blue w-full text-left"
            >
              Contact
            </button>
            <Button 
              onClick={handleScheduleConsultation}
              className="w-full mt-4 bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-secondary-blue transition-colors duration-200"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
