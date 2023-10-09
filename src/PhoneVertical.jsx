// PhoneVertical.jsx

import React from 'react';
import './PhoneVertical.css';

function PhoneVertical() {
  return (
    <div className="PhoneVertical">

        <div className="greeting">
          <p>Good Morning, Kyle!</p>
        </div>
        <div className="goal-container">
          <div className="graphic-placeholder">
            {/* Placeholder for your graphic */}
          </div>
          <div className="progress-text">
            <p>You have cycled 66% of your goal</p>
          </div>
        </div>
        <div className="graphic-placeholder">
          {/* Placeholder for your graphic */}
        </div>

    </div>
  );
}

export default PhoneVertical;
