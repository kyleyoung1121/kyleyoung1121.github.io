// BikeHorizontal.jsx

import React, { useState } from 'react';
import './BikeHorizontal.css';

function BikeHorizontal({speed, setSpeed, distance}) {

  // Keep track of the headlights & music state
  const [headlightsOn, setHeadlightsOn] = useState(false);
  const [musicOn, setmusicOn] = useState(false);

  // Toggle headlights on/off
  const toggleHeadlights = () => {
    setHeadlightsOn(!headlightsOn);
  };

  // Toggle music on/off
  const toggleMusic = () => {
    setmusicOn(!musicOn);
  };

  // Set speed when accelerator pressed
  const handleAcceleratorPress = () => {
    setSpeed(5);
  };

  // Set speed when accelerator released
  const handleAcceleratorRelease = () => {
    setSpeed(0);
  };
  
  return (
    <div className="bike-horizontal">

      <div className="bike-static-ui"></div>

      <div className="bike-battery"></div>
      <div className={headlightsOn ? 'bike-headlights-on' : 'bike-headlights-off'}></div>
      <div className="bike-headlights-button" onClick={toggleHeadlights}></div>
      <div className="bike-music-button" onClick={toggleMusic}></div>
      <div className={musicOn ? "bike-music-text" : "bike-music-text-hidden"}>
        <p>*Music Playing*</p>
      </div>
      
      <div className="bike-gear-indicator"></div>
      <div className={speed==5 ? 'bike-speedometer-5' : 'bike-speedometer-0'}></div>
      <div className="bike-brakes"></div>
      <div
        className="bike-accelerate"
        onMouseDown={handleAcceleratorPress}
        onMouseUp={handleAcceleratorRelease}
      ></div>

    </div>
  );
}

export default BikeHorizontal;
