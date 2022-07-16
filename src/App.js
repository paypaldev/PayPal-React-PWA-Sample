import React from 'react';
import icon from './assets/icons/icon.png'
import './App.css';
import Items from './components/Items';


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
      <Items/>
    </div>
  );
}

export default App;
