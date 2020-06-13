import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import {NavLink} from 'react-router-dom';
import card_1 from './../../static/images/1.png';
import card_2 from './../../static/images/2.png';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            chars_left: 350
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var input = event.target.value;
        this.setState({
            chars_left: 350 - input.length
        });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="choosebox">
                        <h3 className="text-center">CREATE YOUR PIECE OF HEAVEN</h3>
                        <p className="text-center">Choose the perfect card for the occasion from our selection of exclusive
                        designs and upload two of your favorite photos</p>
                        <div className="card box-1 message">
                            <div>
                                <figure>
                                    <img src={card_2} alt="Card Box" className="imgsize" />
                                    <figcaption className="text-center"><NavLink to="/card">
                                        (Change Card)
                                    </NavLink></figcaption>
                                </figure>
                                <div className="msgdetails">
                                    <p>Message on card</p>
                                    <h4>{this.state.chars_left} character(s) left</h4>
                                    <textarea onChange={this.handleChange.bind(this)}></textarea>
                                    <h4>350 characters max limit</h4>
                                    <p><input type="checkbox" /> Click here if you want to hand write your message and we'll send you the
                                    blank greeting card with your photos
                                    </p>
                                    <NavLink to="/review" className="btn">Save Message and Card</NavLink>
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
export default Message;