import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import {NavLink} from 'react-router-dom';

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
        this.saveMsg = this.saveMsg.bind(this);
    }
    saveMsg(e) {
        localStorage.setItem('msg', document.getElementById('msg').value)
        this.props.history.push('/review')
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
                                    <img src={require(`./../../static/images/${localStorage.getItem('cardPhoto')}`)} alt="Card Box" className="imgsize" />
                                    <figcaption className="text-center"><NavLink to="/card">
                                        (Change Card)
                                    </NavLink></figcaption>
                                </figure>
                                <div className="msgdetails">
                                    <p>Message on card</p>
                                    <h4>{this.state.chars_left} character(s) left</h4>
                                    <textarea id="msg" onChange={this.handleChange.bind(this)} maxLength='350'></textarea>
                                    <h4>350 characters max limit</h4>
                                    <p><input type="checkbox" /> Click here if you want to hand write your message and we'll send you the
                                    blank greeting card with your photos
                                    </p>
                                    <button onClick={this.saveMsg} className="btn">Save Message and Card</button>
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