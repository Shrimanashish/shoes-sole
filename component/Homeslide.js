import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
function Homeslide(){
    return(
       
        <> 
           <div className="container-home">
            <div className="left-home-container">
             <div className="heading">our new gifting line has dropped</div>
             <div className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis tempora architecto modi ad adipisci, molestiae commodi laborum nihil quae perferendis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, necessitatibus.
             </div>
             <div className='foot-button'>
             <button className="button  insole-button">Read More</button>
             </div>
            </div>
            <div className="right-home-container ">
<div id="captioned-gallery">
	<figure class="slider">
		<figure>
			<img src="insoleimage3home.jpg" alt/>
			<figcaption>Hobbiton, New Zealand</figcaption>
		</figure>
		<figure>
			<img src="home.jpg" alt/>
			<figcaption>Wanaka, New Zealand</figcaption>
		</figure>
		<figure>
			<img src="home1.jpg" alt/>
			<figcaption>Utah, United States</figcaption>
		</figure>
		<figure>
			<img src="home4.jpg" alt/>
			<figcaption>Bryce Canyon, Utah, United States</figcaption>
		</figure>
		<figure>
			<img src="home3.jpg" alt/>
			<figcaption>Hobbiton, New Zealand</figcaption>
		</figure>
	</figure>
</div>
     
           </div>
            </div>
    
   
        </>
    )
}

export default Homeslide