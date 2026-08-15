import React from 'react'
import { skillsData } from '../../data/portfolio'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    { key: 'programming', label: 'Programming', icon: '{ }' },
    { key: 'data', label: 'Data Science', icon: '◌' },
    { key: 'visualization', label: 'Visualization', icon: '▣' },
    { key: 'machinelearning', label: 'Machine Learning', icon: '⚙' },
    { key: 'mathematics', label: 'Mathematics', icon: '∑' },
    { key: 'tools', label: 'Tools', icon: '✦' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container skills-shell">
        <div className="skills-header">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Technical capability, disciplined and practical.</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.key} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.label}</h3>
              </div>

              <div className="skills-list">
                {skillsData[category.key].map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
