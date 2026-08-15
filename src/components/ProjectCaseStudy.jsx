import React, { useEffect } from 'react'
import './ProjectCaseStudy.css'

const ProjectCaseStudy = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!project) return null

  return (
    <div className="case-study-overlay" onClick={onClose}>
      <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close case study">
          ✕
        </button>

        <div className="case-study-container">
          <div className="case-study-header">
            <span className="case-number">{project.number}</span>
            <h2 className="case-title">{project.title}</h2>
          </div>

          <div className="case-study-sections">
            {/* Problem Section */}
            <section className="case-section">
              <div className="section-number">01</div>
              <h3>Problem</h3>
              <p>{project.caseStudy.problem}</p>
            </section>

            {/* Data Section */}
            <section className="case-section">
              <div className="section-number">02</div>
              <h3>Data</h3>
              <div className="data-info">
                <p><strong>Source:</strong> {project.caseStudy.data.source}</p>
                {project.caseStudy.data.target && (
                  <p><strong>Target:</strong> {project.caseStudy.data.target}</p>
                )}
                {project.caseStudy.data.features && (
                  <div>
                    <p><strong>Features:</strong></p>
                    <ul className="features-list">
                      {project.caseStudy.data.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Method Section */}
            <section className="case-section">
              <div className="section-number">03</div>
              <h3>Method</h3>
              <div className="method-info">
                <p><strong>Approach:</strong> {project.caseStudy.method.approach}</p>
                {project.caseStudy.method.validation && (
                  <p><strong>Validation:</strong> {project.caseStudy.method.validation}</p>
                )}
                {project.caseStudy.method.bestConfig && (
                  <p><strong>Best Configuration:</strong> {project.caseStudy.method.bestConfig}</p>
                )}
              </div>
            </section>

            {/* Results Section */}
            <section className="case-section">
              <div className="section-number">04</div>
              <h3>Results</h3>
              <div className="results-info">
                {project.caseStudy.results.rmse && (
                  <div className="metric">
                    <span className="metric-label">RMSE</span>
                    <span className="metric-value">{project.caseStudy.results.rmse}</span>
                  </div>
                )}
                {project.caseStudy.results.r2 && (
                  <div className="metric">
                    <span className="metric-label">R²</span>
                    <span className="metric-value">{project.caseStudy.results.r2}</span>
                  </div>
                )}
                {project.caseStudy.results.insight && (
                  <p className="result-insight">{project.caseStudy.results.insight}</p>
                )}
                {project.caseStudy.results.key && !project.caseStudy.results.rmse && (
                  <p>{project.caseStudy.results.key}</p>
                )}
              </div>
            </section>

            {/* Learned Section */}
            <section className="case-section">
              <div className="section-number">05</div>
              <h3>What I Learned</h3>
              <ul className="learned-list">
                {project.caseStudy.learned.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Links Section */}
            <section className="case-section case-links">
              <div className="section-number">06</div>
              <h3>Links</h3>
              <div className="links-grid">
                {project.caseStudy.github && (
                  <a href={project.caseStudy.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    View on GitHub
                  </a>
                )}
                {project.caseStudy.live && (
                  <a href={project.caseStudy.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCaseStudy
