import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/authcontext';
import axios from 'axios';
import link from '../../../backendlink';
import LogoutBTN from '../../auth/logoutBTN';
function Conductor()
{
    const user = useContext(AuthContext);
    const [source , setSource] = useState("");
    const [destination , setDestination] = useState("");
    const [price, setPrice] = useState("");

    const createdBy = user.user._id; 
    const ticketBusRoute = user.user.busRoute;
    const ticketBusNumber = user.user.busNumber;
        console.log("on cod ==> " , createdBy);
    async function createTicket(e)
    {
        e.preventDefault();

        const newEntry = 
        {
           source , destination , price , createdBy , ticketBusNumber , ticketBusRoute
        }

        try {
            await axios.post(`${link}/ticket` , newEntry)

        } catch (error) {
            console.log(error);
        }

    }
    console.log("source is ==> ",source );
    console.log("destination is ==> ",destination );
    console.log("price is ==> ",price );

    return(
        <div>
            <h2>
                I am a Conductor
            </h2>
            <form onSubmit={createTicket} autocomplete="off">
          <input autoComplete="new-password" name="hidden" type="text" style={{display:"none"}} />

            <div className="field input-field">
              <input required type="text" placeholder="Source" className="input" onChange={(e)=> setSource(e.target.value)}/>
            </div>
            <div className="field input-field">
              <input required type="text" placeholder="Destination" className="input" onChange={(e)=> setDestination(e.target.value)}/>
            </div>
           
            <div className="field input-field">
              <input required type="text" placeholder="Price" className="input" onChange={(e)=> setPrice(e.target.value)}/>
            </div>
           
            <div className="field button-field">
              <button>Create Ticket</button>
            </div>
          </form>

          <a href="/conductor/bookings">
            <button>my bookings</button>
          </a>
          <LogoutBTN />
        </div>
    );
}
export default Conductor;