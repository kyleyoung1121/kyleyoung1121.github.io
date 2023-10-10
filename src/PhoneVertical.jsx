// PhoneVertical.jsx

import React from 'react';
import './PhoneVertical.css';

function PhoneVertical({distance}) {
  return (
    <div className="phone-vertical">

        <div className="greeting">
          <p>Good Morning, Kyle!</p>
        </div>
        <div className="goal-container">
          <div className="graphic-placeholder">
            {/* Placeholder for your graphic */}
          </div>
          <div className="progress-text">
            <p>You have cycled {distance/100}% of your goal</p>
          </div>
        </div>
        <div className="graphic-placeholder">
          {/* Placeholder for your graphic */}
        </div>

    </div>
  );
}

export default PhoneVertical;
