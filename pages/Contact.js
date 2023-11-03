import React from 'react'
import { useEffect, useState } from 'react'
import { FaAddressBook } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { checkUser } from './api/api';
export function Contact(){
  useEffect(()=>{
    getUserCheck();
},[])

const [User , setUser] = useState({});
  const getUserCheck = async () => {
    const getResponse = await checkUser();
     setUser(getResponse.data)
};
console.log(User);
    return(
     <>
    <section className="contact-page-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaAddressBook className="contact-info-icon"/>
              </div>
              <div className="contact-info-text">
                <h2>address</h2>
                <span>1215 Lorem Ipsum, Mu 400022 </span> 
                <span>Chunabhatti , INDIA</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
              <MdMarkEmailUnread className=' contact-info-icon'/>
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span>av2989001@gmail.com</span> 
                <span>divyaenterprices61@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <GiOfficeChair className='contact-info-icon'/>
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form action="https://formspree.io/f/mayzbopy" method="post">
              <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div className="col-md-4">        
          <div className="contact-page-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30177.0455216096!2d72.82427002677166!3d19.013961964056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf17a398375b%3A0x674d586ed55fbfed!2sWadala%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697100906622!5m2!1sen!2sin" width={400} height={500} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>          
        </div>        
      </div>
    </div>
  </section>

     </>
    );
}

export default Contact



// 