import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import StatisticsSection from '../components/StatisticsSection';
import VideoSection from '../components/VideoSection'

export default function About() {
  return (
    <>
      <StatisticsSection/>
      <VideoSection/>
      <Footer />
    </>
  );
}
