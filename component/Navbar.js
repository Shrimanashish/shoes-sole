import React, {  useState } from 'react'
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import {FaShoppingCart} from "react-icons/fa";
import { CgMenu,CgClose } from "react-icons/cg";
import { useSelector } from 'react-redux';
function Navbar(){
     const {carts} = useSelector((state)=>(state.allCart));
    //  console.log(carts);

    
        const[openMenu , setopenMenu] = useState(false);
    return(
        <>
       
       <nav className='insole-nav'>
       <Link href="/">
            <img src="./healthcare.PNG" className="Store-logo" alt="./images/Storelogo1.PNG"/>
        </Link>
         <ul className={openMenu ? " menu-link-mobile":"menu-link"}>
            <li><Link className='insole-link' href="/">Home</Link></li>
            <li><Link className='insole-link' href="/About">About</Link></li>
            <li><Link className='insole-link' href="/Product">Product</Link></li>
            <li><Link className='insole-link' href="/Contact">Contact</Link></li>
            <li className='insole-link'>
            <Link className="insole-link shop-cart-trawli" href="/Cart">
                <FaShoppingCart className='shop-cart'/>
                <samp className='cart-count'>{carts.length}</samp>
            </Link>
            </li>
            </ul>
            <div className="menu-sign"> <Link className="insole-link" href="/Sign"> <button id="button" className=" button">SignIn</button></Link>
            </div>
        <div className='menu-sign menu-search'>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" required/>
        <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
         </div>
        <div className='hambergur-menu open'>
        <CgMenu onClick={()=>setopenMenu(!openMenu)}/>
        </div>
        <div className='hambergur-menu close'>
        <CgClose/>
        </div>
       </nav>
       
        </>
    )
}

export default Navbar