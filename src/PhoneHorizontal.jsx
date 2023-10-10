// PhoneHorizontal.jsx

import React, { useState, useEffect } from 'react';
import './PhoneHorizontal.css';

function PhoneHorizontal({speed, distance, setDistance}) {
  const [mapOffset, setMapOffset] = useState(0);

  useEffect(() => {
    let interval;

    // Start the interval when the component mounts
    if (speed > 0) {
      interval = setInterval(() => {
        // Update the distance based on speed (distance += speed / 10, assuming 0.1-second intervals)
        const newDistance = distance + speed / 1;
        
        const clampedDistance = newDistance > 190 ? 0 : newDistance;

        // Update the map offset based on the new distance
        setMapOffset(clampedDistance);

        // Update the distance state
        setDistance(clampedDistance);
      }, 100); // 100 milliseconds (0.1 seconds) interval

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [speed, distance, setDistance]);
  
  const mapBackgroundStyle = {
    backgroundPositionY: `${-260+mapOffset}px`,
  };
  
  return (
    <div className="phone-horizontal" style={mapBackgroundStyle}>

      <div className="notifications-bar"> 12:41</div>

      <div className="blue-dot"></div>
        <div className="eta-box">
          <p>12 min</p>
        </div>
        <div className="duration-box">
          <p>06:12</p>
        </div>
        <div className="speed-box">
          <p>{speed} mph</p>
        </div>
        <div className="directions-box">
          <p>{380-(2*distance)}ft <span className="arrow">→</span></p>
        </div>
        

    </div>
  );
}

export default PhoneHorizontal;
