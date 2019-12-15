import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class Contact extends Component {
    render() {
      return (
        <div>
   
        <section>
		<div className="container-fluid">
				<div className="row color-bg">
				    <div className="col-md-6 nopadding subscribe text-center">
					 <h1><i className="fa fa-paper-plane"></i><span>Subscribe our Newsletter</span></h1>
                     <form >
                       <input type="text" name="" value="" placeholder="" required/>
                       <input type="submit" name="" value="Send"/>
                    </form>   
					</div>
					<div className="col-md-6 nopadding features-intro-img">
						 <div className="about-image" style={{backgroundImage:'url(img/newsletter.png)'}}></div>
					</div>
				</div>
			</div>
        </section>
	
        <section className="text-center section-padding contact-wrap" id="contact">
		  
          <a href="/#" className="up-btn"><i className="fa fa-chevron-up"></i></a>
          <div className="container">
		    
            <div className="row">
              <div className="col-md-12">
                <h1 className="arrow">Drop <span>me</span> a line</h1>
              </div>
            </div>
            <div className="row contact-details">
			 
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-map-marker"></i><span>Address</span></h2>
                  <p>23 Ipsum street, New York</p>
                </div>
              </div>
			 
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-mobile"></i><span>Phone</span></h2>
                  <p>+12 345 6789</p>
                </div>
              </div>
			
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-paper-plane"></i><span>Email</span></h2>
                  <p><a href="/#">info@themewagon.com</a></p>
                </div>
              </div>
            </div>
			<div className="row">
			  
			  <div className="col-md-6">
			    <div id="googlemaps"></div>
			  </div>
			 
			  <div className="col-md-6 contact">
			     <form >
				            
                            <div className="row">
                                <div className="col-md-6">
								    
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
								   
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email address"/>
                                    </div>
                                </div>
                            </div>
							
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Write you message here..." style={{height:'232px'}}></textarea>
                            </div>
							
                            <button type="submit" className="btn btn-send">
                                Send message
                            </button>
                        </form>
			  </div>
			</div>
			<br/>
			
            <div className="row">
              <div className="col-md-12">
                <ul className="social-buttons">
                  <li><a href="/#" className="social-btn"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="/#" className="social-btn"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="/#" className="social-btn"><i className="fa fa-facebook"></i></a></li>
				  <li><a href="/#" className="social-btn"><i className="fa fa-deviantart"></i></a></li>
				  <li><a href="/#" className="social-btn"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
	
	
        </div>
            
        
      )}

      }