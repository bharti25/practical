import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Products from './components/products/Products';
import Box from './components/products/Box';
import Card from './components/products/Card';
import Message from './components/products/Message';
import Review from './components/products/Review';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Box} />
          <Route path="/products" component={Products} />
          <Route path="/card" exact component={Card} />
          <Route path="/card/message" component={Message} />
          <Route path="/review" component={Review} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
