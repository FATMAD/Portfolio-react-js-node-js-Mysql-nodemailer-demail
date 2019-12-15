import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
//import { BrowserRouter, Route } from "react-router-dom";
//import Blog from './Blog';
//import Home from './Home';
//import Portfolio from './Portfolio';
//import About from './About';
//import Contact from './Contact';
//import Service from './Service';
/*<BrowserRouter>
                        <Route path="/"  components={Home}/><i className="fa fa-fw fa-home" ></i><span>Home</span>
                        <Route path="/"  components= {About}><i className="fa fa-fw fa-quote-left"></i><span>About</span></Route>
                        <Route path="/"  components= {Service}><i className="fa fa-fw fa-globe" ></i><span>Service</span></Route>
                        <Route path="/" components= {Portfolio}> <i  className="fa fa-fw fa-picture-o"></i><span>Portfolio</span></Route>
                        <Route path="/"  components= {Blog}><i className="fa fa-fw fa-rss"></i><span>Blog</span></Route>
                        <Route path="/" components= {Contact}><i className="fa fa-fw fa-envelope-o" ></i><span>Contact</span></Route>
                    </BrowserRouter> */

export default class NavBar extends Component {
    render() {
      return (
     <div id="home" >

            <div className="container-fluida">
              <div className="row">
                <div className="">
				<nav className="">
                    
				    
					<div className="">
                   
                        <a href="/#"><i className="fa fa-fw fa-home" ><span>Home</span></i></a>
                        <a href="/#"><i className="fa fa-fw fa-quote-left"><span>About</span></i></a>
                        <a href="/#"><i className="fa fa-fw fa-globe" ><span>Service</span></i></a>
                        <a href="/#"> <i  className="fa fa-fw fa-picture-o"><span>Portfolio</span></i></a>
                        <a href="/#"><i className="fa fa-fw fa-rss"><span>Blog</span></i></a>
                        <a href="/#"><i className="fa fa-fw fa-envelope-o" ><span>Contact</span></i></a>
                   </div>
                   
					
                    
				</nav>
			    </div>
			    <button className="menu-button" id="open-button"></button>
              </div>
            </div>




            <section className="hero" id="hero">
            <div className="container">
			 
              <div className="row">
                <div className="col-md-12 text-right navicon">
                  <a id="nav-toggle" className="nav_slide_button" href="/#"><span></span></a>
                </div>
              </div>
			  
              <div className="row">
                <div className="col-md-8 col-md-offset-1 inner">
                  <h1 className="animated fadeInDown">
                    J<span style={{color:'#E04343'}}>o</span>hn<br/>
                    <span>D<span style={{color:'#FFE800'}}>o</span>e</span>
                  </h1>
                  <h3 className="animated fadeInUp delay-05s"><span className="rotate">Web Designer,Photographer,3d Artist</span></h3>
                </div>
              </div>
			  
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <a href="/#" className="scrollto wow fadeInUp delay-5s ">
			            <p>SEE MORE</p>
			            <p className="scrollto--arrow"><img src="img/scroll-down.png" alt="scroll down arrow"/></p>
			        </a>
                </div>
              </div>
            </div>
          </section>
          <section className="intro text-center section-padding color-bg" id="about">
          <div className="container">
		   
            <div className="row">
              <div className="col-md-8 col-md-offset-2 wp1">
                <h1 className="arrow">A little <span>about</span> me</h1>
				<p>draw freely upon my imagination. The point is that when I see a sunset or a <a href="/s#">waterfall</a> or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.</p>
              </div>
            </div>
          </div>
        </section>   


    </div>    
            
		  
    
            
        
      )}

      }