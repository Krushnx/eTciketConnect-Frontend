import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authcontext";
import axios from "axios";
import link from "../../../backendlink";
import LogoutBTN from "../../auth/logoutBTN";
import Navbar from "../../Home/Navbar/Navbar";
import "../../Genral/Genral.css";
import "./Conductor.css";
import Button2 from "../../Genral/Button2";
import InputWIthSearch from "../../Genral/InputWIthSearch";
import Dropdown from "../../Genral/InputWIthSearch";
import switchlogo from '../../../logos/switch.png';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


function Conductor() {
  const user = useContext(AuthContext);
  // const [source , setSource] = useState("");
  const [destination, setDestination] = useState("Mumbai");
  const [price, setPrice] = useState("");
  const [source, setSource] = useState("Pune");

  console.log("CNDT ==> ", user);
  const createdBy = user.user._id;
  const ticketBusRoute = user.user.busRoute;
  const ticketBusNumber = user.user.busNumber;
  console.log("on cod ==> ", createdBy);

  function swap(){
    const tempsouce = source;
    const tempdest = destination;
    setDestination(tempsouce);
    setSource(tempdest);
  }
  async function createTicket(e) {
    e.preventDefault();

    const newEntry = {
      source,
      destination,
      price,
      createdBy,
      ticketBusNumber,
      ticketBusRoute,
    };
    setPrice("");
    Swal.fire({
      title: `Recived ₹ ${price}`,
      text: `Ticket Created Successfully from ${source} to ${destination}`,
      icon: 'success',
      confirmButtonText: 'OK',
      showCancelButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    });

    try {
      await axios.post(`${link}/ticket`, newEntry);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="CNDT">
      <Navbar flag={false} />
      <div className="CNDT-content tpad30">
        <div>
          <div className="CNDT-Message">
            <h2>Welcome on Board </h2>
            <h2>{user.user.name}</h2>
          </div>
          <div className="CNDT-Message">
            <h2>Bus Number </h2>
            <h2>{user.user.busNumber}</h2>
          </div>
          <div className="CNDT-Message">
            <h2>Bus Route </h2>
            <h2>{user.user.busRoute}</h2>
          </div>
          <div className="CNDT-create-ticket">
            <form onSubmit={createTicket} autocomplete="off">
              <div className="inpselect">
                <div className="srcinp">
                  <img
                    src="https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png"
                    alt=""
                  />
                  <Dropdown selected={source} setSelected={setSource} />
                  <p>Source</p>
                </div>
                <div
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
             

                  <img onClick={swap} src={switchlogo} alt="" style={{ height: "50px", rotate: "90deg", filter:"greyscale(100%)", width:"50px" , cursor:"pointer"}} />{" "}
                    
                </div>

                <div className="srcinp">
                  <img
                    src="https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png"
                    alt=""
                  />
                  <Dropdown
                    selected={destination}
                    setSelected={setDestination}
                  />
                  <p>Destination</p>
                </div>

                  </div>
              <div style={{display:"flex", margin:"20px 0"}}>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  className="input-price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  />
                  
              <Button2 name="Create Ticket" />
              </div>

            </form>
          </div>
          <h2>
            View my entries &nbsp;&nbsp;&nbsp; <Button2 name="VIEW" bgcolor="#e3e600" color="black" link="conductor/bookings"/>{" "}
          </h2>
        </div>

        <div className="CNDT-right"></div>
      </div>
      {/* <div className='tpad30'>
            <h2>
                I am a Conductor hh
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
        </div> */}
    </div>
  );
}
export default Conductor;
