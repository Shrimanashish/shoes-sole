import {getUser} from './api/api'
import { useEffect , useState} from 'react'
import Link from 'next/link'
import { CgArrowTopRightO } from 'react-icons/cg'
import {addToCart} from "../Redux/app/feature/cartSlice"
import { useDispatch } from 'react-redux'
function Product(){
  useEffect(()=>{
    getAllData();
 },[])
    const[users , setUsers] = useState([]);
    const getAllData = async()=>{
      const response =  await getUser();
      setUsers(response.data);
 } 

 const dispatch = useDispatch();
 const send = (e) =>{
    try{
    dispatch(addToCart(e));
    }catch(e){
      console.log("error while seading cart data" , e);
    }
 }

    return (
      <>
     <div class="flexbox">
     <div class="search">
     <div>
     <input type="text" placeholder="Search . . ." list='input'/>
     </div>
     </div>
     </div>
          <div className="product">
            {
                users.map((element)=>{
                  // console.log(element);
                  return(
                    <>
                      <div class="card-product">
                        <div className="card-image-product">
                            <img src={element.MediaUrl} class="card-image" alt="error image loading"/>
                        </div>   
                        <div className='sole-property'>
                        <p> It retains elasticity even at the highest temperature.</p>
                        </div>
                        <div class="card-body">
                        <h5 className='product-name'>{element.name}</h5>
                        <h6 class="card-price-product">&#8377;{element.price}</h6>
                        <div className="buttoneffect">
                           <Link href="/Cart" className='insole-link'> <span className='flex'><button className="button"  onClick={()=>send(element)}>Add To Cart</button>
                           </span></Link>
                           <Link href={`/productView/`+element.name+`/data`} className='insole-link'><samp><button className='view-button button product-view '>View Product</button></samp></Link>
                        </div>
                        <p class="card-product-text">{element.description}</p>
                        </div>
                      </div>
  
                   </>
                  )

                })
                  
            }

          </div>
       </>
    ) 
}

export default Product