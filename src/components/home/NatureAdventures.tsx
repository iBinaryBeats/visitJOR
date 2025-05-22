import React, { useRef } from 'react';
import SectionHeading from '../shared/SectionHeading';
import { useInView } from '../../hooks/useInView';
import ImageSlider from '../shared/ImageSlider';

const natureImages = [
  {
    url: "https://images.pexels.com/photos/13458330/pexels-photo-13458330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "",

    title: "Wadi Rum"
  },
  {

    url: "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "",
    title: "Dead Sea"
  },
  {
    url: "https://images.pexels.com/photos/11042731/pexels-photo-11042731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "",
    title: "Perta "
  },
];

const adventures = [
  {
    title: "Desert Camping",
    description: "Experience the magic of sleeping under the stars in Wadi Rum, in traditional Bedouin camps.",
    icon: "🏜️"
  },
  {
    title: "Hiking & Trekking",
    description: "Explore Jordan's diverse landscapes on foot, from the Jordan Trail to the canyons of Wadi Mujib.",
    icon: "🥾"
  },
  {
    title: "Water Adventures",
    description: "Dive into the Red Sea's coral reefs in Aqaba, or float effortlessly in the mineral-rich Dead Sea.",
    icon: "🏊"
  },
  {
    title: "Wildlife Watching",
    description: "Spot rare birds and animals in Dana Biosphere Reserve, Jordan's largest nature reserve.",
    icon: "🦅"
  }
];

const NatureAdventures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Nature Adventures"
          subtitle="Explore Jordan's diverse and breathtaking landscapes"
        />

        <div
          ref={sectionRef}
          className={`mt-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">Unforgettable Natural Experiences</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                From the otherworldly landscapes of Wadi Rum to the mineral-rich waters of the Dead Sea,
                Jordan offers natural wonders that will take your breath away. Whether you're seeking
                adventure or tranquility, Jordan's diverse environments provide the perfect backdrop.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {adventures.map((adventure, index) => (
                  <div key={index} className="bg-sand-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl mb-3">{adventure.icon}</div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{adventure.title}</h4>
                    <p className="text-gray-600 text-sm">{adventure.description}</p>
                  </div>
                ))}
              </div>

              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium mt-8">
                Book An Adventure
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <ImageSlider images={natureImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureAdventures;