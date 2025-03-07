import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const[isScroll,setIsScroll]=useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  function handleScroll(){
    if(window.scrollY > 20){
      setIsScroll(true);
  }else{
    setIsScroll(false);
  }}
  window.addEventListener('scroll',handleScroll)

  return (
    <nav className={`${isScroll? 'py-1':'py-3'} navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 end-0`}>
      <div className="container-fluid mx-5">
        <NavLink className="navbar-brand fs-2 fw-bold" to="/">
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
