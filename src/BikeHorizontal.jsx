// BikeHorizontal.jsx

import React, { useState } from 'react';
import './BikeHorizontal.css';



function BikeHorizontal() {

  const speed = 0;

  const [headlightsOn, setHeadlightsOn] = useState(false);

  // Function to toggle headlights on/off
  const toggleHeadlights = () => {
    setHeadlightsOn(!headlightsOn);
  };

  return (
    <div className="bike-horizontal">

      <div className="bike-static-ui"></div>

      <div className="bike-battery"></div>
      <div className={headlightsOn ? 'bike-headlights-on' : 'bike-headlights-off'}></div>
      <div className="bike-headlights-button" onClick={toggleHeadlights}></div>
      <div className="bike-music-button"></div>
      
      <div className="bike-gear-indicator"></div>
      <div className="bike-speedometer"></div>
      <div className="bike-brakes"></div>
      <div className="bike-accelerate"></div>

    </div>
  );
}

export default BikeHorizontal;
