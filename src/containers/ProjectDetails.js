import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProjectDetails from '../components/projects/ProjectDetails';
import IsAuthUser from "../hoc/IsAuthUser";

const ProjectDetailsContainer = (props) => {
  return (
    <ProjectDetails {...props} />
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const singleProject = projects ? projects[id] : null;
  return {
    singleProject
  }
}

export default compose(
    firestoreConnect([{collection: 'projects'}]),
    connect(mapStateToProps, null),
    IsAuthUser
  )(ProjectDetailsContainer)
