import React, { useEffect, useRef } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { useInView } from '../../hooks/useInView';

const CulturalHeritage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Cultural Heritage"
          subtitle="Experience Jordan's rich history and traditions"
        />

        <div
          ref={sectionRef}
          className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div>
            <img
              src="https://images.pexels.com/photos/15997182/pexels-photo-15997182/free-photo-of-an-ancient-ruins-in-jordan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Jerash Roman Ruins"
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 font-heading">A Journey Through Time</h3>
            <p className="text-gray-600 leading-relaxed">
              Jordan's cultural tapestry is woven with threads from numerous civilizations that have left their mark
              on this ancient land. From the Nabataeans who carved Petra, to the Romans who built Jerash, to the
              Islamic and Ottoman influences that shaped modern Jordan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Explore ancient amphitheaters, wander through preserved Roman streets, marvel at intricate mosaics,
              and connect with Bedouin traditions that have remained unchanged for centuries.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h4 className="font-bold text-lg text-gray-800 mb-2">43</h4>
                <p className="text-sm text-gray-600">UNESCO World Heritage Sites</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h4 className="font-bold text-lg text-gray-800 mb-2">2000+</h4>
                <p className="text-sm text-gray-600">Years of History</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h4 className="font-bold text-lg text-gray-800 mb-2">12</h4>
                <p className="text-sm text-gray-600">Ancient Civilizations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h4 className="font-bold text-lg text-gray-800 mb-2">150+</h4>
                <p className="text-sm text-gray-600">Archaeological Sites</p>
              </div>
            </div>

            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium mt-4">
              Discover Historical Sites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;