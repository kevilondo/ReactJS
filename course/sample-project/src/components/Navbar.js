import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {

    return (

        <nav className="navbar navbar-fixed-top navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand"> <h1>LOGO</h1> </a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"> <NavLink to="/" className="nav-item nav-link">Home</NavLink> </li>
                        <li className="nav-item"> <NavLink to="/about" className="nav-item nav-link">About</NavLink> </li>
                        <li className="nav-item"> <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);