import React from 'react'

// Logo
import Logo from '../../assets/images/logo.png';
import ShoppingCart from '../../assets/svg/shopping-cart.svg';
import HamburgerMenu from '../../assets/svg/hamburger-menu.svg';

// Subcomponents
import Searcher from '../searcher/Searcher'

function Navbar() {
    return (
        <nav className="navbar-jussi">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-3 col-lg-2 navbar-jussi-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="col col-md-3 col-lg-4 navbar-jussi-menu">
                        <ul className="navbar-jussi-menu-options">
                            <li>
                                <a href="#">Nossas Soluções</a>
                            </li>
                            <li>
                                <a href="#">Coneça a Jussi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-md-6 col-lg-6 navbar-jussi-searcher">
                        <Searcher />
                        <div className="navbar-jussi-btn-login">Login</div>
                        <div><img src={ShoppingCart} alt="Shopping Cart" /></div>
                        <div className="navbar-jussi-hamburger-menu">
                            <svg viewBox="0 0 100 80" width="24" height="24">
                                <rect width="80" height="14" rx="8"></rect>
                                <rect y="30" width="80" height="14" rx="8"></rect>
                                <rect y="60" width="80" height="14" rx="8"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
