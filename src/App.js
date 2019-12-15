import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Blog from './Blog';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Form from'./Form';
//import service from './Service';
//<div id="preloader"></div>

function App() {
  return (
    <div  className="App" id="top">
        <div id="preloader"></div>

      
      
     
      <NavBar/>

      

       
      <Service/>
      <About/>
      
      <Blog/>
      <Portfolio/>
      <Contact/>
      <Form/>      <Footer/>
      
      
    </div>
  );
}

export default App;
