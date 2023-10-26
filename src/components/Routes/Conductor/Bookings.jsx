import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import './Booking.css'
import link from '../../../backendlink';
import AuthContext from '../../../context/authcontext';

function Bookings()
{
    const {user} = useContext(AuthContext);
  
    const [ticket, setTicket] = useState([]);
    const convertToIST = (utcDate) => {     
        const date = new Date(utcDate);
        return {
          date: date.toLocaleString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }),
          time: date.toLocaleString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        };
      };
    const fetchUserticket = () => {
      fetch(`${link}/ticket/`)
        .then(response => {
          return response.json()
        })
        .then(ticket => {
          setTicket(ticket)
        })
    }

  
    useEffect(() => {
        fetchUserticket()
    }, [])

    for (let i = ticket.length - 1; i >= 0; i--) {
      if (ticket[i].createdBy !== user._id) {
        // Remove items that do not match the criteria
        ticket.splice(i, 1);
      }
    }

    



    return(
        <div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <h2>Bookings</h2>
            <div className='colflex'>
            <i class="fa fa-user" style={{margin:"0  auto"}}></i>
            {user.name}
            </div>
            <div className='colflex'>
            <span>{user.busNumber}</span>
            <span>{user.busRoute}</span>
            </div>
          </div>
            <table className="styled-table">
    <thead>
        <tr>
        
            {/* <li key={item.id}>{item.name}</li> */}
          
            <th>Source</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Date</th>
            <th>Time</th>
            <th>Ticket ID</th>
            <th>Created By</th>
            <th>Conductor ID</th>
            <th>Bus Route</th>
            <th>Bus Number</th>
        </tr>
    </thead>
    <tbody>
        {ticket.map((item) => (
            <tr className="active-row">
            <th>{item.source}</th>
            <th>{item.destination}</th>
            <th>{item.price}</th>
            <th>{convertToIST(item.date).date}</th>
            <th>{convertToIST(item.date).time}</th>
            <th>{item._id}</th>
            <th>{user.name}</th>
            <th>{user._id}</th>
            <th>{user.busRoute}</th>
            <th>{user.busNumber}</th>
        </tr>
            ))}
    </tbody>
</table>
        </div>
    );
}
export default Bookings;