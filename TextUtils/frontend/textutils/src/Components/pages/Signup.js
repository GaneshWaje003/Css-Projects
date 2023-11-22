import React, { useRef, useState } from 'react'
import '../css/signup.css'
import google_logo from '../Image/google_logo.svg'
import facebook_logo from '../Image/facebook_svg.svg'
import CustomAlert from '../js/CustomAlert';

export default function Signup() {

    const [newUserData, setNewUserData] = useState("");
    const [toShowAlert,SetToShowAlert]=useState(false);
    const [alertMessage,setAlertMessage] = useState("");
    const [allConstraintsOk,setAllConstraintsOk]=useState(false);

    const inputChangeHandle = (e) => {

        const inpId = e.target.id;
        const inpVal = e.target.value;

        setNewUserData(prevState => ({
            ...prevState,
            [inpId]: inpVal !== '' ? inpVal : '',
        }));



        // console.log(newUserData);
    };

    const formSubmitHandler = async () => {

        let message = '';
        let isEmpty = false;

        console.log(newUserData)

       for(const key in newUserData){
        console.log('key :',key,'value : ,',newUserData[key]);
        if(newUserData[key].trim() === ''){
            isEmpty = true;
            message = `${key} is empty`;
            console.log(message);
            
            break;

        }
       }


        if (isEmpty) {
            SetToShowAlert(true);
            setAlertMessage(message);  
        }else if(newUserData.P1 !== newUserData.P2){   
            SetToShowAlert(true);
            setAlertMessage('both passwords should same');  
        }else{

        }


        // if(allConstraintsOk){
              
        //     const res = await fetch('http://localhost:1000/send-data',
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(newUserData),
        //         });

        //     setNewUserData("");
        // }

    }

    const closeAlertDialog = () =>{
        SetToShowAlert(false);
    }



    return (
        <div className='root-signup'>
            { toShowAlert && <CustomAlert message={alertMessage} closeAction={()=>closeAlertDialog()}/>}      
            <div className="sign-up-form">

                <div className="signup-input-container">

                <div className="group-div first-name">
                    <p className='tag-names'>First Name </p>
                    <input  id='F' onChange={(e) => inputChangeHandle(e)} type="text" className='input-fields' />
                </div>

                <div className="group-div middle-name">
                    <p className='tag-names'>Middle Name </p>
                    <input id='M' onChange={(e) => inputChangeHandle(e)} type="text" className='input-fields' />
                </div>

                <div className="group-div sir-name">
                    <p className='tag-names'>Last Name </p>
                    <input type="text" id='L' onChange={(e) => inputChangeHandle(e)} className='input-fields' />
                </div>


                <div className="group-div password">
                    <p className='tag-names'>Email</p>
                    <input type="email" id='E' onChange={(e) => inputChangeHandle(e)} className='input-fields' />
                </div>

                <div className="group-div user-name">
                    <p className='tag-names'>Username</p>
                    <input type="text" id='U' onChange={(e) => inputChangeHandle(e)} className='input-fields' />
                </div>



                <div className="group-div password">
                    <p className='tag-names'>password</p>
                    <input type="password" id='P1' onChange={(e) => inputChangeHandle(e)} className='input-fields' />
                </div>

                <div className="group-div confirm-password">
                    <p className='tag-names'>Conform password</p>
                    <input id='P2' type="password" onChange={(e) => inputChangeHandle(e)} className='input-fields' />
                </div><br />

                <div className="save-signin">
                    <button onClick={() => formSubmitHandler()} id='save-signin-btn'>Save</button>
                </div>

                <div id="login-options">

                    <div id='login-google'>
                        <a href="#"><img src={google_logo} alt="" />Login With Google</a>
                    </div>

                    <div id='login-facebook'>
                        <a href="#"><img src={facebook_logo} alt="" />Login With Google</a>
                    </div>

                </div>

                </div>  
            </div>



            <div className="intro-side">

                <div className="heading-intro"><h1>TextUtils</h1></div>
                <p className='textutils-info-1'>All in One Text Utility App</p>
                <p className='textutils-info-2'>Let's Take First Step towards the quick textutils actions</p>
                
            </div>

        </div>
    )
}