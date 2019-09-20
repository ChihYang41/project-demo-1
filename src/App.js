import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNavbar from './containers/Navbar';
import Dashboard from './containers/Dashboard';
import ProjectDetails from './containers/ProjectDetails';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import CreateProject from './containers/CreateProject'

function App(){
  return (
    <Router>
      <div className="App">
        <MainNavbar />
        <div className="main-page">
          <Route exact path="/" component={Dashboard}/>
          <Route path="/projects/:id" component={ProjectDetails}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/newproject" component={CreateProject}/>
        </div>
      </div>
    </Router>
  );
}

export default App;