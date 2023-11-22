import React, { useState } from 'react'
import "../css/mainpage.css"


export default function RadioButton(Props) {
  
    const [pos,setPos]=useState("20");
    const [posFlag,setPosFlag] = useState(false);

    const radioButtonClicked = () =>{

        if(!posFlag){
            setPos("0");
            setPosFlag(true);
        }else{
            setPos("20");
            setPosFlag(false);
        }

    }

  
    return (

    <div className='root-radio-button'>
      <div onClick={Props.radioClicked} className='mode-radio-button'><button style={{right:`${pos}px`}} onClick={()=>radioButtonClicked()} className='circle-radio-button'></button></div>
    </div>
  )
}
