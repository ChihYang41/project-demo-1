import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Loading from '../utils/Loading';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { singleProject } = props;
  return (
    <Fragment>
      {
        singleProject ?
          <Card className="text-center" >
            <Card.Body>
              <Card.Title>{singleProject.title}</Card.Title>
              <Card.Text>
                {singleProject.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <p>
                posted by {singleProject.authorNickname}
                <br/>
                {moment(singleProject.createdAt.toDate().toString()).calendar()}
              </p>
            </Card.Footer>
          </Card>
          :
          <Loading />
      }
    </Fragment>
  )
}

export default ProjectDetails;