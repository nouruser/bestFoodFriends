import React from 'react';
import '../assets/StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <div className="statistics-container">
      <h1> La plateforme Best Food Friend et ses partenaires ont pu de : </h1>
      <div className="picture-container">
        <img src="images/img-15.jpeg" alt="Une illustration" className="picture" />
      </div>

      <div className="statistics-items">
        <div className="statistics-item">
          <h3 className="statistics-number">8250</h3>
          <p className="statistics-label">Dons Assurés</p>
        </div>
        <div className="statistics-item">
          <h3 className="statistics-number">217</h3>
          <p className="statistics-label">Associations Bénéficiares</p>
        </div>
        <div className="statistics-item">
          <h3 className="statistics-number">72</h3>
          <p className="statistics-label">Donateurs Fidèles</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
