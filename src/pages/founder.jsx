import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import "./founder.css";

function Founder() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

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
      <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: 'rgb(218, 226, 235)' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/jsg_logo.png" alt="" style={{ height: "80px", marginLeft: "20px" }} />
          </a>

          <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`} style={{ backgroundColor: isMobileNavActive ? 'white' : 'transparent', color: 'black' }}>
            <ul style={{ backgroundColor: isMobileNavActive ? 'rgba(255, 255, 255, 0.7)' : 'transparent' }}>
              <li><a href="home" className={window.location.pathname === '/home' ? 'active' : ''} style={{ color: 'black' }}>Home</a></li>
              <li><a href="founder" className={window.location.pathname === '/founder' ? 'active' : ''} style={{ color: 'black' }}>Partners</a></li>
              <li><a href="areaOfPractice" className={window.location.pathname === '/areaOfPractice' ? 'active' : ''} style={{ color: 'black' }}>Area of Practice</a></li>
              <li><a href="careers" className={window.location.pathname === '/careers' ? 'active' : ''} style={{ color: 'black' }}>Career</a></li>
              <li><a href="contact" className={window.location.pathname === '/contact' ? 'active' : ''} style={{ color: 'black' }}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-social-links">
            <a href="https://www.linkedin.com/in/sc-legal" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
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
              <div className="col-lg-5 content" style={{ height: '100%', marginTop: '-50px' }}>
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
                  <div className="col-lg-12">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91-8655415028">+91 86554 15028</a></span></li>
                      <li style={{ marginLeft: '-20px' }}><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span style={{ wordBreak: 'break-word' }}><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" style={{ height: '100%', marginTop: '30px' }}>
                <img src="assets/img/ParichayProfile.png" className="Image-fluid" alt="" style={{ height: '100%' }} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div style={{ marginBottom:50 }} className="text-center">
        <button type="submit" style={{ 
          backgroundColor: 'rgb(120, 138, 158)', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          fontSize: '16px',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(100, 120, 140)'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(120, 138, 158)'}
        >Send Message</button>
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