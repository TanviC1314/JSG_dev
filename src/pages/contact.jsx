import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'

function Contact() {
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
  
    <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: 'rgb(218, 226, 235)' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
  
        <a href="home" className="logo d-flex align-items-center  me-auto me-lg-0">
          <img src="assets/img/jsg_logo.png" alt="" style={{height:"50px"}} />
        </a>
  
        <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="home">Home</a></li>
          <li><a href="founder">Partners</a></li>
          <li><a href="areaOfPractice">Area of Practice</a></li>
          <li><a href="careers">Career</a></li>
          <li><a href="contact" className="active">Contact</a></li>
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

 

    <section id="contact" className="contact">
      <div className="container">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <br/>
            <h2 style={{fontSize:60, marginBottom:30,marginTop:30}}>Contact</h2>
            <div style={{ marginBottom:50}} className="responsive-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8622367466583!2d72.8346857!3d19.1575067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74bb07961db%3A0xaf5a042da8b76611!2sSC%20Legal!5e0!3m2!1sen!2sin!4v1667476141729!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

          </div>
        </div>
      </div>
        <div className="row gy-4 justify-content-center">

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p><a href="https://goo.gl/maps/57eZuHDK9RCJ3JWJ6">Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, Off New Link Rd, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053</a></p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></p>
                <p><a href="mailto:ankita@sc-legal.in">ankita@sc-legal.in</a></p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p><a href="tel:+91-8655415028">+91 86554 15028</a></p>
                <p><a href="tel:+91-9619560167">+91 96195 60167</a></p>
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-center mt-4">

          <div className="col-lg-9">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div style={{ marginBottom:50}} className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>



  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

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

  )
}

export default Contact