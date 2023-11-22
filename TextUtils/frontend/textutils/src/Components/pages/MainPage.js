import React, { useEffect, useState } from 'react'
import '../css/mainpage.css'
import Navbar from '../js/Navbar'
import Toast from '../js/Toast';

export default function MainPage() {

  const [inpData, setInpData] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("")
  const [toSpeak, setToSpeak] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState("")

  const speakName = (mess) => {
    const message = new SpeechSynthesisUtterance(mess);
    window.speechSynthesis.speak(message);
  }

  useEffect(() => {

    if (toSpeak == false) {
      setTextToSpeech("Welcome to TextUtils")
      speakName(textToSpeech);
      setTimeout(() => {
        setToSpeak(true);
      },3000)
      
    }

  },[toSpeak,textToSpeech])



  const inputTextHander = (e) => {
    setInpData(e.target.value);
    console.log(inpData)
  }

  const setToFalse = () => {
    setTimeout(() => {
      setShowToast(false)
    }, 2000)

  }

  // Handling the copy button 
  const CopyeHandler = () => {
    navigator.clipboard.writeText(inpData)

      .then(() => {
        console.log("Text is Clicked")
      })

      .catch((err) => {
        console.log("error : ", err);
      })
    setToastMessage("Copied");
    setShowToast(true);
    setToFalse();
  }

  const BoldHandler = () => {
    const newText = inpData.bold();
    setInpData(newText);
    setToastMessage("Bolded");
    setShowToast(true);
    setToFalse();
  }

  // Converting to uppercase 
  const upperCaseHandler = () => {
    const newText = inpData.toUpperCase();
    setInpData(newText);
    setToastMessage("UppderCased");
    setShowToast(true);
    setToFalse();
  }

  const SmallCaseHandler = () => {
    const newText = inpData.toLowerCase();
    setInpData(newText);
    setToastMessage("Small Case");
    setShowToast(true);
    setToFalse();
  }

  // Capitalize the Text
  const caplitalizeHandler = () => {
    const newText = inpData.charAt(0).toUpperCase() + inpData.slice(1);
    setInpData(newText);
    setToastMessage("Capitalized");
    setShowToast(true);
    setToFalse();
  }

  // For COnverting to unicode
  const UnicodeHandler = () => {
    var newText;
    for (let i = 0; i < inpData.length; i++) {
      newText += inpData[i].codePointAt();
    }
    setInpData(newText);
    setToastMessage("Unicoded");
    setShowToast(true);
    setToFalse();
  }

  // Clearing The content of the mainboard
  const clearHandler = () => {
    setInpData("");
    setToastMessage("Cleared");
    setShowToast(true);
    setToFalse();
  }

  // Text to speech handler 
  const textToSpeechHandler = () => {
    speakName(inpData);
    setToastMessage("Text to Speech")
    setShowToast(true);
    setToFalse();
  }


  const mes = "This is clicked";

  return (
    <div className='root-home'>
      <div className="navbar-container">
      </div>

      <div className="text-container">

        <div id="title-website"><p>TextUtils :- All In One Tool</p></div>

        <input type="text" value={inpData} onChange={(e) => inputTextHander(e)} className='main-input-field' />

        <div className="action-buttons">
          <button onClick={() => caplitalizeHandler()} className='forAllButton' >Capitalize</button>
          <button onClick={() => SmallCaseHandler()} className='forAllButton' >SmallCase</button>
          <button onClick={() => upperCaseHandler()} className='forAllButton' >upperCase</button>
          <button onClick={() => BoldHandler()} className='forAllButton' >Bold</button>
          <button onClick={() => clearHandler()} className='forAllButton' >clear</button>
          <button onClick={() => UnicodeHandler()} className='forAllButton' >Unicode</button>
          <button onClick={() => textToSpeechHandler()} className='forAllButton' >TextToSpeech</button>
          <button onClick={() => CopyeHandler()} className='forAllButton' >Copy</button>
        </div>

        {showToast && <Toast message={toastMessage} />}

      </div>

    </div>
  )
}