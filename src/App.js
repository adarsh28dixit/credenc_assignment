import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import ProductModal from './components/ProductModal';
import PricingModal from './components/PricingModal/PricingModal';
import EditingModal from './components/EditModal/EditModal';

function App() {
  const[pic, setPic] = useState();

  useEffect(() => {
    axios.get('https://product-demo-credenc.herokuapp.com/logo/')
    .then(res => {
      setPic(res.data.logo)
    })
    
  },[])
  
  return (
    <BrowserRouter>
    <>
      <div className="nav">
        <div className="nav-left">
          <ul>
            <li className="logo"><img src={`data:image/png;base64, ${pic}`} alt=""  style={{width: '40px'}}/></li>
            <li className="logo-name">CREDENC PRICER</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li><i className="fa fa-bell-o" aria-hidden="true"></i></li>
            <li style={{textAlign: 'center', width:" 25px", height: "25px", backgroundColor: "grey",borderRadius:"3px"}}>S</li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="left-bar">
          <ul>
            <li><i className="fa fa-suitcase" aria-hidden="true"></i> Sofa</li>
            <li><i className="fa fa-bath" aria-hidden="true"></i> Bath Tub</li>
            <li> <i className="fa fa-desktop" aria-hidden="true"></i> Desktop</li>
            <li><i className="fa fa-suitcase" aria-hidden="true"></i> School Bag</li>
          </ul>

          <button
            type="button"
            className="btn btn-secondary"
            
          >
            <ProductModal/>
          </button>
          
          
        </div>

        <div className="right-bar">
          <div className="right-bar-upper">
            <ul>
              <li className="active"> All</li>
              <li> Subscription</li>
              <li> Lumpsum</li>
              <li> EMI </li>
            </ul>
            <button
              type="button"
              className="btn btn-secondary"
             
            >
              <PricingModal/>
            </button>
            
            
          </div>
          <div className="right-bar-below">
            <div className="row">
              <ul>
                <li className="a"> Pricing option1</li>
                <li className="b"> Bath Tub</li>
                <li className="c"> ₹2000/year</li>
                <li className="d"> Subscription </li>
                <li className="e"> Active </li>
              </ul>
            </div>

            <div className="row">
              <ul>
                <li className="a"> Pricing option1</li>
                <li className="b"> Bath Tub</li>
                <li className="c"> ₹2000/year</li>
                <li className="d"> EMI </li>
                <li className="e"> <EditingModal/> </li>
              </ul>
            </div>

            <div className="row">
              <ul>
                <li className="a"> Pricing option1</li>
                <li className="b"> Bath Tub</li>
                <li className="c"> ₹2000/year</li>
                <li className="d"> EMI </li>
                <li className="e"> Active </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
    </BrowserRouter>
  );
}

export default App;
