// PhoneVertical.jsx

import React from 'react';
import './PhoneVertical.css';

function PhoneVertical({distance}) {

  const progressPercentage = (distance / 6).toFixed(2);

  // Prepare a style to rotate the progress spinner image
  const rotationStyle = {
    transform: `rotate(${progressPercentage*2.5+10}deg)`,
  };

  return (
    <div className="phone-vertical">

        <div className="greeting">
          <p>Good Morning, Kyle!</p>
        </div>
        <div className="goal-container">
          <div className="goal-progess-spinner" style={rotationStyle}></div>
          <div className="goal-progess-cutout"></div>
          <div className="progress-text">
            <p>You have cycled {progressPercentage}% of your goal</p>
          </div>
        </div>
        <div className="weekly-summary"></div>
        <div className="previous-trip"></div>

    </div>
  );
}

export default PhoneVertical;
