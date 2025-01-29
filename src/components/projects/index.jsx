import React from 'react'
import ProjectsLayout from './projectsLayout'

const ProjectsList = ({projects}) => {
  return (
    <div>
      {projects.map((project,index) => <ProjectsLayout key={index} {...project}/>)}
    </div>
  )
}

export default ProjectsList