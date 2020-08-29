import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-center justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/photos">Photos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/locations">Locations</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/riders">Riders</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/contest">Contest</NavLink>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
