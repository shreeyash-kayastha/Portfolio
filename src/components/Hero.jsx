import React from 'react'
import { personalInfo } from '../data/portfolio'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-label">
              <span>{personalInfo.location}</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-split">Shreeyash</span>
              <span className="hero-title-split">Kayastha</span>
            </h1>

            <p className="hero-role">Computational Mathematics • Data Analyst in the making</p>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Focus</span>
                <span>Analytics</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Approach</span>
                <span>Quant + Story</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Status</span>
                <span>Available</span>
              </div>
            </div>

            <p className="hero-desc">{personalInfo.bio}</p>

            <div className="hero-cta">
              <a href="#projects" className="cta-button primary">
                View Work
                <span className="cta-arrow">→</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="cta-button secondary">
                Get in Touch
                <span className="cta-arrow">→</span>
              </a>
            </div>

            <div className="hero-badges" aria-label="Portfolio stats">
              <span>4+ case studies</span>
              <span>Python & SQL</span>
              <span>Research mindset</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame"></div>
            <div className="portrait-glow"></div>
            <img 
              src={`${import.meta.env.BASE_URL}images/shreeyash.jpg`}
              alt="Shreeyash Kayastha" 
              className="portrait-img"
            />
            <div className="portrait-label-wrap">
              <span className="portrait-label">Portfolio 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
