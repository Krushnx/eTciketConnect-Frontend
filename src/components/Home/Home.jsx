import React, { useContext   , useState} from 'react';
import LogoutBTN from '../auth/logoutBTN';
import AuthContext from '../../context/authcontext';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';
import Navbar from './Navbar/Navbar';
import Button1 from '../Genral/Button1';
import Button2 from '../Genral/Button2';
function Home()
{
    const {getLoggedin ,loggedIn,user} = useContext(AuthContext);

    const gotolink = loggedIn ? 'main': 'login';
    // console.log(loggedIn);
    // console.log(user.isConductor);

    return(
        <div className='home'>
             <Navbar flag={false}/>
            
            <div className="home-content">
                <div className='home-title'>
                    <p>STOP LOOKING.</p>
                    <p id='redp'>START BOOKING!</p>
                    <h2>Travel Smarter, Travel Digital<br/> E-ticket Connect Redefines Your Journey.</h2>
                    <Button2 name="GET STARTED" link={gotolink}/>
                </div>
            </div>

        </div>
    );
}
export default Home;