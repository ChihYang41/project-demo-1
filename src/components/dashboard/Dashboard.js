import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import './Dashboard.scss'

const Dashboard = ({ projects, history, notifications }) => {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <ProjectList projects={projects} history={history}/>
        </Col>
        <Col md={6} sm={12}>
          <Notifications notifications={notifications}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;