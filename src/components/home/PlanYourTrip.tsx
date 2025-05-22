import React, { useRef } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { useInView } from '../../hooks/useInView';
import { Calendar, Map, Compass, Users, Sun, Moon } from 'lucide-react';

const PlanYourTrip: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const planningSteps = [
    {
      icon: <Calendar className="h-8 w-8 text-primary-500" />,
      title: "Best Time to Visit",
      description: "Spring (March-May) and fall (September-November) offer the most pleasant temperatures for exploring."
    },
    {
      icon: <Map className="h-8 w-8 text-primary-500" />,
      title: "Getting Around",
      description: "Rent a car for flexibility, or join guided tours to make the most of your Jordan experience."
    },
    {
      icon: <Compass className="h-8 w-8 text-primary-500" />,
      title: "Suggested Itineraries",
      description: "From 3-day highlights to 10-day comprehensive tours, we have the perfect itinerary for you."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Travel Tips",
      description: "Jordan is safe and welcoming. Learn about local customs and practical advice for your trip."
    },
    {
      icon: <Sun className="h-8 w-8 text-primary-500" />,
      title: "Day Tours",
      description: "Join our expertly guided day tours to maximize your time at each destination."
    },
    {
      icon: <Moon className="h-8 w-8 text-primary-500" />,
      title: "Where to Stay",
      description: "From luxury resorts to authentic Bedouin camps, find the perfect accommodation."
    }
  ];

  return (
    <section id="plan-your-trip" className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Plan Your Trip" 
          subtitle="Everything you need to create your perfect Jordan adventure"
        />
        
        <div 
          ref={sectionRef}
          className={`mt-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary-600 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">Ready to Experience Jordan?</h3>
                <p className="text-primary-100 mb-8">
                  Let our travel experts create a personalized itinerary based on your interests, 
                  time, and budget. Your unforgettable Jordan adventure is just a click away.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary-300 w-full"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary-300 w-full"
                    />
                  </div>
                  <textarea 
                    placeholder="Tell us about your dream Jordan trip..." 
                    rows={4}
                    className="px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary-300 w-full"
                  ></textarea>
                  <button 
                    type="submit"
                    className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md transition-colors duration-300 font-medium"
                  >
                    Start Planning
                  </button>
                </form>
              </div>
              <div 
                className="hidden lg:block bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;