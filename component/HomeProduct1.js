import Image from 'next/image'
import Link from 'next/link'
import {FiTruck } from "react-icons/fi";
import { RiSecurePaymentFill} from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdHighQuality } from "react-icons/md"
function HomePrduct1(){

   
    return (
        <>
         <div className="Hole-home-product1">
               <div className=" first-sole-box1">
                  <div className="first-sole1"><Image src="/sole9.jpg" className="first-sole-image1" alt="error image loading" width={200} height={200}></Image></div>
                   <div className="paragraph">
                     <p>Experience relief from foot, heel and arch pain, including pain from  </p>
                   </div>
                 
                  <div className="card-body">
                        <h5 className='product-name'>PU Material Sole</h5>
                        <h6 class="card-price-product">&#8377;520</h6>
                        <div className="buttoneffect">
                           <Link href="/Cart" className='insole-link'><button className="button">Add To Cart</button></Link>
                        </div>
                        <div className=" bg-border">
                        <Link href="/Product" className='insole-link'><button  className="button">SHOP PAIN RELIEF INSOLE</button></Link>
                        </div>
                        <MdHighQuality className='icons icons-trust'/>
                        <p className="icons-trust">Best Quality</p>
                  </div>
               </div>

               <div className=" first-sole-box1">
                  <div className="first-sole1"><Image src="/sole10.jpg" className="first-sole-image1" alt="error image loading" width={200} height={200}></Image></div>
                  <div className="paragraph">
                     <p>Leave discomfort and pain in the dust remove</p>
                   </div>
                 
                  <div className="card-body">
                  <h5 className='product-name'>Camp Sole</h5>
                  <h6 class="card-price-product">&#8377;460</h6>
                        <div >
                          <Link href="/Product" className='insole-link'> <button className="button" >Add TO Cart</button></Link>
                        </div>
                  <div className=" bg-border">
                     <Link href="/Product" className='insole-link'><button  className="button">SHOP HIKE INSOLE</button></Link>
                  </div>
                  <VscWorkspaceTrusted className='icons icons-trust'/>
                  <p className="icons-trust">Trust Our Product</p>
                  </div>
               </div>

                <div className=" first-sole-box1">
                  <div className="first-sole1"><Image src="/sole16.jpg" className="first-sole-image1" alt="error image loading" width={250} height={200}></Image></div>
                  <div className="paragraph">
                     <p>Reduce strain and get more out of your miles remove</p>
                   </div>
                  <div className="card-body"> 
                  <h5 className='product-name'>City Rubber Sole</h5>
                    <h6 class="card-price-product">&#8377;380</h6>
                  <h5 className='product-name'></h5>
                        <div className="buttoneffect">
                           <Link href="/Cart" className='insole-link'><button className="button" >Add To Cart</button></Link>
                        </div>
                    <div className=" bg-border">
                      <Link href="/Product" className='insole-link'><button  className="button">SHOP RUN INSOLE</button></Link>
                    </div>
                        <RiSecurePaymentFill className='icons icons-trust'/>
                        <p className="icons-trust">Secure Payment</p>
                  </div>
                </div>

                <div className=" first-sole-box1">
                  <div className="first-sole1"><Image src="/sole15.jpg" className="first-sole-image1" alt="error image loading" width={200} height={200}></Image></div>
                  <div className="paragraph">
                     <p>Experience relief from foot, heel and arch pain, including pain from </p>
                   </div>
                 
                  <div className="card-body">
                       <h5 className='product-name'>Rubber Sole</h5>
                        <h6 class="card-price-product">&#8377;450</h6>
                        <div className="buttoneffect">
                           <Link href="/Cart" className='insole-link'><button  className="button" >Add To Cart</button></Link>
                         </div>
                         <div className=" bg-border">
                      <Link href="/Product" className='insole-link'><button  className="button">SHOP BEST SELLING INSOLE</button></Link>
                    </div>
                        <FiTruck className='icons icons-trust'/>
                        <p className="icons-trust">Fast Delivery</p>
                       
                  </div>
               </div>
           </div>
           
           
        </>
    )
}

export default HomePrduct1