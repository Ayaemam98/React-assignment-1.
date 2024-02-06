import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navFotterBg">
                <div className="container">

                    <Link className="navbar-brand text-white fs-3 fw-bold" to=''>START FRAMEWORK</Link>

                    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarSupportedContent" className="navbar-collapse collapse show" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2" to='about' aria-current="page" >ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2" to='portofolio'>PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-white fw-bold mt-3 mt-md-0 px-2" to='contact'>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
