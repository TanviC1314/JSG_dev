// Home.jsx
import { useEffect, useState } from "react";
import "../css/style.css";
import "../assets/css/home.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/magnific-popup.css";
import "./Home.css"; // Make sure to create this file for the new styles

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const words = ["Freedom.", " Rights.", " Case."];
  const baseText = "For Your ";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  useEffect(() => {
    let timer;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText === currentWord) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
          return;
        }
        
        timer = setTimeout(type, typingSpeed);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        
        timer = setTimeout(type, deletingSpeed);
      }
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentWordIndex, isDeleting]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('mobile-nav-active');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) { // Restrict to desktop mode
        setIsScrolled(window.scrollY > 0); // Change background color as soon as scrolling is detected
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container" style={{ fontFamily: '"Poppins", Arial, sans-serif' }}>
      <div 
        id="preloader"
        style={{
          display: isLoading ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgb(218, 226, 235)', // Ensure background color is set
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
      <div className="background-overlay" style={{ backgroundImage: "url('/assets/img/practice-1.jpg')" }}></div>
      
      <header 
        id="header" 
        className={`header d-flex align-items-center fixed-top`} 
        style={{ 
          backgroundColor: 'rgb(218, 226, 235)', // Changed header color
          transition: 'background-color 0.3s ease',
          padding: '2px 50px',
          marginBottom:"0px",
          height:"80px" // Reduced padding
        }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img style={{height:"200px"}} src="/assets/img/jsg_logo.png" alt="" />
          </a>

          <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''} mx-auto`}>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="founder">Partners</a></li>
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
            style={{ color: 'black' }}
          ></i>
        </div>
      </header>

      <div className="hero-content">
        <div style={{marginLeft:100}} className="text-left">
          <h2 style={{
            fontSize: '14px',
            color: '#DABA6D',
            textTransform: 'uppercase',
            fontFamily: '"Poppins", Arial, sans-serif',
            fontWeight: 800,
            marginTop:80,
          }} className="welcome-text">
            Welcome To SC Legal
          </h2>
          <div className="typewriter-container">
            <h1 style={{
              fontSize: '42px',
              color: '#fff',
              lineHeight: '1.5',
              fontWeight: 700,
              fontFamily: '"Poppins", Arial, sans-serif',
              marginTop:-20,
            }} className="main-heading">
              SC Legal is Fighting
            </h1>
            <h1 style={{fontSize: '42px', marginTop:"-20px",fontFamily: '"Poppins", Arial, sans-serif',}} className="main-heading">
              {baseText}
              <span className="typed-text">
                {displayText}
                <span className="cursor"></span>
              </span>
            </h1>
          </div>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: '"Poppins", Arial, sans-serif',
            marginTop:"-20px",
          }} className="tagline">
            A law firm in India providing strategic and innovative legal solutions.
          </p>
        </div>
      </div>

      <footer id="footer" className="" style={{ backgroundColor: 'black', marginTop: "1rem", width: '100%' }}>
        <div className="container" style={{marginTop: "1rem"}}>
          <div className="footer-content">
            <div className="footer-section">
              <h3>About SC Legal</h3>
              <div className="company-info">
                <h4>SC Legal<span>A Law Firm</span></h4>
                <p>SC Legal was founded in the year 2022 by Advocate Parichay Sharma. As a law firm, SC Legal offers various legal services extending from Litigation, Arbitration, Banking and Financial Services, Real Estate and Commercial Disputes.</p>
                <p>We have a varied clientele ranging from banks, financial institutions, property developers, firms as well as individuals.</p>
              </div>
            </div>

            <div className="footer-section">
              <h3>Practice Areas</h3>
              <ul className="practice-areas">
                <li>Litigation</li>
                <li>Banking & Finance</li>
                <li>Real Estate</li>
                <li>Family & Matrimonial Disputes</li>
                <li>White Collar Crimes</li>
                <li>Media & Entertainment</li>
                <li>Dispute Resolution & Arbitration</li>
                <li>Restructuring & Insolvency</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item-wrapper">
                  <a 
                    href="https://maps.google.com/?q=SC+Legal+Office+No.+303+B+Wing+03rd+Floor+Oberoi+Chambers+Off+New+Link+Rd+Veera+Desai+Industrial+Estate+Andheri+West+Mumbai+Maharashtra+400053" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <i className="location-icon fas fa-map-marker-alt"></i>
                    <span>
                      SC Legal, Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, 
                      Off New Link Rd, Veera Desai Industrial Estate, Andheri West, 
                      Mumbai, Maharashtra 400053
                    </span>
                  </a>
                  <a 
                    href="https://maps.google.com/?q=SC+Legal+Office+No.+303+B+Wing+03rd+Floor+Oberoi+Chambers+Off+New+Link+Rd+Veera+Desai+Industrial+Estate+Andheri+West+Mumbai+Maharashtra+400053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-icon"
                  >
                    
                  </a>
                </div>
                
                <div className="contact-item-wrapper">
                  <a 
                    href="tel:+918655415028" 
                    className="contact-item"
                  >
                    <i className="phone-icon fas fa-phone"></i>
                    <span>+91 86554 15028</span>
                  </a>
                  <a 
                    href="tel:+918655415028"
                    className="action-icon"
                  >
                    
                  </a>
                </div>
                
                <div className="contact-item-wrapper">
                  <a 
                    href="mailto:parichay@sc-legal.in" 
                    className="contact-item"
                  >
                    <i className="email-icon fas fa-envelope"></i>
                    <span>parichay@sc-legal.in</span>
                  </a>
                  <a 
                    href="mailto:parichay@sc-legal.in"
                    className="action-icon"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6">
                <p>&copy; 2023 SC Legal. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-md-end">
                <ul className="footer-links">
                  <li><a href="home">Home</a></li>
                  <li><a href="founder">Partners</a></li>
                  <li><a href="areaOfPractice">Area of Practice</a></li>
                  <li><a href="careers">Career</a></li>
                  <li><a href="contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      <script src="js/jquery.min.js"></script>
      <script src="js/jquery-migrate-3.0.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.easing.1.3.js"></script>
      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/jquery.animateNumber.min.js"></script>
      <script src="js/google-map.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}

export default Home;