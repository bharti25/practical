import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import peach from './../../static/images/peach.png';
import black from './../../static/images/black.png';
import {NavLink} from 'react-router-dom';

class Box extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="choosebox">
                        <h3 className="text-center">SELECT A BOX</h3>
                        <p className="text-center">Choose a packaging that speaks to your loved one's style!</p>
                        <div className="giftbox box-1">
                            <NavLink to="/products">
                                <figure className="text-center">
                                    <img src={peach} alt="Peach Box" className="imgsize" />
                                    <figcaption>Peach</figcaption>
                                </figure>
                            </NavLink>
                            <NavLink to="/products">
                                <figure className="text-center">
                                    <img src={black} alt="Black Box" className="imgsize" />
                                    <figcaption>Black</figcaption>
                                </figure>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Box;