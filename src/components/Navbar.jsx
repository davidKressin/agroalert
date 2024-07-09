import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from "../assets/img/agroalertLogo.png";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" >
            <div className="col-12 row m-0">
                <Link className="navbar-brand text-center" style={{"height":"125px"}} to="home">
                <img src={image} className="h-100" style={{"position":"relative", "top":"0px"}} alt="" />
                {/* <i className="fa-solid fa-brain"></i> */}
                {/* &nbsp; */}
                    {/* AGROALERT */}
                </Link>
                {/* <button className="navbar-toggler" style={{"zIndex":"99"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="text-center px-5
                /collapse 
                /navbar-collapse " 
                // style={{"zIndex":"99"}} 
                id="/navbarNav">
                    {/* <ul className="navbar-nav"> */}
                        {/* <li className="nav-item"> */}
                            <NavLink className="/nav-link btn btn-light " aria-current="page" to="home">Home</NavLink>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                            <NavLink className="/nav-link btn btn-light" to="login">login</NavLink>
                        {/* </li> */}
                    {/* </ul> */}
                </div>
            </div>
        </nav>
    )
}
