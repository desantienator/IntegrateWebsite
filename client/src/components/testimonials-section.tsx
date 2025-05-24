import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-gray mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped Sydney businesses transform their telecommunications infrastructure 
            and achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-light-gray rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "Integrate transformed our entire network infrastructure in just 6 weeks. Our productivity 
              increased by 45% and we've eliminated all downtime issues. Their managed services team 
              is incredibly responsive and professional."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face" 
                alt="Michael Chen" 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <div className="font-semibold text-neutral-gray">Michael Chen</div>
                <div className="text-sm text-gray-600">CEO, TechForward Solutions</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-light-gray rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6 leading-relaxed">
              "The consulting expertise from Integrate helped us save over $200,000 annually on our 
              telecommunications costs while significantly improving our network performance. 
              Outstanding service and results."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face" 
                alt="Sarah Mitchell" 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <div className="font-semibold text-neutral-gray">Sarah Mitchell</div>
                <div className="text-sm text-gray-600">IT Director, Global Finance Group</div>
              </div>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-primary-blue rounded-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Featured Case Study</h3>
            <h4 className="text-lg font-semibold mb-3">Manufacturing Giant Network Overhaul</h4>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Complete infrastructure redesign for a 500+ employee manufacturing company, resulting in 
              99.9% uptime and 60% cost reduction over 2 years.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-xs text-blue-200">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-xs text-blue-200">Cost Reduction</div>
              </div>
            </div>
            <button className="text-white underline hover:text-blue-200 transition-colors duration-200">
              Read Full Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
