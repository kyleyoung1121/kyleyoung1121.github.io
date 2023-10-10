// BikeHorizontal.jsx

import React from 'react';
import './BikeHorizontal.css';

let isMouseOverAccelerator = false;
let isMouseDownAccelerator = false;

function handleAcceleratorMouseEnter() {
  isMouseOverAccelerator = true;
  if (!isMouseDownAccelerator) {
    // Apply hover effect here
    const acceleratorButton = document.querySelector('.bike-accelerate-hover');
    acceleratorButton.style.opacity = '0.85'; // Adjust the opacity as needed
  }
}

function handleAcceleratorMouseLeave() {
  isMouseOverAccelerator = false;
  if (!isMouseDownAccelerator) {
    // Remove hover effect here
    const acceleratorButton = document.querySelector('.bike-accelerate-hover');
    acceleratorButton.style.opacity = '1'; // Restore the original opacity
  }
}

function handleAcceleratorMouseDown() {
  isMouseDownAccelerator = true;
  if (isMouseOverAccelerator) {
    // While holding down and the mouse is over the button, apply the temporary opacity change
    const acceleratorButton = document.querySelector('.bike-accelerate-hover');
    acceleratorButton.style.opacity = '0.75'; // Adjust the opacity as needed
    // Add any other desired styles here
  }
}

function handleAcceleratorMouseUp() {
  isMouseDownAccelerator = false;
  if (isMouseOverAccelerator) {
    // While holding down and the mouse is over the button, restore the original opacity
    const acceleratorButton = document.querySelector('.bike-accelerate-hover');
    acceleratorButton.style.opacity = '0.85'; // Restore the hover opacity
    // Restore any other styles here
  }
}



function BikeHorizontal() {
  return (
    <div className="bike-horizontal">

      <div className="bike-static-ui"></div>

      <div className="bike-headlights"></div>
      <div className="bike-battery"></div>
      <div className="bike-headlights"></div>
      <div className="bike-headlights-button"></div>
      <div className="bike-music-button"></div>
      <div className="bike-brakes"></div>
      <div className="bike-gear-indicator"></div>
      <div className="bike-speedometer"></div>
      <div
        className="bike-accelerate bike-accelerate-hover"
        onMouseEnter={handleAcceleratorMouseEnter}
        onMouseLeave={handleAcceleratorMouseLeave}
        onMouseDown={handleAcceleratorMouseDown}
        onMouseUp={handleAcceleratorMouseUp}
      ></div>


      
      

      

      

    </div>
  );
}

export default BikeHorizontal;
