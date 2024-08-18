import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom' ;

const Navbar = (props) => {
  return (
    <>
   
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            {props.title}
          </a> */}
          <Link className="navbar-brand" to="/textform">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/alert">
                  Home
                </Link>
              </li>
             <li className="nav-item">
            
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
           

            {/* <form className="d-flex" role="search">
            <div className={`form-check form-switch text-${props.greenMode}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.greenmode}
                />
                <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {props.modeTxt}
                </label>
              </div> */}


              <div className={`form-check form-switch text-${props.colorMode}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.jode}
                />
                <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {props.modeTxt}
                </label>
              </div>
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <button className="btn btn-outline-success" type="submit"> */}
                
              {/* </button> */}
            {/* </form> */}
          </div>
        </div>
      </nav>
     
      <br></br>
    </>
  );
};

export default Navbar;


