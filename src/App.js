import React from 'react';
import Navbar from './navbar';
import Header from './header';
import About from './About';
import Device from './Device';
import Age from './Age';
import Download from './Download';
import Application from './append';
import Footer from './footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Download/>
      <Application/>
      <Footer/>
      {/* <Cart/> */}

    </div>
  );
}

export default App;
// import Navbar from './navbar';
// import Header from './Header';
// import Cart from './cart';
