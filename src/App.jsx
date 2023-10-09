// App.jsx

import React from 'react';
import './App.css';
import PhoneHorizontal from './PhoneHorizontal'
import BikeHorizontal from './BikeHorizontal'

function App() {
  return (
    <div className="App">

      <React.StrictMode>
        <PhoneHorizontal />
      </React.StrictMode>

      <React.StrictMode>
        <BikeHorizontal />
      </React.StrictMode>

      <React.StrictMode>
        <PhoneVertical />
      </React.StrictMode>

    </div>
  );
}

export default App;
