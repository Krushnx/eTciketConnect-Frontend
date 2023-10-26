import React, { useContext   , useState} from 'react';
import LogoutBTN from '../auth/logoutBTN';
import AuthContext from '../../context/authcontext';
import './home.css'
import ReactTypingEffect from 'react-typing-effect';

import Navbar from './Navbar/Navbar';
function Home()
{
    const {getLoggedin ,user} = useContext(AuthContext);

    console.log(user.isConductor);

    return(
        <div className='home'>
             <Navbar flag={false}/>
            {/* <a href="/login">
                <button>Login</button>
            </a>
            <h2>  </h2>
            
            <a href="/register">
                <button>Sign UP</button>
            </a>
            <h2>  </h2>
            
            <LogoutBTN />
            <h2>  </h2> */}

        </div>
    );
}
export default Home;