import Link from 'next/link'
import { BsGoogle} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { useState } from 'react';
import { addUser } from './api/api'

const defaultValue = {
    Username:'',
    Email:'',
    CreatePassword:'',
    ConfirmPassword:''
 };
function Login(){
    const [User , setUser] = useState(defaultValue);
     const onChangeValue = (e)=>{
        setUser({...User,[e.target.name]:e.target.value})
     }

     const addUserDetails = async()=>{
        await addUser(User);
     }


     const passShow=()=>{
      const pass = document.getElementsByClassName('username')[3];
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
           <div className="sign-heading"><h1>SignUp</h1></div>
           <form action="">
              <div className="username-sign-up">
              <input type="text" className='username' placeholder='Username' onChange={(e)=>onChangeValue(e)} name='Username' required/>
              </div>
              <div className="username-sign-up">
              <input type="text" className='username' placeholder='Email ' onChange={(e)=>onChangeValue(e)} name='Email'required/>
              </div>
             <div className="password">
             <input type="password" className='username' placeholder='Create Password'  onChange={(e)=>onChangeValue(e)} name='CreatePassword' required/>
             </div>
             <div className="password">
             <input type="password" className='username' placeholder='Confirm Password'  onChange={(e)=>onChangeValue(e)} name='ConfirmPassword' required/>
             </div>
             <div className="check-box">
             <input type="checkbox" id="showPassword" onClick={()=>{passShow()}} />
             <label for="showPassword">Show password</label>
             </div>
             <div className="login-button">
             <Link href="/Sign"><button className=" Sing-button" onClick={() => {addUserDetails()}}>SignUp</button></Link>
             </div>
           </form>
              
          </div>
          <div className="grid-left-box">
             <div className="welcome-box"><h2>Welcome back!</h2></div>
             <div className="paragraph">
              <p className="para">Welcome back ! we are so happy to have you here, it's great to see you again. we hope you had a safe and enjoyable time away.</p>
             </div>
             <div className="login-button">
             <Link href="/Sign"> <button className="login" >Already have an account ? SignIn</button></Link>
             </div>
             <div className="sign-with-other-option">
              <p>or signUp with</p>
              <BsGoogle className='icons'/>
                <BsFacebook className='icons'/>
                <GrLinkedin className='icons'/>
             </div>
          </div>
        </div>

        </>
    )
}

export default Login