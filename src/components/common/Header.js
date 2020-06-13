import React, { Component } from 'react';
import logo from './../../static/images/logo.png';
import './../../static/css/styles.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <div className="logo text-center">
                            <img src={logo} alt="Piece of Heaven" />
                        </div>
                        <nav className="navbar text-center">
                            <ul className="menu">
                                <li><a href="#">Shop Gifts</a></li>
                                <li><a href="#">Top 50 Gifts</a></li>
                                <li><a href="#">Timeless Roses</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Inspire Bracelets</a></li>
                            </ul>
                        </nav>
                        <div className="steps text-center">
                            {/* <hr></hr> */}
                            <ul>
                                <li>
                                    <hr></hr>
                                    <div className="circle"></div>
                                    <NavLink to="/" exact activeClassName="active">                                
                                        <h5>STEP 1</h5>
                                        <h6>SELECT YOUR PACKAGING</h6>
                                    </NavLink>
                                </li>
                                <li>
                                    <hr></hr>
                                    <div className="circle"></div>
                                    <NavLink to="/products" activeClassName="active">
                                        <h5>STEP 2</h5>
                                        <h6>CHOOSE YOUR GIFTS</h6>
                                    </NavLink>
                                </li>
                                <li>
                                    <hr></hr>    
                                    <div className="circle"></div>                                
                                    <NavLink to="/card" activeClassName="active">
                                        <h5>STEP 3</h5>
                                        <h6>PERSONALISE IT</h6>
                                    </NavLink>                            
                                </li>
                                <li>
                                    <hr></hr>
                                    <div className="circle"></div>
                                    <NavLink to="/review" activeClassName="active">
                                        <h5>STEP 4</h5>
                                        <h6>REVIEW</h6>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;