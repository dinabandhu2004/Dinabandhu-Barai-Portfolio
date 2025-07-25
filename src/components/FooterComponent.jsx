import React from 'react';
import './FooterComponent.css';
import { FaChevronUp } from 'react-icons/fa';

const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-scroll-top" onClick={scrollToTop}>
        <FaChevronUp />
      </div>

      <div className="footer-content">
        <p>
          Copyright ©2025, <span className="footer-name">Dinabandhu Barai</span>. All Rights Reserved
        </p>

        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
