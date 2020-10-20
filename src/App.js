import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Main';


function App() {
  // BEM naming
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat */}
    </div>
  );
}

export default App;
