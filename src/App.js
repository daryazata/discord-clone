import React from 'react';
import Chat from './components/Chat/Main';
import Sidebar from './components/Sidebar/Main';
import Login from './components/Login/Login';
import './App.css';
import {useSelector} from 'react-redux'
import {selectUser} from "./features/userSlice"


function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      {
        user? (
          <>
          <Sidebar/>
          <Chat/>
          
          </>
        ):(<Login/>)
      }
    </div>
  );
}

export default App;
