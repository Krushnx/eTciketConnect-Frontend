import './about.css'
import Navbar from '../Home/Navbar/Navbar';



function About(){
    return(
        <div className='AboutUs'>
            
           <Navbar flag = {false}/>
           <div className="about-content">
           <div className='about-title'>
                    <p id='redp' >ABOUT US</p>
                    
                </div>
                <div className="vision-section">
                <h2 className="vision-title">Our Vision</h2>
                <div className="vision-description">
                <div className="container-vision mt-4">
      <div className="card-columns">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Seamless Ticketing Experience</h5>
            <p className="card-text">
              Ensure a hassle-free journey with a smooth and user-friendly e-ticketing process.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Efficient QR Code Integration</h5>
            <p className="card-text">
              Implement a streamlined QR code system for efficient ticket generation and validation.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Enhanced Accessibility</h5>
            <p className="card-text">
              Provide a universally accessible interface for users of varying technological backgrounds.
            </p>
          </div>
        </div>

        {/* Add other cards for the remaining points */}
      </div>
    </div>
      </div>
      {/* Add more content or components related to your vision section */}
    </div>

    

          

            </div>
           </div>
    
    )
}

export default About;
