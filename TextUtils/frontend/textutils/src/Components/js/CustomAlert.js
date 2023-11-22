import React from 'react'
import '../css/customalert.css'
import alert from '../Image/alert_svg.svg'

export default function CustomAlert({message,closeAction}) {

  const CloseTheDialot = () => {
    closeAction();
  }

    return (
    
    <div className='root-custom-alert' >
      
      <div className="main-custom-alert">

      <div className="alert-dailog-message">
      <img src={alert} alt="" />
      <p>{message}</p>
      </div>

      <div className="ok-alert-container">
      <button onClick={()=>CloseTheDialot()} className="ok-dialog-button">Ok</button>
      </div>
      </div>
        
    </div>
  )
}
