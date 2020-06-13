import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import peach from './../../static/images/peach.png';
import black from './../../static/images/black.png';
import {NavLink} from 'react-router-dom';

class Review extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="choosebox">
                        <h3 className="text-center">YOUR GIFT BOX</h3>
                        <div className="card box-1 message review">
                            <div>
                                <figure>
                                    <img src={black} alt="Card Box" className="imgsize" />
                                </figure>
                                <div className="msgdetails reviewdetails">
                                    {/* <h4>{this.state.chars_left} character(s) left</h4>
                                    <textarea onChange={this.handleChange.bind(this)}></textarea> */}
                                    <h4>Your gift-box</h4>
                                    <p>Box Color : Black</p>
                                    <p>Box Price : ₹100.00</p>

                                    <h4>Your items</h4>
                                    <p>1. Emoji Mugs</p>
                                    
                                    <h4>Your Message</h4>
                                    <p>Hello World</p>

                                    <h4>TOTAL PRICE: ₹4595.00</h4>
                                    <button className="btn cartbtn">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Review;