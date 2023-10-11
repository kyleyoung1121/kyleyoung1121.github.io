import React, { useState } from 'react';
import './App.css';
import PhoneHorizontal from './PhoneHorizontal'
import BikeHorizontal from './BikeHorizontal'
import PhoneVertical from './PhoneVertical'

function App() {

  // Track state of speed and distance variable (used for simulation)
  const [speed, setSpeed] = useState(0);
  const [distance, setDistance] = useState(0);

  // Taking care to be sure that the react modules have access to the speed & distance as needed
  return (
    <div className="App">
      <PhoneHorizontal speed={speed} distance={distance} setDistance={setDistance}/>
      <BikeHorizontal speed={speed} setSpeed={setSpeed}/>
      <PhoneVertical distance={distance} />
    </div>
  );
}

export default App;
