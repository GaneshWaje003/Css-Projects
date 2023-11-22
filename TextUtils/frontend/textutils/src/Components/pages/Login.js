import React, { useEffect, useState } from 'react'
import '../css/login.css'
import pass from '../Image/key_svg.svg'
import username from '../Image/user_svg.svg'
import google_logo from '../Image/google_logo.svg'
import facebook_logo from '../Image/facebook_svg.svg'
import Toast from '../js/Toast'
import { NavLink } from 'react-router-dom'


export default function Login() {

  const [loginData,setLoginData] = useState("");
  const [isCLick, SetIsClicked] = useState(false);
  const [addClass, SetAddClass] = useState("flippers");
  const [isSuccessLogin,setIsSuccessLogin]=useState(false);

  const loginInfoHandler = (e) => {
    const id_login = e.target.id;
    const pass_login = e.target.value;

    setLoginData({ ...loginData ,[id_login]:pass_login});

  }
  
  // Handler for login button
  const userDataSubmit = async () =>{

    console.log(loginData)
    
    try{

    const loginRes = await fetch('http://localhost:1000/login-with-this-data',
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },

      body: JSON.stringify(loginData),

    });

    if(loginRes.ok){
      setIsSuccessLogin(true);
      setTimeout(()=> setIsSuccessLogin(false), 3000);

    }
   


  }
  catch(error){
    console.log(error);
  }
    setLoginData("");

  }

  return (
    <div className='root-login'>

    {isSuccessLogin && <Toast message="Login Successful "/>}
      <div className={`${addClass} login-container`}>
        <div id="title-login">Login</div>

        <div className="login-form">

          <p className='text-login username'>UserName</p>

          <div className='container-input username'>
            <img src={username} alt="" />
            <input className='input-fields' onChange={(e)=>loginInfoHandler(e)} id='LU' type="text" />
          </div>

          <p className='text-login passworda' >Password</p>

          <div className='container-input password'>
            <img src={pass} alt="" />
            <input className='input-fields' onChange={(e)=>loginInfoHandler(e)} id='LP' type='password' />
            <a href="#">Forgot password</a>
          </div>

          <button onClick={()=>userDataSubmit()} className='button-clicked' >Login</button>
        </div>

        <hr className='horizontal-line' />

        <div className="login-options">

          <div className='login-google'>
            <a href="#"><img src={google_logo} alt="" />Login With Google</a>
          </div>

          <div className='login-facebook'>
            <a href="#"><img src={facebook_logo} alt="" />Login With Google</a>
          </div>

        </div>

        <div className="sign-up">
          <NavLink to="/signup">SignUp</NavLink>
        </div>

      </div>

    </div>
  )
}





