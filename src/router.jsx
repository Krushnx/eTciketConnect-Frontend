import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AuthContext from './context/authcontext';
import Home from './components/Home/Home';
import Main from './components/Home/main';
import Bookings from './components/Routes/Conductor/Bookings';
import TicketCNF from './components/Routes/Conductor/TicketCNF';
import Service from './components/Services/service';
import About from './components/AboutUs/about'
import VerifyTicket from './components/Routes/User/VerifyTicket';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
          
            <Routes>
         
            <Route path="/" element={<Home />} />
           
          { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>
          }
          { loggedIn === true && <>

            <Route path="/main" element={<Main />} />
            <Route path="/conductor/bookings" element={<Bookings />} />
            <Route path="/test" element={<TicketCNF />} />

            </>}
            
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/ticket/:ticketId" element={<VerifyTicket />} />
           

            
        </Routes></Router>
           
          );
}

export default MyRouter;
