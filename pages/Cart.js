'use client'
import { AiTwotoneDelete} from "react-icons/ai";
import Link from "next/link";
import { FaPlus,FaMinus,FaLessThan,FaGreaterThan } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCartProduct } from "@/Redux/app/feature/cartSlice";
import {removeToCart , singleCartRemove } from "@/Redux/app/feature/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState } from "react";

function Cart(){
    const {carts} = useSelector((state)=>(state.allCart));
    const dispatch = useDispatch();
    
    const emptyCart = ()=>{
        toast.success("Your Cart is Empty");
        <ToastContainer/>
        dispatch(emptyCartProduct());
    }

    const CartRemove = (e)=>{
      toast.success("Item Remove From Your Cart");
      <ToastContainer/>
      dispatch(removeToCart(e));
    }

    const qntyCartRemove = (e) =>{
        dispatch(singleCartRemove(e));
    }

    const qntyCartIncrement = (e) =>{
       try{
        toast.success("qnty Increases Succesfully ");
        <ToastContainer/>
        dispatch(addToCart(e))
       }catch(e){
         console.log("Error while increment" , e);
       }
    }

    const [TotalPrice , setTotalPrice] = useState(0)

    const total = () =>{
       let totalprice = 0;
       carts.map((ele)=>{
          totalprice = ele.price * ele.qnty + totalprice;
       })

       setTotalPrice(totalprice);
    }

    const [qnty , setQnty] = useState(0);

    const qntySet=()=>{
        let noOfItem = 0;
        carts.map((ele)=>{
            noOfItem = ele.qnty + noOfItem;
        })

        setQnty(noOfItem);
    }


    useEffect(()=>{
      total();
      qntySet();
    },[total],[qntySet])



    return(
        <>
            <div className='row justify-content-center  m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card ">
                            <div className="card-header bg-dark p-2 flex">
                              <div className="hed-calculate"><h5 className="text-white m-0 p-1">Cart Calculation({carts.length})</h5>
                              </div>
                                <div className="">
                                {
                                    carts.length>0?<button className="bg-danger text-white  rounded p-1 border-danger" onClick={emptyCart} ><AiTwotoneDelete/><span>Empty Cart</span></button>
                                    :""
                                }
                                </div>
                            </div>

                            <div className="card-body1 p-0">
                                {
                                    carts.length==0? <table className="table cart-table mb-0">
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className="cart-empty">
                                                        <BsCartX className="icons "/>
                                                        <p className="paragraph ">Your cart is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> :
                                    <table className="table cart-table mb-0 table-responsive-sm">
                                        <thead>
                                            <tr>
                                            <th className=" text-center"><span id="amount" className="amount">Action</span></th>
                                            <th className=" text-center"><span id="amount" className="amount">Image</span></th>
                                            <th className=" text-center"><span id="amount" className="amount">Name</span></th>
                                            <th className=" text-center"><span id="amount" className="amount">Price</span></th>
                                            <th className=" text-center"><span id="amount" className="amount">About</span></th>
                                            <th className=" text-center"><span id="amount" className="amount">qty</span></th>
                                               <th className=" text-center"><span id="amount" className="amount">Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((data,index)=>{
                                                    return(
                                                        <>
                                                        <tr>
                                                            <td>
                                                                <button className="prdct-delete" onClick={()=>CartRemove(data.id)} ><AiTwotoneDelete/></button>
                                                            </td>
                                                            <td className="text-center">
                                                            <div className="product-img"><img src={data.MediaUrl} alt="error image loading" /></div>
                                                            </td>
                                                            <td>
                                                            <div className="product-name text-black"><p>{data.name}</p></div>
                                                            </td>
                                                            <td><div className="product-name text-black"><p>₹{data.price}</p></div></td>
                                                            <td>
                                                                <div>
                                                                    <p>{data.description}</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="prdct-qty-container">
                                                                         <button className="prdct-qty-btn" type="button"><FaPlus onClick={()=>qntyCartIncrement(data)}/></button>   
                                                                         <input type="text" name="" id="" className="qty-input-box" value={data.qnty} disabled/> 
                                                                         <button className="prdct-qty-btn" type="button" onClick={()=>qntyCartRemove(data.id)}><FaMinus/></button> 
                                                                </div>
                                                            </td>
                                                            <td className="text-center">₹{data.price*data.qnty}</td>
                                                        </tr>
                                                        
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                              
                                                <th>&nbsp;</th>
                                                <th className="text-center"><Link href="/Product"><button className="view-button p-1 shoping"><FaLessThan /><span>Continuneshop</span></button></Link></th>
                                                <th colSpan={2}>&nbsp;</th>
                                                <th className="text-center">Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{qnty}</span></th>
                                                <th className='text-center'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'> ₹{TotalPrice}</span></th>
                                                <th className="text-center"><Link href="/Payment"><button className="view-button p-1 "><span>Checkout</span></button></Link></th>
                                            </tr>
                                          
                                        </tfoot>
                                    </table>
                                    
                                }

                            </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Cart