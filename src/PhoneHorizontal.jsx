// PhoneHorizontal.jsx

import React from 'react';
import './PhoneHorizontal.css';

function PhoneHorizontal() {
  return (
    <div className="phone-horizontal">

      <div className="blue-dot"></div>
        <div className="eta-box">
          <p>12 min</p>
        </div>
        <div className="duration-box">
          <p>06:12</p>
        </div>
        <div className="speed-box">
          <p>11 mph</p>
        </div>
        <div className="directions-box">
          <p>50 ft <span className="arrow">→</span></p>
        </div>
        <div className="notifications-bar"> 12:41</div>

    </div>
  );
}

export default PhoneHorizontal;
