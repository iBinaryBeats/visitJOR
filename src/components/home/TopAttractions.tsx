import React from 'react';
import AttractionCard from '../shared/AttractionCard';
import SectionHeading from '../shared/SectionHeading';
import { attractions } from '../../data/attractions';

const TopAttractions: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Top Attractions"
          subtitle="Discover Jordan's most iconic destinations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {attractions.slice(0, 6).map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopAttractions;