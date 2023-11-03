'use client'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout=({children})=>{
    return(
        <>
         <Navbar/>
         {children}
         <ToastContainer/>
        </>
    )
    
    
}

export default Layout