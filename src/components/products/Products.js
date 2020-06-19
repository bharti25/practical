import React, { Component } from 'react';
import Header from './../common/Header';
import Footer from './../common/Footer';
import './../../static/css/styles.css';
import ReactModal from 'react-modal';
import {NavLink} from 'react-router-dom';
import productData from './../data/products.json';

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
    constructor(props) {
        super(props);
        this.state = {
            isMouseOnFig1: false, 
            isMouseOnFig2 : false, 
            isMouseOnFig3 : false,
            showBottomModal: false,
            productId: null,
            total: 0.00,
            dataProduct: [],
            productData,
            sort_term: '',
            newBtn: false,
            selectedId: null,
            count: 0
            }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortAscending = this.sortAscending.bind(this);
        this.sortDescending = this.sortDescending.bind(this);
        this.sortPriceAscending = this.sortPriceAscending.bind(this);
        this.sortPriceDescending = this.sortPriceDescending.bind(this);
        // this.selectItem = this.selectItem.bind(this);
        // this.removeProduct = this.removeProduct.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    mouseEnter(e, i) {
        const recordToEdit = productData.filter((product, index) => {
            return index === i;
        })[0];
        this.setState({isMouseOnFig1 : !this.state.isMouseOnFig1})
        this.state.productId = i+1
    }
    mouseExit(i) {
        this.setState({isMouseOnFig1: false})
    }
    showModal(e, i) {
        e.preventDefault();
        const clickData = productData.filter((data, index) => {
            return index === i;
        })[0];
        this.setState({showBottomModal: true});
        this.state.total =this.state.total + clickData.price;
        localStorage.setItem("total", this.state.total);
        this.state.dataProduct.push(clickData);
        this.setState({count : this.state.count + 1})
        console.log('count', this.state.count)
        this.setState({newBtn: true})
        localStorage.setItem("productList", JSON.stringify(this.state.dataProduct));
    }
    closeModal() {
        this.setState({showBottomModal: false})
    }
    sortDescending(e) {
        e.preventDefault();
        this.setState(prev => {
            this.state.productData.sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            })
        })
    }
    sortAscending(e) {
        e.preventDefault();
        this.setState(prev => {
            this.state.productData.sort((a, b) => {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
        })
    }
    sortPriceAscending() {
        this.setState(prevState => {
          this.state.productData.sort((a, b) => (a.price - b.price))
      });
    }
    sortPriceDescending() {
        this.setState(prevState => {
          this.state.productData.sort((a, b) => (b.price - a.price))
      });
    }
    increment() {
        if (this.state.showBottomModal === true) {
            this.setState({count: this.state.count + 1})
            console.log('count', this.state.count)
        }
    }
    decrement() {
        this.setState({count: this.state.count - 1})
    }
    render() {
        const btnClass = this.state.isMouseOnFig1 ? "visible" : '';
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="gift">                        
                        <div className="dropdown">
                            <button className="dropbtn">Select</button>
                            <ul className="dropdown-content">
                                <li><button className="btn" onClick={this.sortAscending}>Sort A-Z</button></li>
                                <li><button className="btn" onClick={this.sortDescending}>Sort Z-A</button></li>
                                <li><button className="btn" onClick={this.sortPriceDescending}>Price: High to Low</button></li>
                                <li><button className="btn" onClick={this.sortPriceAscending}>Price: Low to High</button></li>
                            </ul>
                        </div> 
                        <div className="list">
                            <ul>
                                {
                                    productData.map((boxDetail, i) => {
                                        return (
                                            <li key={i}>
                                                <figure className="text-center" onMouseEnter={(e) => this.mouseEnter(e, boxDetail.id-1)} onMouseLeave={this.mouseExit.bind(i)}>
                                                    {/* {this.state.isMouseOnFig1 ? <button className="btn add" onClick={(e) => this.showModal(e, boxDetail.id)}>Add to cart</button>: null} */}                                                                                                       
                                                    {/* {
                                                        this.state.newBtn && (this.state.productId === boxDetail.id) ?
                                                        <button className="btn newbtn">2</button>
                                                        :
                                                        <button className={this.state.isMouseOnFig1 && (this.state.productId === boxDetail.id) ? `btn add ${btnClass}` : "btn add not_visible"} onClick={(e) => this.showModal(e, boxDetail.id-1)}>Add to cart</button>                                                                                                        
                                                    } */}
                                                    <button className={this.state.isMouseOnFig1 && (this.state.productId === boxDetail.id) ? `btn add ${btnClass}` : "btn add not_visible"} onClick={(e) => this.showModal(e, boxDetail.id-1)}>Add to cart</button>
                                                    <img src={require(`./../../static/images/${boxDetail.photo}`)} alt="Gift" />
                                                    <figcaption>{boxDetail.name}</figcaption>
                                                    <figcaption>₹{boxDetail.price}</figcaption>
                                                </figure>
                                            </li>
                                        )
                                    })
                                }                                
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
                                    <ul className="selectedproduct">
                                        {
                                            this.state.dataProduct.map((prod, i) => {
                                                return (
                                                    <li className="modalimg">
                                                        {/* <button onClick={this.removeProduct.bind(this, i)}>x</button> */}
                                                        <img src={require(`./../../static/images/${prod.photo}`)} alt="Gift" />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <NavLink to="/card" className="btn complete_box">
                                        Complete Box
                                        ₹ {this.state.total}
                                    </NavLink>
                                </div>
                            </div>
                        </ReactModal>                     
                    </div>
                </div>              
                <Footer/>
            </div>
        )
    }
}
export default Products;