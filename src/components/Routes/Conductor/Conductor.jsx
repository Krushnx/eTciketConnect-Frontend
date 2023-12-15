import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authcontext";
import axios from "axios";
import link from "../../../backendlink";
import Navbar from "../../Home/Navbar/Navbar";
import "../../Genral/Genral.css";
import "./Conductor.css";
import Button2 from "../../Genral/Button2";
import Dropdown from "../../Genral/InputWIthSearch";
import switchlogo from '../../../logos/switch.png';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import 'reactjs-popup/dist/index.css';
import TicketCNF from "./TicketCNF";

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
      title: `Scan The QR`,
      text: `Ticket will genrated from ${source} to ${destination}`,
      imageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi%3A%2F%2Fpay%3Fpa%3D9322681386%40ybl%26am%3D${price}%26tn%3DTicket%26cu%3DINR`,
  imageHeight: 300,
  imageAlt: "A tall image",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Payment Recived"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Recived ₹ ${price}`,
          text: `Ticket Created Successfully from ${source} to ${destination}`,
          icon: 'success',
          confirmButtonText: 'OK',
      showCancelButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
        });
      }
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
          </div>
  );
}
export default Conductor;
