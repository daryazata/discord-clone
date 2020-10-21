import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'
import {auth, provider} from '../../app/firebase'

function Login() {


    const signIn =()=>{
            //clever login
     auth.signInWithPopup(provider)
     .catch(error => alert(error.message))
    }

    return (
        <div className="login">

            <div className="login__logo">
                <img src="https://www.podfeet.com/blog/wp-content/uploads/2018/02/discord-logo.png" alt=""/>
            </div>
        <Button  onClick={signIn}>Sign In</Button>
        </div>
    )
}


export default Login
