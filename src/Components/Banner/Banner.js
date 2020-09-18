import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      
            <div id="carouselExampleControls" className="carousel slide banner" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h6>Are you ready to Travel?</h6>
                            <h1>Travel With Fun</h1>
                            <h1>on <span className="span-color">any Place</span> </h1>
                            <p className="banner-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsam sequi pariatur quos quo repellendus assumenda consequatur velit nulla nisi consequuntur rerum cupiditate, eius magnam expedita tempora excepturi earum vitae optio vel impedit suscipit enim? Consectetur porro dicta magni sunt laudantium quibusdam? Ut voluptates dolore natus fugit quisquam ab odio!</p>
                        </div>
                        
                    </div>
                  </div>     

                  <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                        <h6>Are you ready to Travel?</h6>
                            <h1>Travel With Fun</h1>
                            <h1>on <span className="span-color">any Place</span> </h1>
                            <p className="banner-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsam sequi pariatur quos quo repellendus assumenda consequatur velit nulla nisi consequuntur rerum cupiditate, eius magnam expedita tempora excepturi earum vitae optio vel impedit suscipit enim? Consectetur porro dicta magni sunt laudantium quibusdam? Ut voluptates dolore natus fugit quisquam ab odio!</p>
                           
                        </div>
                       
                    </div>
                  </div>     

                  <div className="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                        <h6>Are you ready to Travel?</h6>
                            <h1>Travel With Fun</h1>
                            <h1>on <span className="span-color">any Place</span> </h1>
                            <p className="banner-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsam sequi pariatur quos quo repellendus assumenda consequatur velit nulla nisi consequuntur rerum cupiditate, eius magnam expedita tempora excepturi earum vitae optio vel impedit suscipit enim? Consectetur porro dicta magni sunt laudantium quibusdam? Ut voluptates dolore natus fugit quisquam ab odio!</p>
                        </div>
                        
                    </div>
                  </div>          
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
    );
};

export default Banner;