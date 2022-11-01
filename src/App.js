import React from 'react';
import icon from './assets/icons/icon.png'
import './App.css';
import Items from './components/Items';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "YOUR-CLIENT-ID-HERE",
  currency: "USD",
  intent: "capture",
};

function App() {
    return (
    <div className="App">
          <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="index.html">
                        <img src={icon} alt="logo" className="logo" />
                    </a>
                </div>
            </div>
          </nav>
          <PayPalScriptProvider>
            <Items/>
          </PayPalScriptProvider>
    </div>
  );
}

export default App;
