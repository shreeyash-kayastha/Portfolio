import React, { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project, onExpand }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-header">
        <span className="project-number">{project.number}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>

      <p className="project-description">{project.shortDescription}</p>

      <div className="project-technologies">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {project.caseStudy.github && (
        <div className="project-footer">
          <button
            className="project-link"
            onClick={() => onExpand(project)}
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study
            <span className="link-arrow">→</span>
          </button>
        </div>
      )}

      <div className="project-accent" style={{ backgroundColor: project.color }}></div>
    </div>
  )
}

export default ProjectCard
