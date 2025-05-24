import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-light-blue to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-gray mb-6">Why Sydney Businesses Choose Integrate</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 15 years of experience in telecommunications infrastructure, we've helped hundreds 
              of Sydney businesses optimize their networks, reduce costs, and improve performance. Our 
              local expertise combined with cutting-edge technology delivers unmatched results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-blue mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-blue mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-blue mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Average Uptime</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary-blue mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>

            <Button className="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-blue transition-colors duration-200">
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
              alt="Modern data center infrastructure" 
              className="rounded-xl shadow-lg w-full" 
            />
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                alt="Professional network engineers team" 
                className="rounded-lg shadow-md w-full h-32 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200" 
                alt="Advanced networking equipment" 
                className="rounded-lg shadow-md w-full h-32 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
