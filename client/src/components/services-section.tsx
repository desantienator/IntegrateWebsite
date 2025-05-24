import { Button } from "@/components/ui/button";
import { Network, Settings, UserCheck, Shield, Check, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-gray mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive telecommunications solutions designed to optimize your infrastructure 
            and accelerate business growth across Sydney and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Service 1: Network Design */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-light-blue rounded-lg flex items-center justify-center mb-6">
              <Network className="text-2xl text-primary-blue" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-gray mb-4">Network Design & Implementation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Custom network architecture and infrastructure deployment tailored to your business requirements. 
              From planning to execution, we ensure optimal performance and scalability.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Enterprise-grade infrastructure</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Scalable network architecture</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>24/7 monitoring and support</span>
              </div>
            </div>
            <Button 
              variant="link" 
              className="text-primary-blue font-semibold hover:text-secondary-blue transition-colors duration-200 p-0"
            >
              Learn More <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>

          {/* Service 2: Managed Services */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-light-blue rounded-lg flex items-center justify-center mb-6">
              <Settings className="text-2xl text-primary-blue" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-gray mb-4">Managed Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive management of your telecommunications infrastructure, reducing costs and 
              increasing efficiency while you focus on your core business objectives.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Proactive monitoring & maintenance</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Cost reduction up to 40%</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>SLA-backed performance</span>
              </div>
            </div>
            <Button 
              variant="link" 
              className="text-primary-blue font-semibold hover:text-secondary-blue transition-colors duration-200 p-0"
            >
              Learn More <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>

          {/* Service 3: Consulting */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-light-blue rounded-lg flex items-center justify-center mb-6">
              <UserCheck className="text-2xl text-primary-blue" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-gray mb-4">Consulting & Support</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Expert guidance and strategic planning to optimize your telecommunications infrastructure. 
              Our consultants bring decades of industry experience to every project.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Strategic technology planning</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Infrastructure optimization</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="text-green-500 mr-2" size={16} />
                <span>Expert technical support</span>
              </div>
            </div>
            <Button 
              variant="link" 
              className="text-primary-blue font-semibold hover:text-secondary-blue transition-colors duration-200 p-0"
            >
              Learn More <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
        </div>

        {/* Additional Service: Security Solutions */}
        <div className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Advanced Security Solutions</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Protect your business with enterprise-grade cybersecurity measures, network security protocols, 
                and comprehensive threat monitoring designed for today's digital landscape.
              </p>
              <Button className="bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Get Security Assessment
              </Button>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Network security infrastructure" 
                className="rounded-lg shadow-lg mx-auto w-full max-w-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
