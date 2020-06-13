import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import {NavLink} from 'react-router-dom';
import card_1 from './../../static/images/1.png';
import card_2 from './../../static/images/2.png';

class Card extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="choosebox">
                        <h3 className="text-center">CREATE YOUR PIECE OF HEAVEN</h3>
                        <p className="text-center">Choose the perfect card for the occasion from our selection of exclusive
                        designs and upload two of your favorite photos</p>
                        <div className="card box-1">
                            <NavLink to="/card/message" activeClassName="active">
                                <figure>
                                    <img src={card_1} alt="Card Box" className="imgsize" />
                                    <figcaption className="text-center">Baby Girl Dress Keychain</figcaption>
                                </figure>
                            </NavLink>
                            <NavLink to="/card/message" activeClassName="active">
                                <figure>
                                    <img src={card_2} alt="Card Box" className="imgsize" />
                                    <figcaption className="text-center">Baby Onesie Keychain</figcaption>
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
export default Card;