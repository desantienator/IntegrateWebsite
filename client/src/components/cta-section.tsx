import { Button } from "@/components/ui/button";
import { Calendar, Phone, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function CtaSection() {
  const [, setLocation] = useLocation();

  const handleScheduleConsultation = () => {
    setLocation("/contact");
  };

  const handleCallNow = () => {
    window.location.href = "tel:1300205585";
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          Join hundreds of Sydney businesses that have already optimized their telecommunications 
          infrastructure with Integrate. Schedule your free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleScheduleConsultation}
            className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-blue transition-all duration-200 shadow-lg"
          >
            <Calendar className="mr-2" size={20} />
            Schedule Free Consultation
          </Button>
          <Button 
            onClick={handleCallNow}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200 bg-transparent"
          >
            <Phone className="mr-2" size={20} />
            Call 1300 205 585
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-gray-300">
          <div className="flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            <span>Free Network Assessment</span>
          </div>
          <div className="flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            <span>No Obligation Consultation</span>
          </div>
          <div className="flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            <span>Same-Day Response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
