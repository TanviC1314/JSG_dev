import React from 'react'

function HomeOld() {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/SC_Logo.png" alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="home" className="active">Home</a></li>
              <li><a href="founder">Founder</a></li>
              <li><a href="areaOfPractice">Area of Practice</a></li>
              <li><a href="careers">Career</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-social-links">
            <a href="https://www.linkedin.com/in/sc-legal" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      <br /><br /><br />
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2><span>SC Legal</span> - A law firm in India providing strategic and innovative legal solutions</h2>
              <p>SC Legal was founded in the year 2022 by Advocate Ankita Chatterjee and Advocate Parichay Sharma. As a law firm, SC Legal offers various legal services extending from Litigation, Arbitration, Banking and Financial Services, Real Estate and Commercial Disputes. We have a varied clientele ranging from banks, financial institutions, property developers, firms as well as individuals. As a firm we focus on practical, cost-effective solutions to legal problems that adds value and emphasizes on what work works best for our clients based on the highest professional standard and work ethics. We as a law firm pay a high level of attention to developing and maintaining a personal and professional relationship with our clients, so that our past clients will always turn to us for any other legal needs that may arise for them in the future.</p>
              <a href="contact" className="btn-get-started">Available for hire</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeOld