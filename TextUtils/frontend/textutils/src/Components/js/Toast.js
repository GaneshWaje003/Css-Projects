import React, { useEffect, useState } from 'react'
import "../css/toast.css"
import alert from '../Image/alert_svg.svg'

export default function Toast({message}) {

    const duration = 3000;
    const [toShow,setToShow]=useState(true);

    useEffect(()=>{
      
        const timer = setTimeout(()=>{
            setToShow(false);
             
        },duration);

        return () =>{
            clearTimeout(timer);
        };

    },[]);


  return (
    <>    
     { toShow && (<div className='root-toast'><img src={alert} alt="" /><p>{message}</p> </div>) }
    </>
  )
}
