import React, { useState } from 'react';
import './App.css';
import PhoneHorizontal from './PhoneHorizontal'
import BikeHorizontal from './BikeHorizontal'
import PhoneVertical from './PhoneVertical'

function App() {

  const [speed, setSpeed] = useState(0);
  const distance = 0;


  return (
    <div className="App">
      <PhoneHorizontal speed={speed} distance={distance} />
      <BikeHorizontal speed={speed} setSpeed={setSpeed} distance={distance} />
      <PhoneVertical distance={distance} />
    </div>
  );
}

export default App;
