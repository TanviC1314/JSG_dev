import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';

function Careers() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('mobile-nav-active');
    }
  };

  return (
    <div>
      <div 
        id="preloader"
        style={{
          display: isLoading ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          transition: 'opacity 0.5s ease-in-out',
          opacity: isLoading ? '1' : '0',
          overflow: 'hidden'
        }}
      >
        <div className="line"></div>
      </div>
      <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: 'rgb(218, 226, 235)' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/jsg_logo.png" alt="jsg" />
          </a>
          <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''} mx-auto`}>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="founder">Founder</a></li>
              <li><a href="areaOfPractice">Area of Practice</a></li>
              <li><a href="careers" className="active">Career</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
            <div className="header-social-links">
              <a href="https://www.linkedin.com/in/sc-legal" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </nav>
          <i 
            className={`mobile-nav-toggle ${isMobileNavActive ? 'bi bi-x mobile-nav-hide' : 'bi bi-list mobile-nav-show'}`}
            onClick={toggleMobileNav}
          ></i>
        </div>
      </header>
      <br /><br /><br />
      <main id="main">
        
        <section id="contact" className="contact">
          <div className="container">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 style={{fontSize:60, marginBottom:50,marginTop:40}}>Career</h2>
              </div>
            </div>
          </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-9">
                <form action="" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="text" className="form-control" name="resume" id="resume" placeholder="Resume (URL Link)" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="ref" rows="5" placeholder="Reference"></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your details has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send</button></div>
                </form>
              </div>
            </div>
          </div>
          <br/>
          <br/>
        </section>
      </main>
    </div>
  )
}

export default Careers