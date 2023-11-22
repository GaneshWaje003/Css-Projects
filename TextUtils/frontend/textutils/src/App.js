import logo from './logo.svg';
import './App.css';
import Navbar from './Components/js/Navbar';
import { useState } from 'react';
import MainPage from './Components/pages/MainPage';
import Login from './Components/pages/Login';
import { BrowserRouter } from 'react-router-dom';


function App() {

  
  /* 
  const [data,setData] =useState({name:"gsw",id:12}); 
  const Clickedbutton = async () =>{

    alert("clicked")

    fetch('http://localhost:1000/login',{

      method:'POST',

      headers:{
        'Content-Type':'application/json'
      },
      
      body:JSON.stringify(data)
      
    })

    .then(res=>{
      console.log(res);
    })

    .catch(error=>{
      console.log(error);
    })
  }
*/

  return (


    <div id='root-app'  >

      <div id="container-1">
          
          <MainPage/>

          {/* <button onClick={()=>Clickedbutton()}>click</button> */}

      </div>

    </div>

  );
}

export default App;
