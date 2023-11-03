import { getProductid } from '@/pages/api/api';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router"
import { useState } from 'react';
function data(){
    const {query} = useRouter();
    const id = query.product;

    useEffect(()=>{
      getProduct();
     },[])

    const [product , setproduct] = useState({});
      const getProduct = async () => {
        const getResponse = await getProductid({id:id});
        setproduct(getResponse.data);
    };

     return (
         <>
         <div class="lightbox-blanket">
         <div class="pop-up-container">
         <div class="pop-up-container-vertical">
         <div class="pop-up-wrapper">
           <div class="go-back"></div>
           <div class="product-details">
             <div class="product-left">
               <div class="product-info">
                <div class="product-manufacturer">{ product ? product.name : "error feathing name"}</div>
                 <div class="product-price" price-data="320.03">
                 ₹{product ? product.price : "error feathing price"}<span class="product-price-cents"></span>
                 </div>
               </div>
               <div class="product-image">
                 <img src={product? product.MediaUrl: "error imaging loading"}/>
               </div>
             </div>
             <div class="product-right">
               <div class="product-description">
                 <p><b>About:</b> {product? product.description: " error feathing description"}</p>
               </div>
               <div class="product-available">
                 In stock. <span class="product-extended text-danger">Available</span>
               </div>
               <div class="product-rating">
                 <i class="fa fa-star rating" star-data="1"></i>
                 <i class="fa fa-star rating" star-data="2"></i>
                 <i class="fa fa-star rating" star-data="3"></i>
                 <i class="fa fa-star" star-data="4"></i>
                 <i class="fa fa-star" star-data="5"></i>
                 <div class="product-rating-details">(3.1 - <span class="rating-count">1203</span> reviews)
                 </div>
 
               </div>
               <div class="product-quantity">
                 <div class="product-quantity-subtract">
                   <i class="fa fa-chevron-left"></i>
                 </div>
                 <div class="product-quantity-add">
                   <i class="fa fa-chevron-right"></i>
                 </div>
               </div>
             </div>
             <div class="product-bottom">
               <div class="product-checkout">
                 Total Price
                 <div class="product-checkout-total">
                   <i class="fa fa-usd"></i>
                   <div class="product-checkout-total-amount">
                     {product.price}
                   </div>
                 </div>
               </div>
               <div class="product-checkout-actions">
                 <Link className="insole-link" href="/Product" ><button className="view-button button">BackToProduct</button></Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  
   </>

     )
    
}

export default data;