import React from 'react';

import './App.css';
import Chat from './components/Chat/Main';
import Sidebar from './components/Sidebar/Main';


function App() {
  // BEM naming small let classnames
  return (
    <div className="app">
 
      <Sidebar/>
      {/* Chat */}
      <Chat/>
    </div>
  );
}

export default App;
