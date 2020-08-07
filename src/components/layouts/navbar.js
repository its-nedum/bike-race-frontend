import React from 'react'
import { Link } from 'react-router-dom'
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
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/photos">Photos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/locations">Locations</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/riders">Riders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contest">Contest</Link>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar
