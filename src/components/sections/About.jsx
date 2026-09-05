import React from 'react'

import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-shell">
        <div className="about-header">
          <span className="section-kicker">About</span>
          <h2 className="section-title">I build insight from complexity.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I’m a Computational Mathematics student with a strong interest in analytics, modeling, and decision support. My academic foundation in mathematics, statistics, and algorithms helps me break down messy real-world problems into structure, evidence, and actionable insight.
            </p>

            <p className="about-description">
              I focus on turning data into understanding through exploratory analysis, visual storytelling, forecasting, and thoughtful problem solving. The goal is not just to produce numbers, but to create clarity for the people using them.
            </p>

            <div className="about-tags">
              <span>Data Analytics</span>
              <span>Time Series</span>
              <span>Python</span>
              <span>SQL</span>
              <span>Visualization</span>
              <span>Statistics</span>
            </div>
          </div>

          <div className="about-panel">
            <div className="mini-metric">
              <span className="metric-label">Current focus</span>
              <strong>Data storytelling & forecasting</strong>
            </div>
            <div className="mini-metric">
              <span className="metric-label">Approach</span>
              <strong>Quantitative + practical</strong>
            </div>
            <div className="mini-metric">
              <span className="metric-label">Goal</span>
              <strong>Data Analyst → Product-minded problem solver</strong>
            </div>
          </div>
        </div>

        <div className="recommendations-block">
          <div className="section-block-header">
            <span className="section-kicker">Recommendations</span>
          </div>

          <div className="recommendation-list">
            {recommendations.map((item) => (
              <article className="recommendation-card" key={item.name}>
                <div className="avatar-orb" aria-hidden="true">{item.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</div>
                <div className="recommendation-copy">
                  <div className="person-meta">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                  <p>“{item.quote}”</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="certifications-block">
          <div className="section-block-header">
            <span className="section-kicker">Certifications</span>
          </div>

          <div className="certification-grid">
            {certifications.map((cert) => (
              <div className="certification-card" key={cert.name}>
                <div className="cert-chip" style={{ background: cert.accent }}>
                  {cert.name.charAt(0)}
                </div>
                <div className="cert-copy">
                  <h3>{cert.name}</h3>
                  <span>{cert.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
