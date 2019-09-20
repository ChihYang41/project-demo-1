import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import CreateProject from '../components/projects/CreateProject';
import {createProject} from '../store/actions/projectActions';
import IsAuthUser from "../hoc/IsAuthUser";

const CreateProjectContainer = (props) => {
    return (
      <CreateProject {...props} />
    )
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default compose(
    connect(null, mapDispatchToProps),
    IsAuthUser
  )(CreateProjectContainer);