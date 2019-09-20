import React from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import Dashboard from '../components/dashboard/Dashboard';
import IsAuthUser from "../hoc/IsAuthUser";

const DashboardContainer = props => {
  return (
    <Dashboard {...props} />
  )
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
    firestoreConnect([
        { collection: 'projects', limit: 5, orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
      ]),
    connect(mapStateToProps, null),
    IsAuthUser
  )(DashboardContainer)
