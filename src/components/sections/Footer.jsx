import React from 'react'
import { personalInfo } from '../../data/portfolio'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-subtitle">
              {personalInfo.title} · {personalInfo.position}
            </p>
            <p className="footer-location">{personalInfo.location}</p>
          </div>

          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} title="Email">
              Email
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-note">
            Designed & developed with attention to detail.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
