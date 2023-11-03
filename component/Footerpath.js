import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footerpath(){
      return(
         <section className='hole-footer'>
          
           <div className="hole-footer1">
           <div className="foot-data">
            <h3 className='foot-heading1'>Ready to get started?</h3>
            <h3 className='foot-heading1'>Talk to us today</h3>
           </div>
           <div className="d-flex  justify-content-center align-items-center">
            <Link href="./Contact" className="list-unstyled">
              <button  className="button" type='button'>Get Started</button>
            </Link>
           </div>
           </div>
           {/* footer section */}
           <footer className="hole-footer2">
             <div className="foot-social-data">
             <div className="first-box foot-box">
              <div className="box1">Ashish</div>
              <div className="box2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, fuga.</div>
             </div>
             <div className="first-box foot-box">
             <div className="box1">Subscribe to get important updates</div>
              <div className="box2">
              <input type="email-footer" id="footer-email" name="Email" placeholder='Email' autoComplete='off' required/>
              </div>
              <div className="box2 box3">
                     <Link href="https://www.youtube.com/channel/UCvr-L79iCICN38o0Y9LlKdw">
                     <button  className=" button">Subscribe</button>
                    </Link>
              </div>
             </div>
             <div className="first-box foot-box">
             <div className="box1">Follows Us</div>
              <div className="box2">
                <FaDiscord className='icons'/>
                <FaInstagram className='icons'/>
                <FaYoutube className='icons'/>
              </div>
             </div>
             <div className="first-box foot-box">
             <div className="box1">Call Us</div>
              <div className="box2">+91 9594574082</div>
             </div>
             </div>
             <div className="hole-footer3">
              
              <div className="box2 color">
                @{new Date().getFullYear()} <br></br>
                 Ashish Techinal.All Rights Reserved
              </div>
              
             </div>
           </footer>
           
         </section>
      );
  }
  
  export default Footerpath