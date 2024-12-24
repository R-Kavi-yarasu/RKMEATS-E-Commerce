import React from 'react'
// import Home from './Home'
import navlogo from '../assests/RK-meats.png'
import { NavLink } from "react-router-dom";
import './Main.css'
// import Home from './Home';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useCart } from 'react-use-cart'

export default function Main() {
  const {totalUniqueItems} = useCart()
  return (
    <div id='main-page'>
      <div className="main-navbar">
        <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand ms-3 " to="/">
              <img src={navlogo} alt="logo" width={"200px"}/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink id='hover-nav' className="nav-link fs-lg-5 pe-4" activeClasName="active" to="/"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#dc3545"
                        : "white",
                    })}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink id='hover-nav' className="nav-link fs-lg-5 pe-4" to="/about"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#dc3545"
                        : "white",
                    })}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink id='hover-nav' className="nav-link fs-lg-5 pe-4" to="/meats"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#dc3545"
                        : "white",
                    })}>Meats</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink id='hover-nav' className="nav-link fs-lg-5 pe-4" to="/contect"
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#dc3545"
                        : "white",
                    })}>Contact</NavLink>
                </li>
              </ul>

              <ul id='icon-nav' className="navbar-nav mx-3 d-lg-flex gap-4 mb-2 mb-lg-0">
                <li className="nav-item fs-4">
                  <OverlayTrigger placement='bottom' overlay={<Tooltip >Login</Tooltip>}>
                    <NavLink to="/login" className="text-light">
                      <i className="bi bi-box-arrow-in-right"></i>
                    </NavLink>
                  </OverlayTrigger>
                </li>
                <li className="nav-item fs-4">
                  <OverlayTrigger placement='bottom' overlay={<Tooltip >SignUp</Tooltip>}>
                    <NavLink to="/signup" className="text-light">
                      <i className="bi bi-person-fill"></i>
                    </NavLink>
                  </OverlayTrigger>
                </li>
                <li className="nav-item fs-4">
                  <OverlayTrigger placement='bottom' overlay={<Tooltip >Cart</Tooltip>}>
                    <NavLink to="/cart" className="text-light position-relative" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" >
                      <i className="bi bi-cart-fill "></i>
                      <span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">{totalUniqueItems}
                        <span class="visually-hidden">Add Cart</span>
                      </span>
                    </NavLink>

                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </div >
    </div >
  )
}
