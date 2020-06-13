import React, {Component} from 'react';
import "./../../static/css/styles.css";

class Footer extends Component {
    render() {
        return(
            <div>
                <footer className="footer">
                    <div className='wrapper'>
                        <ul className="box box-1">
                            <h4>Stay in loop on what's new</h4>
                            <input type="email" placeholder="email@example.com" />
                            <button className="btn">Go</button>
                        </ul>
                        <ul className="box box-2">
                            <h4>Customer Care</h4>
                            <p>Get answers to your questions</p>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shipping and Returns</a></li>
                        </ul>
                        <ul className="box box-3">
                            <h4>Featured Collections</h4>
                            <p>Browse our popular products</p>
                            <li><a href="#">Top 50 Best Sellers</a></li>
                            <li><a href="#">Unisex Gifts</a></li>
                            <li><a href="#">Timeless Roses</a></li>
                            <li><a href="#">Inspire Bracelets</a></li>
                        </ul>
                        <ul className="box box-4">
                            <h4>Keep in touch</h4>
                            <p>+91-22-49727400</p>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;