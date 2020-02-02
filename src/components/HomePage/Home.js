import React from 'react';
import './Home.css'

const home = (props) => (
    <div>
        <div className={'container'}>
            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/11/Farming-Wallpaper-HD-Free-Download.jpg' alt='' className='FarmImg'/>
            <div className='centered'>
                <h1>AnnData</h1>
                
            </div>
        </div>
        <div className ={'Content'}>
            <h1>Who We are?</h1>
            <p>We at Ann'Data'ians build to improve the quality of food and farmers by aiming at Prevention rather than cure!</p>
            <h1>What do we offer?</h1>
            <p>We make the use of IOT sensors and modoern technology. provide the farmers with the information regarding thesustainable crops grown in farmer's natural habitat taking in account everything from the amount of rainfall to financial status of farmers</p>
            <h1>Why do we offer?</h1>
            <p>In the society revolving around self-interest, we offer this product to move agriculture feasible and economical for farmers in their even environment to control adulteration.</p>
        </div>
        <button className={'loginButton'}
                onClick={props.Clicked}>Login</button>
    </div>
)

export default home;