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

      </div>
    </section>
  )
}

export default About
