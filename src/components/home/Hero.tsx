import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      // Animate the title
      titleRef.current.classList.add('animate-fadeInUp');
      
      // Animate the subtitle with a delay
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('animate-fadeInUp');
        }
      }, 500);
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('destinations');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 transition-all duration-1000 ease-out font-heading"
        >
          Welcome to Jordan
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white mb-8 opacity-0 transition-all duration-1000 ease-out delay-300 max-w-3xl mx-auto"
        >
          The Hidden Jewel of the Middle East
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 font-medium text-lg">
          Explore Destinations
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={36} />
      </div>
    </section>
  );
};

export default Hero;