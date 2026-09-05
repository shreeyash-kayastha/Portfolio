import React from 'react'
import { educationData } from '../../data/portfolio'
import './Education.css'

const resumeUrl = `${import.meta.env.BASE_URL}assets/Shreeyash_Kayastha_CV.pdf`

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-content">
          <div className="education-card">
            <div className="degree-header">
              <h3 className="degree-title">{educationData.degree}</h3>
              <span className="institution-name">{educationData.institution}</span>
            </div>

            <div className="degree-details">
              <p className="location">
                <strong>Location:</strong> {educationData.location}
              </p>
            </div>

            <div className="highlights">
              <h4>Relevant Coursework</h4>
              <div className="highlights-grid">
                {educationData.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h3>Full Resume</h3>
            <p>
              For a complete overview of my education, experience, and qualifications, please view or download my resume.
            </p>
            <div className="resume-actions">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
               View Resume
              </a>
              <a
               href={resumeUrl}
               download="Shreeyash_Kayastha_CV.pdf"
               className="btn btn-secondary"
              >
               Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
