import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { threshold: 0.5 });
  
  return (
    <div 
      ref={headingRef} 
      className="text-center mb-8"
    >
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-3 font-heading transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-6'
        }`}
      >
        {title}
      </h2>
      <div className="flex justify-center items-center">
        <div 
          className={`w-16 h-1 bg-primary-500 mx-2 transition-all duration-700 delay-100 ${
            isInView 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-0'
          }`}
        ></div>
      </div>
      <p 
        className={`text-gray-600 mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;