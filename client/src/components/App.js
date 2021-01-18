import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { connect } from 'react-redux'
import * as actions from '../actions'
import EditProfile from './pages/EditProfile'
import CreateProject from './pages/CreateProject'
import SearchProjects from './pages/SearchProjects'
import SearchUsers from './pages/SearchUsers'
import ProjectProfile from './pages/ProjectProfile'
import Footer from './Footer'
import Header from './Header'
import Landing from './pages/Landing'
import EmailUser from './pages/EmailUser'
import Profile from './pages/Profile'
import Hamburger from './Hamburger'

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    
    return (
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/editProfile" value={this.props} component={EditProfile} />
              <Route path="/createproject" component={CreateProject} />
              <Route path="/projectProfile" component={ProjectProfile} />
              <Route path="/searchprojects" component={SearchProjects} />
              <Route path="/searchusers" component={SearchUsers} />
              <Route path="/emailuser" component={EmailUser} />
              <Route path='/profile' component={Profile} />
              {/* <Route path="/profile" component={Profile} /> */}
              <Footer />
            </div>
          </BrowserRouter>
        </AnimatePresence>
      </div>

    );
  };
}

function mapStateToProps({ auth }) {
  // console.log()
  return { auth }
}

export default connect(mapStateToProps, actions)(App);