import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import "./founder.css";

function Founder() {
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
      <header style={{marginTop:"-20px", marginBottom:"-100px"}} id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img style={{height:"100px"}} src="assets/img/SC_Logo.png" alt="" />
          </a>

          <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="founder" className="active">Partners</a></li>
              <li><a href="areaOfPractice">Area of Practice</a></li>
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

      <br />
      <br />
      <br />

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 style={{fontSize:60, marginBottom:100}}>Partners</h2>
                </div>
              </div>
            </div>

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-5 content">
                <h2>Parichay Sharma</h2>
                <p className="fst-italic py-3">
                  Our Partners Advocate Parichay Sharma is an articulate and efficient lawyer with demonstrated experience in
                  litigation and banking dispute resolution in its diverse manifestations across various areas of law
                  including securities law and criminal law. <br /> He has gained invaluable experience under the guidance of
                  Advocate Rizwan Siddiquee from the year October 2020 to November 2021. During his tenure with Advocate
                  Rizwan Siddiquee he has gained immense experience and exposure to all the criminal courts including the
                  High Court of Bombay. He had also been working on cases involving Company Law, White Collar Crimes, Human
                  Rights Violations and Police Complaint Authorities. He has prepared defence for several sedition,
                  municipal and defamation cases brought against a high-profile celebrity. He has been highly effective at
                  developing case-strategies. He has been drafting various Agreements and Addendums for Corporates and
                  NBFCs. He has been in charge of managing legal cases for American Express Banking Corp, Axis Bank and
                  Standard Chartered Bank Legal Portfolio. He had been attending various CoC meetings and Liquidation
                  meetings for and on behalf of American Express Banking Corp.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91-8655415028">+91 86554 15028</a></span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <img src="assets/img/ParichayProfile.png" className="Image-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

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

      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
}

export default Founder;