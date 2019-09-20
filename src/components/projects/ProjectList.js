import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const ProjectList = (props) => {
  const { projects, history } = props;
  return (
    <div className="project-list">
      {projects && projects.map(project => {
        return (
          <div onClick={() => { history.push('./projects/' + project.id) }} key={project.id}>
            <ProjectCard project={project}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList;