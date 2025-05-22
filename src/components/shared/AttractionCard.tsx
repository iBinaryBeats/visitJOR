import React, { useState } from 'react';
import { Attraction } from '../../types';
import { ChevronRight } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white font-heading">{attraction.name}</h3>
          <p className="text-sm text-white/80">{attraction.location}</p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-sand-100 text-primary-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="text-primary-500 font-medium flex items-center hover:text-primary-700 transition-colors group">
          Explore More 
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default AttractionCard;