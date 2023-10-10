// PhoneHorizontal.jsx

import React, { useState, useEffect } from 'react';
import './PhoneHorizontal.css';

function PhoneHorizontal({speed, distance}) {
  return (
    <div className="phone-horizontal">

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
          <p>50 ft <span className="arrow">→</span></p>
        </div>
        

    </div>
  );
}

export default PhoneHorizontal;
