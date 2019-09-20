import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const ProjectCard = (props) => {
  const { project } = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.content}
        </Card.Text>
         <Card.Footer>
          {project.authorNickname}
          <br/>
          {moment(project.createdAt.toDate().toString()).calendar()}
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard;