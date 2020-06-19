import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import cardData from './../data/card.json';

class Card extends Component {
    constructor(props) {
        super(props);
        this.saveToLocal = this.saveToLocal.bind(this);
    }
    saveToLocal(e, i) {
        const clickData = cardData.filter((data, index) => {
            return index === i;
        })[0];
        console.log('selected item', clickData)
        this.props.history.push('/card/message')
        localStorage.setItem("cardId", clickData.id)
        localStorage.setItem("cardPhoto", clickData.photo)
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
                        <div className="card box-1">
                            {
                                cardData.map((cardDetail, i) => {
                                    return (
                                        <button onClick={(e) => this.saveToLocal(e, cardDetail.id-1)} key={i}>
                                            <figure className="text-center">
                                                <img src={require(`./../../static/images/${cardDetail.photo}`)} className="imgsize" alt="Cards"/>
                                                <figcaption>{cardDetail.name}</figcaption>
                                            </figure>
                                        </button>
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
export default Card;