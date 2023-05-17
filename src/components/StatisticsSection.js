import React from 'react';
import './StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <div className="statistics-container">
      
        <h1> Plateforme Best Food Friend et ses partenaires en 2023 ont faits: <br/> </h1>
        <div className='statistics-items'>
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
      {/* <div className="statistics-item">
        <h3 className="statistics-number">2</h3>
        <p className="statistics-label">Écoles</p>
      </div> */}
        </div>
    </div>
  );
};

export default StatisticsSection;