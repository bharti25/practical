import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';

class Review extends Component {
    constructor() {
        super();
        this.state = {
            boxList: [JSON.parse(localStorage.getItem("productList"))],
            lst: []
        }
    }
    componentDidMount() {
        this.setState({boxList: this.state.boxList})
        this.state.boxList.map((u, i) => {
            console.log(u.length)
            for(var j=0; j<u.length; j++) {
                this.state.lst.push(u[j]['name'])
            }
        })
    }
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
                                    <img src={require(`./../../static/images/${localStorage.getItem("boxPhoto")}`)} alt="Card Box" 
                                    className="imgsize" alt="Box" />
                                    {/* <img  /> */}
                                </figure>
                                <div className="msgdetails reviewdetails">
                                    <h4>Your gift-box</h4>
                                    <p>Box Color : {localStorage.getItem("boxColor")}</p>
                                    <p>Box Price : ₹ {localStorage.getItem("boxPrice")}</p>

                                    <h4>Your items</h4>                             
                                    <ul>
                                        {
                                            this.state.lst.map((u, i) => {
                                                return <li key={i}>{i+1}. {u}</li>
                                            })
                                        }
                                    </ul>
                                    <h4>Your Message</h4>
                                    <p>{localStorage.getItem("msg")}</p>

                                    <h4>TOTAL PRICE: ₹ {localStorage.getItem("total")}</h4>
                                    <h4>Your Card:</h4>
                                    <img src = {require(`./../../static/images/${localStorage.getItem("cardPhoto")}`)} 
                                    className="cardimg" alt="Card" />
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