import React, { useState } from 'react'
import { projectsData } from '../../data/portfolio'
import ProjectCard from '../ProjectCard'
import ProjectCaseStudy from '../ProjectCaseStudy'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-intro">
          <p>
            Below is a curated selection of my recent projects, demonstrating my approach to data analysis, 
            machine learning, and problem-solving. Each project reflects a specific challenge and my methodology 
            for addressing it.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onExpand={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectCaseStudy
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
