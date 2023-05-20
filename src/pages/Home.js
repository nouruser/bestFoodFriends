import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import StatisticsSection from '../components/StatisticsSection';
import VideoSection from '../components/VideoSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <StatisticsSection/>
      <VideoSection/>
      <Footer />
    </>
  );
}

export default Home;
