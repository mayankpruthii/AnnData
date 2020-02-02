import React from 'react';
import './LoginScreen.css'

const loginScreen = () => (
    <div>
        <label for="uname"><b>Username</b></label><br />
        <input className={'TextnPass'} type="text" placeholder="Enter Username" name="uname" required /><br />
        <label for="psw"><b>Password</b></label><br />
        <input className={'TextnPass'} type="password" placeholder="Enter Password" name="psw" required /><br />
        <button className={'LoginButton'} type="submit"><a href='/Nutrients' className={'LoginWord'}>Login</a></button>
    </div>

)

export default loginScreen;