import React, { useEffect, useState } from 'react';

function AreaOfPractice() {
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
          backgroundColor: ' #DABA6D',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          transition: 'opacity 0.5s ease-in-out',
          opacity: isLoading ? '1' : '0',
          overflow: 'hidden'
        }}
      >
        <div  className="line"></div>
      </div>
      <header style={{background: 'rgb(218, 226, 235)'}} id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/jsg_logo.png" alt="" />
          </a>
          <nav  id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="founder">Founder</a></li>
              <li><a href="areaOfPractice" className="">Area of Practice</a></li>
              <li><a href="careers">Career</a></li>
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
      <main  id="main">
       
        <section  id="services" className="services" style={{background: '#fffdd0'}}>
          <div className="container">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <br />
                <h2 style={{fontSize:60, marginBottom:30}}>Area of Practice</h2>
              </div>
            </div>
          </div>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/litigation.png" alt="Litigation" />
                  <h4><a href="#" className="stretched-link">Litigation</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-bank"></i>
                  <h4><a href="#" className="stretched-link">Banking & Finance</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-building"></i>
                  <h4><a href="#" className="stretched-link">Real Estate</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-people"></i>
                  <h4><a href="#" className="stretched-link">Family & Matrimonial Disputes</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/whitecolur.png" alt="White Collar Crimes" />
                  <h4><a href="#" className="stretched-link">White Collar Crimes</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-camera-reels"></i>
                  <h4><a href="#" className="stretched-link">Media & Entertainment</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/dispute.png" alt="Dispute Resolution & Arbitration" />
                  <h4><a href="#" className="stretched-link">Dispute Resolution & Arbitration</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/insolvency.png" alt="Restructuring & Insolvency" />
                  <h4><a href="#" className="stretched-link">Restructuring & Insolvency</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AreaOfPractice