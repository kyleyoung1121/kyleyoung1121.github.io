// PhoneHorizontal.jsx

import React, { useState, useEffect } from 'react';
import './PhoneHorizontal.css';

function PhoneHorizontal({speed, distance, setDistance}) {
  const [mapOffset, setMapOffset] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('00:00'); // Initial value
  
   // Update the time of day every second
   useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to format the current time as HH:MM
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer + 1) % 3600); // 3600 seconds = 1 hour
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval;

    // Start the interval when the component mounts
    if (speed > 0) {
      interval = setInterval(() => {
        
        // Update the distance based on speed (distance += speed / 10, assuming 0.1-second intervals)
        const newDistance = distance + speed / 5;
        
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
  
  // Calculate the timer display in HH:MM format
  const timerDisplay = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`;

  
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
