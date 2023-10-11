// PhoneHorizontal.jsx

import React, { useState, useEffect } from 'react';
import './PhoneHorizontal.css';

function PhoneHorizontal({speed, distance, setDistance}) {
  
  // Keep track of the map's y positioning, the time elapsed timer, and the time of day
  const [mapOffset, setMapOffset] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('00:00'); // Start at 00:00
  
  // Helper function to format the current time as HH:MM
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Update the time of day every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update the time elapsed
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer + 1) % 3600); // 3600 seconds = 1 hour
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update the distance every 100ms if accelerator pressed
  useEffect(() => {
    let interval;

    if (speed > 0) {
      interval = setInterval(() => {
        
        // Update the distance
        const newDistance = distance + speed / 5;
        
        // Force distance to fit inside certain bounds (causes simulation to repeat after ~400ft)
        const clampedDistance = newDistance > 190 ? 0 : newDistance;

        // Update the map offset
        setMapOffset(clampedDistance);

        // Update the distance
        setDistance(clampedDistance);

      }, 100); // 100 milliseconds

      return () => clearInterval(interval);
    }
  }, [speed, distance, setDistance]);
  
  // Get the timer display in HH:MM format
  const timerDisplay = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`;

  // Prepare a style that will move the background image according to distance
  const mapBackgroundStyle = {
    backgroundPositionY: `${-260+mapOffset}px`,
  };
  
  return (
    <div className="phone-horizontal" style={mapBackgroundStyle}>

      <div className="notifications-bar">{"  " + timeOfDay}</div>

      <div className="blue-dot"></div>
        <div className="eta-box">
          <p>12 min</p>
        </div>
        <div className="duration-box">
          <p>{timerDisplay}</p>
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
