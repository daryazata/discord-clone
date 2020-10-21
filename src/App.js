import React, {useEffect} from 'react';
import Chat from './components/Chat/Main';
import Sidebar from './components/Sidebar/Main';
import Login from './components/Login/Login';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from "./features/userSlice"
import {auth} from './app/firebase'
import {login, logout} from './features/userSlice'

function App() {

  const dispatch = useDispatch() // to pull in the state info
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        //user is logged in 
        dispatch(login({

          uid:authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
        // user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])
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
