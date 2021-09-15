import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll"

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="About">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Experience">Experiences</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Technologies">Technologies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contactme">Contact me</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
