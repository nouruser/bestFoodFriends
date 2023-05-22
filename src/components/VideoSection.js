import React from 'react';
import '../assets/VideoSection.css'; 

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2>Video Objective</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis
        pretium dui a maximus. Nulla vel mauris vel elit lobortis sagittis vel
        eu urna.
      </p>
      <div className="video-container">
        <iframe
          title="YouTube Video"
          src="videos/video_section.mp4"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
