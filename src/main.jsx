import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Add the following script to handle mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('.navbar');
  const body = document.querySelector('body');

  if (mobileNavToggle && navbar) {
    mobileNavToggle.addEventListener('click', function(e) {
      navbar.classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
      body.classList.toggle('mobile-nav-active');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        navbar.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
        body.classList.remove('mobile-nav-active');
      }
    });
  }
});
