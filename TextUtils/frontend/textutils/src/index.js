import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/pages/Login';
import Navbar from './Components/js/Navbar';
import Guess from './Components/pages/Guess';
import Signup from './Components/pages/Signup';
import AdminOptions from './Components/pages/AdminOptions';
import Setting from './Components/pages/Setting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path='/' element={<App/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/guess_game' element={<Guess/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/admin-options-page' element={<AdminOptions/>} />
      <Route path='/settings' element={<Setting/>} />
      

    </Routes>

  
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
