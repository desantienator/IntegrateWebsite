import { Button } from "@/components/ui/button";
import { Calendar, Phone, CheckCircle } from "lucide-react";

export default function CtaSection() {
  const handleScheduleConsultation = () => {
    // In a real app, this would open a scheduling modal or redirect to a booking page
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCallNow = () => {
    window.location.href = "tel:+61298765432";
  };

  return (
    <section className="py-20 bg-gradient-to-r from-secondary-blue to-primary-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join hundreds of Sydney businesses that have already optimized their telecommunications 
          infrastructure with Integrate. Schedule your free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={handleScheduleConsultation}
            className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg"
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
            Call (02) 9876 5432
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-blue-100">
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
