import React, { useState } from 'react'
import "../css/navbar.css"
import menu from '../Image/menu_svg.svg'
import login_logo from '../Image/user_svg.svg'
import goback from '../Image/backSpace_svg.svg'
import RadioButton from './RadioButton'
import { Link, NavLink } from 'react-router-dom'


function Navbar({Username}) {

  const [leftn, setLeft] = useState(-50);
  const [toShow, setToShow] = useState(false);
  const [radioFlag, setRadioFlag] = useState(false);
  const [backg, setBackg] = useState("#fff");



  const openMenu = () => {

    if (toShow == false) {
      setLeft(0);
      setToShow(true);
    } else {
      setLeft(-50);
      setToShow(false)
    }
  }

  const closeMenu = () => {
    setLeft(-50);
    setToShow(false);
  }

  /* If the radio button is Clicked Handling */
  const clickedRadio = () => {

    if (!radioFlag) {
      setBackg("#ddd");
      setRadioFlag(true);
    } else {
      setBackg("#fff");
      setRadioFlag(false);
    }
  }


  /* handling the navlink tags of li */

  const linkClickHandler = () => {
    setLeft(-50);
    setToShow(false)
  }



  return (
    <div id='root-navbar'>
      <div className="container-navbar">
        <div className="menu-logo" style={{ backgroundColor: backg }}>
          <a href="#" onClick={() => openMenu()}  ><img src={menu} alt="" /></a>
          <div className="radio-button-container"><RadioButton radioClicked={() => clickedRadio()} /></div>
        </div>

        <div className="menu" style={{ left: `${leftn}%` }}  >
          <div className="header-navbar">

            <div className="header-image-user-container">

              <div className="user-image">
                <img src={login_logo} alt="" />
              </div>

              <div className="user-name-navbar">
                <p>{Username}</p>
                <p>Username</p>
              </div>

            </div>

          </div>
          {/* <input className='menu-search' type="text" placeholder='Search' /> */}
          <nav>
            <ul>
              <li><NavLink className="link-tags" onClick={() => linkClickHandler()} to="/" ><img src={login_logo} alt="" /><p>Home</p></NavLink></li>
              <li><NavLink className="link-tags" onClick={() => linkClickHandler()} to="/login"><img src={login_logo} alt="" /><p>Login</p></NavLink></li>
              <li><NavLink className="link-tags" onClick={() => linkClickHandler()} to="/guess_game"><img src={login_logo} alt="" /><p>Guess The Card</p></NavLink></li>
              <li><NavLink className="link-tags" onClick={() => linkClickHandler()} href="#"><img src={login_logo} alt="" /><p>Share</p></NavLink></li>
              <li><NavLink className="link-tags" onClick={() => linkClickHandler()} to="/settings"><img src={login_logo} alt="" /><p>Settings</p></NavLink></li>
            </ul>
          </nav>


          <a className='goBack' onClick={() => closeMenu()} href="#"><img src={goback} alt="" /></a>

        </div>

      </div>
    </div>
  )
}

export default Navbar;