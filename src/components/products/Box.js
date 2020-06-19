import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import {NavLink} from 'react-router-dom';
import boxData from './../data/box.json';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            total: 0.00
            }
        this.showModal = this.showModal.bind(this);
    }
    showModal(e, i) {
        const clickData = boxData.filter((data, index) => {
            return index === i;
        })[0];
        localStorage.setItem("boxId", clickData.id)
        localStorage.setItem("boxName", clickData.name)
        localStorage.setItem("boxPhoto", clickData.photo)
        localStorage.setItem("boxPrice", clickData.price)
        localStorage.setItem("boxColor", clickData.color)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="choosebox">
                        <h3 className="text-center">SELECT A BOX</h3>
                        <p className="text-center">Choose a packaging that speaks to your loved one's style!</p>
                        <div className="giftbox box-1">
                            {
                                boxData.map((boxDetail, i) => {
                                    return (
                                        <NavLink to="/products" key={i} onClick={(e) => this.showModal(e, boxDetail.id-1)}>
                                            <figure className="text-center">
                                            <img src={require(`./../../static/images/${boxDetail.photo}`)} className="imgsize" alt="Box" />
                                                <figcaption>{boxDetail.name}</figcaption>
                                            </figure>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Box;