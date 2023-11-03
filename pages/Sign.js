import Link from 'next/link'
import { BsGoogle} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { useState } from 'react';
import { checkUser } from './api/api'

const defaultValue = {
   Username:'',
   Password:''
};

function Sign(){
    const [User , setUser] = useState(defaultValue);
     const onChangeValue = (e)=>{
         setUser({...User,[e.target.name]:e.target.value});
     }

      const toConfirm = ()=>{
         // setInterval(alert("Registration Successfully"),5000);
      }
     const addUserDetails = async()=>{
      await checkUser(User);
   }

    const showPassword=()=>{
        const pass = document.getElementsByClassName('username')[1];
        if(pass.type==="password"){
         pass.type = "text"
        }else{
         pass.type = "password"
        }
    }

    return(
        <> 
         <div className="grid-two-coloum">
           <div className="grid-right-box">
           <div className="sign-heading"><h1>SignIn</h1></div>
           <form action="">
           <div className="username-sign-up">
           <input type="text" className='username' placeholder='Username/e-mail' onChange={(e)=>onChangeValue(e)} name='Username' required/>
           </div>
             <div className="password">
             <input type="password" className='username' placeholder='Password'  onChange={(e)=>onChangeValue(e)} name='Password' required/>
             </div>
             <div className="check-box">
             <input type="checkbox" id="showPassword"  onClick={()=>{showPassword()}}/>
             <label for="showPassword">Show password</label>
             </div>
             <div className="login-button">
             <Link href="/"> <button className=" Sing-button" onClick={()=>{addUserDetails()}} onclick={toConfirm()}>SignIn</button></Link>
             </div>
           </form>
           <div className="sign-with-other-option">
              <p>or sign with</p>
                <BsGoogle className='icons'/>
                <BsFacebook className='icons'/>
                <GrLinkedin className='icons'/>
             </div>
              
          </div>
          <div className="grid-left-box">
             <div className="welcome-box"><h2>Welcome back!</h2></div>
             <div className="paragraph">
              <p className="para">Welcome back ! we are so happy to have you here, it's great to see you again. we hope you had a safe and enjoyable time away.</p>
             </div>
             <div className="login-button">
             <Link href="/Login"> <button className="login" >No account yet? signup.</button></Link>
             </div>
          </div>
        </div>

        </>
    )
}

export default Sign