import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const NavBar = () => {
    const {cartTotalQuantity} = useSelector((state) => state.cart)
    return ( <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                <Link to="/">
                    <a className="navbar-brand" href="#">
                        <img src="..." alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Muzboot
                        </a>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li id="search-form">
                                <form className="d-flex">
                                    <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                                    <input type="text" className="form-control" aria-label="Search" aria-describedby="basic-addon1"/>
                                    </div>
                                </form>
                            </li>
                            <Link to="/cart">
                                <li className='bag'> 
                                    <i className="bi bi-handbag fa-xl"></i> 
                                    <span className='bag-quantity'> <span>{cartTotalQuantity}</span> </span>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SignUp</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav> );
}
 
export default NavBar;