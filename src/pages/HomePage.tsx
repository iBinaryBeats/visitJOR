import React from 'react';
import Hero from '../components/home/Hero';
import TopAttractions from '../components/home/TopAttractions';
import CulturalHeritage from '../components/home/CulturalHeritage';
import NatureAdventures from '../components/home/NatureAdventures';
import PlanYourTrip from '../components/home/PlanYourTrip';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TopAttractions />
      <CulturalHeritage />
      <NatureAdventures />
      <PlanYourTrip />
    </main>
  );
};

export default HomePage;