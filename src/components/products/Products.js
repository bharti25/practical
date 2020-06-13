import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import './../../static/css/styles.css';
import gift_1 from './../../static/images/emoji_mug.png';
import gift_2 from './../../static/images/gift_1.png';
import gift_3 from './../../static/images/gift_2.png';
import gift_4 from './../../static/images/gift_3.png';
import ReactModal from 'react-modal';
import {NavLink} from 'react-router-dom';

const modalStyle = {
    content: {
        border: 'none',
        background: 'white',
        padding: '0',
        bottom: '0px'
    },
    overlay: {
        height: '150px', 
        marginTop: '37%',
        backgroundColor: 'white',
        borderTop: '1px solid #ccc'
    }
}

// we can loop through the gifts to show add button on hover when we use APIs
class Products extends Component {
    constructor() {
        super();
        this.state = {
            isMouseOnFig1: false, 
            isMouseOnFig2 : false, 
            isMouseOnFig3 : false,
            showBottomModal: false
            }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
        this.mouseEnterFig2 = this.mouseEnterFig2.bind(this);
        this.mouseExitFig2 = this.mouseExitFig2.bind(this);
        this.mouseEnterFig3 = this.mouseEnterFig3.bind(this);
        this.mouseExitFig3 = this.mouseExitFig3.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    mouseEnter() {
        this.setState({
            isMouseOnFig1 : true
        })
    }
    mouseExit() {
        this.setState({isMouseOnFig1: false})
    }
    mouseEnterFig2() {
        this.setState({
            isMouseOnFig2 : true
        })
    }
    mouseExitFig2() {
        this.setState({isMouseOnFig2: false})
    }
    mouseEnterFig3() {
        this.setState({
            isMouseOnFig3 : true
        })
    }
    mouseExitFig3() {
        this.setState({isMouseOnFig3: false})
    }
    showModal() {
        this.setState({showBottomModal: true})
    }
    closeModal() {
        this.setState({showBottomModal: false})
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="gift">
                        <select>
                            <option>A-Z</option>
                            <option>Z-A</option>
                            <option>Price: High to Low</option>
                            <option>Price: Low to High</option>
                        </select>
                        <div className="list">
                            <ul>
                                <li>
                                    <figure className="text-center" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
                                        {this.state.isMouseOnFig1 ? <button className="btn add" onClick={this.showModal}>Add to cart</button>: null}
                                        <img src={gift_1} alt="Gift" />
                                        <figcaption>Emoji Cups</figcaption>
                                        <figcaption>₹500.00</figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure className="text-center" onMouseEnter={this.mouseEnterFig2} onMouseLeave={this.mouseExitFig2}>
                                        {this.state.isMouseOnFig2 ? <button className="btn add" onClick={this.showModal}>Add to cart</button>: null}                                        
                                        <img src={gift_2} alt="Gift" />
                                        <figcaption>Gift 2</figcaption>
                                        <figcaption>₹500.00</figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure className="text-center" onMouseEnter={this.mouseEnterFig3} onMouseLeave={this.mouseExitFig3}>
                                        {this.state.isMouseOnFig3 ? <button className="btn add" onClick={this.showModal}>Add to cart</button>: null}                                        
                                        <img src={gift_4} alt="Gift" />
                                        <figcaption>Gift 3</figcaption>
                                        <figcaption>₹500.00</figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>   
                        <ReactModal
                            isOpen={this.state.showBottomModal}
                            onRequestClose={this.closeModal}
                            ariaHideApp={false}
                            style={modalStyle}
                        >
                            <div className="wrapper">
                                <div className="bottomModal">
                                    <NavLink to="/card" className="btn complete_box">
                                        Complete Box
                                        ₹ 500.00
                                    </NavLink>
                                </div>
                            </div>
                        </ReactModal>                     
                    </div>
                </div>
                {/* {
                    this.state.showBottomModal ?
                    <div className="bottomModal">
                        <button>
                            Complete Box
                            ₹ 500.00
                        </button>
                    </div>
                    :
                    null
                } */}                
                <Footer/>
            </div>
        )
    }
}
export default Products;