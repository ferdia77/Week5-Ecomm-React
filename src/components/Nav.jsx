import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from '../assets/Library.svg'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }
    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/Books">
                            Books
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                       <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__link">
                            <Link to="">
                                Home 
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="">
                                Books
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;